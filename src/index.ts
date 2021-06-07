import { DetailedUserInfo } from '../types/UserInfo'
import { login } from './auth'
import { followUser, getIdByNickname, getUserStatus } from './user'
import { getDiscussList } from './discuss'

const username = 'entryapi'
const password = 'entryapi1234'

const main = async () => {
  console.log(Object.keys((await getDiscussList('qna', 0, 1)).list[0]))
  console.log(Object.keys((await getDiscussList('free', 0, 1)).list[0]))
  console.log(Object.keys((await getDiscussList('notice', 0, 1)).list[0]))
  console.log(Object.keys((await getDiscussList('tips', 0, 1)).list[0]))
  const user: DetailedUserInfo = await getUserStatus(
    await getIdByNickname('띠까부계')
  )
  console.log((await followUser(user)).isFollow)
}

login(username, password, true)
  .then(userInfo => console.log(`${userInfo.nickname}으로 로그인했습니다!`))
  .then(main)
  .catch(console.error)
