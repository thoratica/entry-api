import * as DTO from './dto/syllabus'
import * as Common from './dto/common'

export const SELECT_SYLLABUS = `
    query SELECT_SYLLABUS(
        ${DTO.SELECT_SYLLABUS_INPUT}
    ) {
        syllabusList(
            ${DTO.SELECT_SYLLABUS_MIDDLE}
        ) {
            total
            list {
                ${Common.SYLLABUS_LIST_ITEM}
            }
            searchAfter
        }
    }
`

export const SELECT_USER_SYLLABUS = `
    query SELECT_USER_SYLLABUS(
        ${DTO.SELECT_USER_SYLLABUS_INPUT}
    ) {
        userSyllabusList(
            ${DTO.SELECT_USER_SYLLABUS_MIDDLE}
    ) {
            total
            list {
                ${Common.SYLLABUS_LIST_ITEM}
            }
            searchAfter
        }
    }
`

export const SELECT_FAVORITE_SYLLABUS = `
    query SELECT_FAVORITE_SYLLABUS(
        $user: String!,
        $pageParam: PageParam
    ) {
        favoriteSyllabusList(
            user: $user,
            pageParam: $pageParam
    ) {
            total
            list {
                ${Common.SYLLABUS_LIST_ITEM}
            }
        }
    }
`

export const SYLLABUS_PREV_NEXT = `
    query SYLLABUS_PREV_NEXT ($groupId: ID, $homework: Boolean, $created: Int) {
        syllabusPrevNext (groupId: $groupId, homework: $homework, created: $created) {
            next {
                type
                target
            }
            prev {
                type
                target
            }
        }
    }
`
