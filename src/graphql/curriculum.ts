import * as DTO from './dto/curriculum'
import * as Common from './dto/common'

export const CREATE_CURRICULUM = `
    mutation CREATE_CURRICULUM(
        ${DTO.CREATE_CURRICULUM_INPUT}
    ) {
        createCurriculum(
            ${DTO.CREATE_CURRICULUM_MIDDLE}
        ) {
            ${Common.RESPONSE}
        }
    }
`

export const UPDATE_CURRICULUM = `
    mutation UPDATE_CURRICULUM(
        ${DTO.UPDATE_CURRICULUM_INPUT}
    ) {
        updateCurriculum(
            ${DTO.UPDATE_CURRICULUM_MIDDLE}
        ) {
            ${Common.RESPONSE}
        }
    }
`

export const DELETE_CURRICULUM = `
    mutation DELETE_CURRICULUM(
        $id: ID!
    ) {
        deleteCurriculum(
            id: $id
        ) {
            ${Common.RESPONSE}
        }
    }
`

export const SELECT_CURRICULUM = `
    query SELECT_CURRICULUM($id: ID!, $groupId: ID){
        curriculum(id: $id, groupId: $groupId){
            ${Common.CURRICULUM}
        }
    }
`

export const BLAMED_CURRICULUM = `
    mutation BLAMED_CURRICULUM($id: ID!){
        blamedCurriculum(id: $id){
            ${Common.CURRICULUM}
        }
    }
`

export const SHOW_CURRICULUM = `
    mutation SHOW_CURRICULUM($id: ID!){
        showCurriculum(id: $id){
            ${Common.CURRICULUM}
        }
    }
`
