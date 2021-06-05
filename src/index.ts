import { login } from './auth'
import { followUser, getUserByNickname } from './user'

const username = 'entryapi'
const password = 'entryapi1234'

login(username, password, true)
  .then(userInfo => console.log(`${userInfo.nickname}으로 로그인했습니다!`))
  .then(async () => {
    console.log(
      (await followUser(await getUserByNickname('띠까부계'))).nickname
    )
  })
  .catch(console.error)
