import { graphQL } from '../request'
import {
  FIND_USERSTATUS_BY_USERNAME,
  FIND_USER_BY_NICKNAME,
  FIND_USER_BY_USERNAME
} from '../../graphql/user'
import { CHECK_FOLLOW, FOLLOW } from '../../graphql/follow'
import { DetailedUserInfo, FollowUser } from '../../types/UserInfo'

export const getUserStatus = async (id: string): Promise<DetailedUserInfo> => {
  const getUserStatusRes = await graphQL(FIND_USERSTATUS_BY_USERNAME, { id })
  const getUserStatusData = await getUserStatusRes.json()
  if (Object.keys(getUserStatusData).includes('errors')) throw new Error()
  return getUserStatusData.data.userstatus
}

export const getUserByUsername = async (username: string): Promise<string> => {
  const getUserRes = await graphQL(FIND_USER_BY_USERNAME, { username })
  const getUserData = await getUserRes.json()
  if (Object.keys(getUserData).includes('errors')) {
    throw new Error(getUserData.errors[0].statusCode)
  }
  return getUserData.data.user.id
}

export const getUserByNickname = async (nickname: string): Promise<string> => {
  const getUserRes = await graphQL(FIND_USER_BY_NICKNAME, { nickname })
  const getUserData = await getUserRes.json()
  if (Object.keys(getUserData).includes('errors')) {
    throw new Error(getUserData.errors[0].statusCode)
  }
  return getUserData.data.user.id
}

export const checkUserFollowed = async (user: string) => {
  const checkUserFollowedRes = await graphQL(CHECK_FOLLOW, { user })
  const checkUserFollowedData = await checkUserFollowedRes.json()
  if (Object.keys(checkUserFollowedData).includes('errors')) {
    throw new Error(checkUserFollowedData.errors[0].statusCode)
  }
  return checkUserFollowedData.data.checkFollow.isFollow
}

export const followUser = async (user: string): Promise<FollowUser> => {
  if (await checkUserFollowed(user)) {
    return { isFollow: true, projects: [], ...(await getUserStatus(user)) }
  }
  const followUserRes = await graphQL(FOLLOW, { user })
  const followUserData = await followUserRes.json()
  if (Object.keys(followUserData).includes('errors')) {
    throw new Error(followUserData.errors[0].statusCode)
  }
  return followUserData.data.follow.follow
}
