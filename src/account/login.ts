import { graphql, setSid } from '../request'
import { GET_CAPTCHA_DATA, SIGNIN_BY_USERNAME } from '../graphql/user'
import { User } from '../user'
import fetch from 'node-fetch'
import { createWriteStream } from 'fs'
import { join } from 'path'
import { createInterface } from 'readline'

export const login = async (
  username: string,
  password: string,
  remember: boolean = true,
  captcha?: { key: string; value: string }
): Promise<User> => {
  const variables: {
    username: string
    password: string
    rememberme: boolean
    captchaKey?: string
    captchaValue?: string
    captchaType?: 'image'
  } = {
    username,
    password,
    rememberme: remember
  }

  if (captcha !== undefined) {
    variables.captchaKey = captcha.key
    variables.captchaValue = captcha.value
    variables.captchaType = 'image'
  }
  const {
    data: { signinByUsername: data },
    error,
    cookie
  } = await graphql(SIGNIN_BY_USERNAME, variables)

  if (error?.statusCode !== undefined) {
    if (error.statusCode === 429) {
      const {
        data: { getCaptchaData: data },
        error
      } = await graphql(GET_CAPTCHA_DATA, {
        captchaType: 'image'
      })

      const { key } = data.result

      if (error?.statusCode === undefined) {
        const res = await fetch(
          `https://playentry.org/api/captcha/image/${key}`
        )
        const stream = createWriteStream(join(process.cwd(), 'captcha.jpg'))
        await new Promise((resolve, reject) => {
          res.body.pipe(stream)
          res.body.on('error', reject)
          stream.on('finish', resolve)
        })

        const rl = createInterface({
          input: process.stdin,
          output: process.stdout
        })
        const captcha = await new Promise<string>(res =>
          rl.question('captcha.jpg에 보이는 캡챠 문자열을 입력하세요: ', res)
        )
        rl.close()

        return login(username, password, remember, {
          key,
          value: captcha.trim()
        })
      }
    }
    throw new Error(error.statusCode.toString())
  }

  const parsedCookie = new RegExp('ETR_SID=[^;]+').exec(cookie!)
  const ETR_SID = decodeURIComponent(
    !!parsedCookie ? parsedCookie.toString().replace(/^[^=]+./, '') : ''
  )

  setSid(ETR_SID)

  return User.fromId(data.id)
}
