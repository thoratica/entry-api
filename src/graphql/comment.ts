import * as DTO from './dto/comment'
import * as Common from './dto/common'

export const SELECT_COMMENTS = `
    query (${DTO.SELECT_COMMENTS_INPUT}){
        commentList(${DTO.SELECT_COMMENTS_MIDDLE}) {
            total
            list {
                ${Common.COMMENT}
            }
        }
    }
`

export const CREATE_COMMENT = `
    mutation CREATE_COMMENT(
        ${DTO.CREATE_COMMENT_INPUT}
    ) {
        createComment(
            ${DTO.CREATE_COMMENT_MIDDLE}
        ) {
            warning
            comment {
                ${Common.COMMENT}
            }
        }
    }
`

export const REMOVE_COMMENT = `
    mutation REMOVE_COMMENT($id:ID){
        removeComment(id: $id){
            id
        }
    }
`

export const CREATE_AGREE = `
    mutation CREATE_AGREE(
        ${DTO.CREATE_AGREE_INPUT}
    ){
        createAgree(
            ${DTO.CREATE_AGREE_MIDDLE}
        ){
            ${Common.COMMENT}
        }
    }
`

export const HIDE_COMMENT = `
    mutation HIDE_COMMENT($id: ID){
        hideComment(id: $id){
            ${Common.COMMENT}
        }
    }
`

export const SHOW_COMMENT = `
    mutation SHOW_COMMENT($id: ID){
        showComment(id: $id){
            ${Common.COMMENT}
        }
    }
`

export const REPAIR_COMMENT = `
    mutation REPAIR_COMMENT($id: ID, $content: String, $image: String, $sticker: String){
        repairComment(id: $id, content: $content, image: $image, sticker: $sticker){
            ${Common.COMMENT}
        }
    }
`

export const CHECK_AGREE = `
    query CHECK_AGREE($target: String) {
        checkAgree(target: $target){
            ${Common.COMMENT}
        }
    }
`

export const BLAMED_COMMENT = `
    mutation BLAMED_COMMENT($id: ID) {
        blamedComment(id: $id){
            ${Common.COMMENT}
        }
    }
`
