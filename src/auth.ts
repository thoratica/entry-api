import { createWriteStream } from 'fs'
import { resolve } from 'path'
import { createInterface } from 'readline'
import {
  GET_CAPTCHA_DATA,
  SIGNIN_BY_USERNAME,
  WITHDRAW_SIGNIN_BY_USERNAME
} from '../graphql/user'
import { UserInfo } from '../types/UserInfo'
import { graphQL, rawRequest, setSid } from './request'

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
  const res = await graphQL(
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
        }
  )
  if (Object.keys(res.data).includes('errors')) {
    if (res.data.errors[0].statusCode === 429) {
      const captchaDataRes = await graphQL(GET_CAPTCHA_DATA, {
        captchaType: 'image'
      })

      const key = captchaDataRes.data.data.getCaptchaData.result.key
      const url = `https://playentry.org/api/captcha/image/${key}`
      const path = resolve(__dirname, 'captcha.jpg')
      const writer = createWriteStream(path)

      const captchaImageRes = await rawRequest.get(url, {
        responseType: 'stream'
      })
      captchaImageRes.data.pipe(writer)

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
        res.data.errors
          .map((err: { statusCode: number }) => err.statusCode)
          .join(', ')
      )
    }
  } else {
    setSid(res.headers['set-cookie'][2].slice('ETR_SID='.length).split(';')[0])
    return captcha.enterCaptcha
      ? res.data.data.withdrawSigninByUsername
      : res.data.data.signinByUsername
  }
}
