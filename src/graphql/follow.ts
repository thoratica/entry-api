import * as DTO from './dto/follow'
import * as Common from './dto/common'

export const FOLLOWINGS = `
    query SELECT_FOLLOWINGS($user: String, $pageParam: PageParam){
        followings(user: $user, pageParam: $pageParam) {
            hasNext
            list {
                ${Common.FOLLOWINGS}
            }
        }
    }
`

export const FOLLOWERS = `
    query SELECT_FOLLOWERS($user: String, $pageParam: PageParam){
        followers(user: $user, pageParam: $pageParam) {
            hasNext
            list {
                ${Common.FOLLOWERS}
            }
        }
    }
`

export const CHECK_FOLLOW = `
    query CHECK_FOLLOW($user: String!){
        checkFollow(user: $user) {
            isFollow
        }
    }
`

export const FOLLOW = `
    mutation FOLLOW(
        ${DTO.FOLLOW_INPUT}
    ) {
        follow(
            ${DTO.FOLLOW_MIDDLE}
        ) {
            ${Common.FOLLOW}
        }
    }
`

export const UNFOLLOW = `
    mutation UNFOLLOW(
        ${DTO.UNFOLLOW_INPUT}
    ) {
        unfollow(
            ${DTO.UNFOLLOW_MIDDLE}
        ) {
            ${Common.FOLLOW}
        }
    }
`
