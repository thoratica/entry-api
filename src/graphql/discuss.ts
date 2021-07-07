import * as DTO from './dto/discuss'
import * as Common from './dto/common'

export const SELECT_DISCUSS = `
    query ($id: ID!){
        discuss (id: $id){
            ${Common.DISCUSS}
        }
    }
`

export const SELECT_GROUP_COMMUNITY = `
    query ($id: ID! $groupId: ID){
        selectGroupCommunity (id: $id groupId: $groupId){
            ${Common.DISCUSS}
        }
    }
`

export const SELECT_DISCUSS_PREV_NEXT = `
    query ($discussJson: JSON){
        discussPrevNext(discussJson: $discussJson){
            prev
            next
        }
    }
`

export const SELECT_MY_DISCUSS = `
    query ($id: ID!){
        myDiscuss (id: $id){
            ${Common.DISCUSS}
        }
    }
`

export const SELECT_DISCUSS_LIST = `
    query (${DTO.SELECT_DISCUSS_LIST_INPUT}){
        discussList(${DTO.SELECT_DISCUSS_LIST_MIDDLE}) {
            total
            list {
                ${Common.DISCUSS}
            }
            searchAfter
        }
    }
`

export const CREATE_DISCUSS = `
    mutation CREATE_DISCUSS(
        ${DTO.CREATE_DISCUSS_INPUT}
    ) {
        createDiscuss(
            ${DTO.CREATE_DISCUSS_MIDDLE}
        ) {
            warning
            discuss{
                ${Common.DISCUSS}
            }
        }
    }
`

export const CREATE_ENTRYSTORY = `
    mutation CREATE_ENTRYSTORY(
        ${DTO.CREATE_ENTRYSTORY_INPUT}
    ) {
        createEntryStory(
            ${DTO.CREATE_ENTRYSTORY_MIDDLE}
        ) {
            warning
            discuss{
                ${Common.DISCUSS}
            }
        }
    }
`

export const MODIFY_DISCUSS = `
    mutation MODIFY_DISCUSS(
        $id: ID!
        $title: String
        $content: JSON
        $category: String
        $text: String
    ) {
        modifyDiscuss(
            id: $id
            title: $title
            content: $content
            category: $category
            text: $text
        ) {
            ${Common.DISCUSS}
        }
    }
`

export const SELECT_QNA_LIST = `
    query (${DTO.SELECT_DISCUSS_LIST_INPUT}){
        discussList(${DTO.SELECT_DISCUSS_LIST_MIDDLE}) {
            total
            list {
                ${DTO.QnA}
            }
            searchAfter
        }
    }
`

export const SELECT_ENTRYSTORY = `
    query (${DTO.SELECT_DISCUSS_LIST_INPUT}){
        discussList(${DTO.SELECT_DISCUSS_LIST_MIDDLE}) {
            total
            list {
                ${Common.EntryStory}
            }
            searchAfter
        }
    }
`

export const SELECT_NOTICE_LIST = `
    query (${DTO.SELECT_DISCUSS_LIST_INPUT}){
        discussList(${DTO.SELECT_DISCUSS_LIST_MIDDLE}) {
            total
            list {
                ${DTO.Notice}
            }
            searchAfter
        }
    }
`

export const REMOVE_DISCUSS = `
    mutation REMOVE_DISCUSS($id: ID) {
        removeDiscuss(id: $id){
            id
        }
    }
`

export const BLAMED_DISCUSS = `
    mutation BLAMED_DISCUSS($id: ID) {
        blamedDiscuss(id: $id){
            id
        }
    }
`

export const SHOW_DISCUSS = `
    mutation SHOW_DISCUSS($id: ID){
        showDiscuss(id: $id){
            id
        }
    }
`

// JSON 데이터 커뮤니티 삭제 (학급)
export const REMOVE_DISCUSS_INFO = `
    mutation REMOVE_DISCUSS($discussJson: JSON) {
        removeDiscussInfo(discussJson: $discussJson){
            ${Common.RESPONSE}
        }
    }
`

// JSON 커뮤니티 숨김 (학급)
export const BLAMED_DISCUSS_INFO = `
    mutation BLAMED_DISCUSS_INFO($discussJson: JSON) {
        blamedDiscussInfo(discussJson: $discussJson){
            ${Common.RESPONSE}
        }
    }
`

export const REPLY_DISCUSS = `
    mutation REPLY_DISCUSS($id: ID!, $reply: String) {
        replyDiscuss(id: $id, reply: $reply){
            ${DTO.SUGGESTION}
        }
    }
`

export const REPAIR_ENTRYSTORY = `
    mutation REPAIR_COMMENT($id: ID, $content: String, $image: String, $sticker: String){
        repairEntryStory(id: $id, content: $content, image: $image, sticker: $sticker){
            ${Common.DISCUSS}
        }
    }
`
