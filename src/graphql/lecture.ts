import * as DTO from './dto/lecture'
import * as Common from './dto/common'

export const CREATE_LECTURE = `
    mutation CREATE_LECTURE(
        ${DTO.CREATE_LECTURE_INPUT}
    ) {
        createLecture(
            ${DTO.CREATE_LECTURE_MIDDLE}
        ) {
            ${Common.RESPONSE}
        }
    }
`
export const UPDATE_LECTURE = `
    mutation UPDATE_LECTURE(
        ${DTO.UPDATE_LECTURE_INPUT}
    ) {
        updateLecture(
            ${DTO.UPDATE_LECTURE_MIDDLE}
        ) {
            ${Common.RESPONSE}
        }
    }
`

export const COPY_LECTURE = `
    mutation COPY_LECTURE(
        $id: ID!
    ) {
        copyLecture(
            id: $id
        ) {
            ${Common.RESPONSE}
        }
    }
`

export const DELETE_LECTURE = `
    mutation DELETE_LECTURE(
        $id: ID!
    ) {
        deleteLecture(
            id: $id
        ) {
            ${Common.RESPONSE}
        }
    }
`

export const BLAMED_LECTURE = `
    mutation BLAMED_LECTURE( $id: ID! ) {
        blamedLecture( id: $id) {
            ${Common.LECTURE}
        }
    }
`

export const SHOW_LECTURE = `
    mutation SHOW_LECTURE( $id: ID! ) {
        showLecture( id: $id) {
            ${Common.LECTURE}
        }
    }
`

export const SELECT_LECTURE = `
    query SELECT_LECTURE($id: ID!, $groupId: ID, $studentId: ID){
        lecture(id: $id, groupId: $groupId, studentId: $studentId){
            ${Common.LECTURE}
        }
    }
`

export const SELECT_LECTURE_WITH_INFOS = `
    query SELECT_LECTURE_WITH_INFOS($id: ID!, $groupId: ID, $studentId: ID, $homeworkId: ID){
        lectureWithInfos(id: $id, groupId: $groupId, studentId: $studentId, homeworkId: $homeworkId){
            lecture {
                ${Common.LECTURE}
            }
            userProjects {
                ${Common.PROJECT}
            }
            student{
                ${Common.NEW_STUDENT}
            }
            group{
                ${Common.GROUP}
            }
        }
    }
`

// 과제등록시 조회하는 스터디 리스트
export const SELECT_LECTURE_FOR_HOMEWORK = `
    query SELECT_LECTURE_FOR_HOMEWORK($id: ID!){
        selectLetureForHomework(id:$id){
            ${Common.LECTURE}
        }
    }
`
