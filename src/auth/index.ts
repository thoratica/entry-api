import { createWriteStream } from 'fs'
import { resolve } from 'path'
import { createInterface } from 'readline'
import { IPADDRESS_BANNED } from '../../graphql/banned'
import {
  GET_CAPTCHA_DATA,
  SIGNIN_BY_USERNAME,
  WITHDRAW_SIGNIN_BY_USERNAME
} from '../../graphql/user'
import { UserInfo } from '../../types/UserInfo'
import { getCookie, graphQL, rawRequest, setCookie } from '../request'

export const checkIpBanned = async () => {
  const checkIpBannedRes = await graphQL(IPADDRESS_BANNED, {}, true)
  const checkIpBannedData = await checkIpBannedRes.json()
  if (Object.keys(checkIpBannedData).includes('errors')) {
    throw new Error(checkIpBannedData.errors[0].statusCode)
  }
  setCookie(
    `${getCookie()};ETR_CHK=${
      checkIpBannedRes.headers
        .get('set-cookie')
        ?.split('ETR_CHK=')[1]
        .split(';')[0]
    }`
  )
  return checkIpBannedData
}

export const login = async (
  username: string,
  password: string,
  remember: boolean = false,
  captcha: {
    enterCaptcha: boolean
    captchaKey?: string
    captchaValue?: string
  } = { enterCaptcha: false }
): Promise<UserInfo> => {
  const signinRes = await graphQL(
    captcha.enterCaptcha ? WITHDRAW_SIGNIN_BY_USERNAME : SIGNIN_BY_USERNAME,
    captcha.enterCaptcha
      ? {
          username,
          password,
          rememberme: remember,
          captchaKey: captcha.captchaKey,
          captchaValue: captcha.captchaValue,
          captchaType: 'image'
        }
      : {
          username,
          password,
          rememberme: remember
        },
    true
  )
  const signinData = await signinRes.json()
  if (Object.keys(signinData).includes('errors')) {
    if (signinData.errors[0].statusCode === 429) {
      const captchaDataRes = await graphQL(
        GET_CAPTCHA_DATA,
        {
          captchaType: 'image'
        },
        true
      )

      const key = (await captchaDataRes.json()).data.getCaptchaData.result.key
      const url = `/api/captcha/image/${key}`
      const path = resolve(process.cwd(), 'captcha.jpg')
      const writer = createWriteStream(path)
      const captchaImageRes = await rawRequest(url)

      captchaImageRes.body.pipe(writer)

      return await new Promise(resolve =>
        writer.on('finish', async () => {
          const rl = createInterface({
            input: process.stdin,
            output: process.stdout
          })
          const captchaValue = await new Promise<string>(resolve => {
            rl.question(`${path}의 이미지를 보이는대로 입력해주세요: `, resolve)
          })
          rl.close()

          resolve(
            await login(username, password, remember, {
              enterCaptcha: true,
              captchaKey: key,
              captchaValue
            })
          )
        })
      )
    } else {
      throw new Error(
        signinData.errors
          .map((err: { statusCode: number }) => err.statusCode)
          .join(', ')
      )
    }
  } else {
    const cookie = new RegExp('ETR_SID' + '=[^;]+').exec(
      signinRes.headers.get('set-cookie')!
    )
    const ETR_SID = decodeURIComponent(
      cookie ? cookie.toString().replace(/^[^=]+./, '') : ''
    )
    setCookie(`ETR_SID=${ETR_SID}`)
    await checkIpBanned()
    return captcha.enterCaptcha
      ? signinData.data.withdrawSigninByUsername
      : signinData.data.signinByUsername
  }
}
