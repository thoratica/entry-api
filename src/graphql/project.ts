import * as DTO from './dto/project'
import * as Common from './dto/common'

export const SELECT_PROJECT = `
    query($id: ID! $groupId: ID) {
        project(id: $id, groupId: $groupId) {
            ${Common.PROJECT}
        }
     }
`

export const GET_CLOUD_SERVER_INFO = `
    query($id: ID!) {
        cloudServerInfo(id: $id) {
            url
            query
        }
    }
`

export const SELECT_STUDY_PROJECT = `
    query SELECT_STUDY_PROJECT($id: ID!) {
        studyProject(id: $id) {
            ${Common.PROJECT}
        }
    }
`

export const SELECT_PROJECTS = `
    query SELECT_PROJECTS(
        ${DTO.SELECT_PROJECTS_INPUT}
    ) {
        projectList(
            ${DTO.SELECT_PROJECTS_MIDDLE}
        ) {
            total
            list {
                ${Common.PROJECT_LIST_ITEM}
            }
            last
            searchAfter
        }
    }
`

export const SELECT_USER_PROJECTS = `
    query SELECT_USER_PROJECTS(
        ${DTO.SELECT_USER_PROJECTS_INPUT}
    ) {
        userProjectList(
            ${DTO.SELECT_USER_PROJECTS_MIDDLE}
    ) {
            total
            list {
                ${Common.PROJECT_LIST_ITEM}
            }
            searchAfter
        }
    }
`

export const SELECT_FOLLOWING_PROJECTS = `
    query SELECT_FOLLOWING_PROJECTS(
        ${DTO.SELECT_FOLLOWING_PROJECTS_INPUT}
    ) {
        followingProjectList(
            ${DTO.SELECT_FOLLOWING_PROJECTS_MIDDLE}
    ) {
            total
            list {
                ${Common.PROJECT_LIST_ITEM}
            }
            searchAfter
        }
    }
`

export const SELECT_FAVORITE_PROJECTS = `
    query SELECT_FAVORITE_PROJECTS(
        $user: String!,
        $pageParam: PageParam
    ) {
        favoriteProjectList(
            user: $user,
            pageParam: $pageParam
    ) {
            total
            list {
                ${Common.PROJECT_LIST_ITEM}
            }
            searchAfter
        }
    }
`

export const BESIDE_PROJECTS = `
    query BESIDE_PROJECTS ($id: ID!, $user: String, $query: String) {
        besideProjects(id: $id, user: $user, query: $query) {
            list {
                id
            }
        }
    }
`

export const CREATE_PROJECT = `
    mutation CREATE_PROJECT(
        ${DTO.CREATE_PROJECT_INPUT}
    ) {
        createProject(
            ${DTO.CREATE_PROJECT_MIDDLE}
        ) {
            ${Common.RESPONSE}
        }
    }
`

export const UPSERT_LECTURE_PROJECT = `
    mutation UPSERT_LECTURE_PROJECT(
        ${DTO.CREATE_PROJECT_INPUT}
    ) {
        upsertProjectForLecture (
            ${DTO.CREATE_PROJECT_MIDDLE}
        ) {
            ${Common.PROJECT}
        }
    }
`

export const UPDATE_PROJECT = `
    mutation UPDATE_PROJECT(
        ${DTO.UPDATE_PROJECT_INPUT}
    ) {
        updateProject(
            ${DTO.UPDATE_PROJECT_MIDDLE}
        ) {
            ${Common.RESPONSE}
        }
    }
`

export const SHARE_GROUP_PROJECT_CANCEL = `
    mutation SHARE_GROUP_PROJECT_CANCEL(
        $id: ID!
        $groupId: ID!
    ) {
        shareGroupProjectCancel(
            id: $id
            groupId: $groupId
        ) {
            ${Common.RESPONSE}
        }
    }
`

export const REMOVE_PROJECT = `
    mutation REMOVE_PROJECT($id: ID!) {
        removeProject(id: $id) {
            n
            nModified
            ok
        }
    }
`

export const DELETE_PROJECT = `
    mutation DELETE_PROJECT($id: ID!) {
        deleteProject(id: $id) {
            status
            result
        }
    }
`

export const BLAMED_PROJECT = `
    mutation BLAMED_PROJECT($id: ID! $groupId: ID) {
        blamedProject(id: $id groupId: $groupId) {
            status
            result
        }
    }
`

export const SHOW_PROJECT = `
    mutation SHOW_PROJECT($id: ID!) {
        showProject(id: $id) {
            status
            result
        }
    }
`

export const DELETE_LECTURE_PROJECT = `
    mutation DELETE_LECTURE_PROJECT($id: ID!) {
        deleteLectureProject(id: $id) {
            status
            result
        }
    }
`

export const INCREASE_COUNTER = `
    mutation INCREATE_COUNTER(
        $id: ID!
        $readCnt: Boolean
        $likeCnt: Boolean
        $commentCnt: Boolean
    ) {
        increaseCounter(id: $id, readCnt: $readCnt, likeCnt: $likeCnt, commentCnt: $commentCnt) {
            n
            nModified
            ok
        }
    }
`

export const DECREASE_COUNTER = `
    mutation DECREASE_COUNTER(
        $id: ID!
        $readCnt: Boolean
        $likeCnt: Boolean
        $commentCnt: Boolean
    ) {
        decreaseCounter(id: $id, readCnt: $readCnt, likeCnt: $likeCnt, commentCnt: $commentCnt) {
            n
            nModified
            ok
        }
    }
`

export const SET_OPEN = `
    mutation SET_OPEN($id: ID!, $isopen: Boolean) {
        setOpen(id: $id, isopen: $isopen) {
            n
            nModified
            ok
        }
    }
`

export const SET_STAFF_PICKED = `
    mutation SET_STAFF_PICKED($id: ID!, $staffPicked: Boolean) {
        setStaffPicked(id: $id, staffPicked: $staffPicked) {
            n
            nModified
            ok
        }
    }
`

export const SWITCH_PROJECT_IS_OPEN = `
    mutation SWITCH_PROJECT_IS_OPEN($id: ID!) {
        switchOpenProject(id: $id) {
            n
            nModified
            ok
        }
    }
`

export const SAVE_PROJECT_COMPONENT_LOG = `
    mutation SAVE_PROJECT_COMPONENT_LOG($logs: [JSON]) {
        saveProjectComponentLog(logs: $logs) {
            ${Common.RESPONSE}
        }
    }
`

export const CHECK_EXISTS_PROJECT_ID = `
    query ($id: ID!) {
        existsProject (id: $id) {
            exists
        }
    }
`

export const CHECK_EXISTS_PROJECT_AND_USER = `
    query ($id: ID!, $username: String!) {
        existsUser (username: $username) {
            exists
        }
        existsProject (id: $id) {
            exists
        }
    }
`
