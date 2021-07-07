import * as Common from './dto/common'

export const CHECK_LIKE = `
    query CHECK_LIKE($target: String!){
        checkLike(target: $target) {
            isLike
        }
    }
`

export const LIKE = `
    mutation LIKE($target: String, $targetSubject: String, $targetType: String, $groupId: ID) {
        like(target: $target, targetSubject: $targetSubject, targetType: $targetType, groupId: $groupId) {
            ${Common.LIKE}
        }
    }
`

export const UNLIKE = `
    mutation UNLIKE($target: String) {
        unlike(target: $target) {
            ${Common.LIKE}
        }
    }
`

export const LIKE_LIST = `
    query LIKE_LIST($target: String){
        likeList(target: $target) {
            total
            list {
                ${Common.LIKE_USER}
            }
        }
    }
`
