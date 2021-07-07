import * as Common from './dto/common'

export const FAVORITES = `
    query FAVORITES($user: String, $target: String, $targetSubject: String, $targetType: String, $pageParam: PageParam){
        favorites(user: $user, target: $target, targetSubject: $targetSubject, targetType: $targetType, pageParam: $pageParam) {
            total
            list {
                ${Common.FAVORITE}
                project {
                    ${Common.PROJECT}
                }
            }
        }
    }
`

export const FAVORITE_COUNTS = `
    query FAVORITES($user: String, $target: String, $targetSubject: String, $targetType: String, $pageParam: PageParam){
        favorites(user: $user, target: $target, targetSubject: $targetSubject, targetType: $targetType, pageParam: $pageParam) {
            total
        }
    }
`

export const CHECK_FAV = `
    query CHECK_FAV($target: String!){
        checkFav(target: $target) {
            isFavorite
        }
    }
`

export const FAV = `
    mutation FAV($target: String, $targetSubject: String, $targetType: String, $groupId: ID) {
        fav(target: $target, targetSubject: $targetSubject, targetType: $targetType, groupId: $groupId) {
            ${Common.FAVORITE}
        }
    }
`

export const UNFAV = `
    mutation UNFAV($target: String) {
        unfav(target: $target) {
            ${Common.FAVORITE}
        }
    }
`

export const FAV_LIST = `
    query FAV_LIST($target: String!){
        favList(target: $target) {
            total
            list {
                ${Common.LIKE_USER}
            }
        }
    }
`
