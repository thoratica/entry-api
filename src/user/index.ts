import { graphQL } from '../request'
import {
  FIND_USERSTATUS_BY_USERNAME,
  FIND_USER_BY_NICKNAME,
  FIND_USER_BY_USERNAME
} from '../../graphql/user'
import {
  CHECK_FOLLOW,
  FOLLOW,
  FOLLOWERS,
  FOLLOWINGS
} from '../../graphql/follow'
import { DetailedUserInfo, FollowUser } from '../../types/UserInfo'

export const getUserStatus = async (id: string): Promise<DetailedUserInfo> =>
  (await graphQL(FIND_USERSTATUS_BY_USERNAME, { id })).userstatus

export const getIdByUsername = async (username: string): Promise<string> =>
  (await graphQL(FIND_USER_BY_USERNAME, { username })).user.id

export const getIdByNickname = async (nickname: string): Promise<string> =>
  (await graphQL(FIND_USER_BY_NICKNAME, { nickname })).user.id

export const checkUserFollowed = async (user: string): Promise<boolean> =>
  (await graphQL(CHECK_FOLLOW, { user })).checkFollow.isFollow

export const followUser = async (
  user: DetailedUserInfo | string
): Promise<FollowUser> => {
  if (typeof user === 'object') user = user.id
  if (await checkUserFollowed(user)) {
    return { isFollow: true, projects: [], ...(await getUserStatus(user)) }
  }
  return (await graphQL(FOLLOW, { user })).follow.follow
}

export const getFollowers = async (
  user: string
): Promise<{ hasNext: boolean; list: FollowUser[] }> =>
  (await graphQL(FOLLOWERS, { user })).followers

export const getFollowings = async (
  user: string
): Promise<{ hasNext: boolean; list: FollowUser[] }> =>
  (await graphQL(FOLLOWINGS, { user })).followings
