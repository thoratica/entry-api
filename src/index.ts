import { login } from './auth'

const username = 'entryapi'
const password = 'entryapi1234'

const main = async () => {
  const loginRes = await login(username, password, true)

  console.log(loginRes)
}

main()
