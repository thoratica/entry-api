import * as Common from './dto/common'
import * as Discuss from './dto/discuss'

const GROUP_HOME = `
    id
    teacher {
        id
        username
        nickname
    }
    name
    school
    grade
    image
    description
    shortUrl
    students {
        id
        studentNo
        studentName
        studentCode
        tempPwd
        sex
        status
        user {
            id
            username
            nickname
        }
        studentUser {
            id
            username
            nickname
        }
    }
    discuss {
        id
        title
        groupNotice
        created
        updated
    }
    homeworks {
        total
        list {
            id
            title
            description
            due
            lecture
            submissions {
                student 
                name
                project 
                lecture 
                submitDate
            }
            created
            updated
            target
        }
    }
    syllabus {
        total
        list {
            id
            title
            created
            updated
            target
            type
        }
    }
    projects {
        list {
            id
            title
        }
        total
    }
    isTeacher
    invite {
        code
        expired
    }
    created
    updated
    isGroupOwner
`

export const CREATE_GROUP_BY_USER = `
    mutation( $groupJson: JSON ) {
        createGroupByUser(groupJson: $groupJson) {
            id
            name
        }
    }
`

export const UPDATE_GROUP_BY_USER = `
    mutation( $groupJson: JSON ) {
        updateGroupByUser(groupJson: $groupJson) {
            ${Common.RESPONSE}
        }
    }
`

// 커뮤니티 등록
export const CREATE_COMMUNITY_BY_USER = `
    mutation( $groupJson: JSON ) {
        createCommunityByUser(groupJson: $groupJson) {
            id
        }
    }
`

// 커뮤니티 수정
export const UPDATE_COMMUNITY_BY_USER = `
    mutation( $groupJson: JSON ) {
        updateCommunityByUser(groupJson: $groupJson) {
            id
        }
    }
`

// 커뮤니티 조회
export const SELECT_COMMUNITY_BY_USER = `
    query( $queryString: JSON ) {
        selectCommunityByUser(queryString: $queryString) {
            ${Discuss.Community}
        }
    }
`

export const SELECT_INVATE_CODE_CHECK = `
    query($queryString: JSON) {
        selectInvateCodeCheck(queryString: $queryString) {
            id
            name
        }
    }
`

export const INVATE_CODE_JOIN = `
    mutation( $groupJson: JSON ) {
        invateCodeJoin(groupJson: $groupJson) {
            id
            name
            invite {
                code
            }
        }
    }
`

// 초대 코드 재생성
export const INVATE_CODE_REMAKE = `
    mutation( $groupJson: JSON ) {
        invateCodeRemake(groupJson: $groupJson) {
            invite {
                code
                expired
            }
        }
    }
`

// 학생 패스워드 재생성
export const STUDENT_PASSWD_RESET = `
    mutation( $groupJson: JSON ) {
        studentPasswdReset(groupJson: $groupJson) {
            tempPwd
        }
    }
`

// 학급 학생 등록
export const CREATE_MY_STUDENT_LIST = `
    mutation( $groupJson: JSON ) {
        createMyStudentList(groupJson: $groupJson) {
            total
            list {
                ${Common.NEW_STUDENT}
            }
        }
    }
`

// 학급 학생수정
export const UPDATE_MY_STUDENT_LIST = `
    mutation( $groupJson: JSON ) {
        updateMyStudentList(groupJson: $groupJson) {
            ${Common.RESPONSE}
        }
    }
`

// 선생님 계정 학급이용 동의 처리
export const AGREE_TO_STUDENT_TERM = `
mutation( $groupJson: JSON ) {
    agreeToStudentTerm(groupJson: $groupJson) {
        id
    }
}
`

// 학급 삭제하기 ( role : teacher )
export const DELETE_MY_CLASS_GROUP = `
mutation( $groupJson: JSON ) {
    deleteMyClassGroup(groupJson: $groupJson) {
        ${Common.RESPONSE}
    }
}
`

// 전체 학급 삭제하기 ( role : teacher )
export const DELETE_ALL_MY_CLASS_GROUP = `
mutation {
    deleteAllMyClassGroup {
        ${Common.RESPONSE}
    }
}
`

// 학급 나가기
export const LEAVE_JOIN_GROUP = `
mutation( $groupJson: JSON ) {
    leaveJoinGroup(groupJson: $groupJson) {
        ${Common.RESPONSE}
    }
}
`

// 학급 신고하기
export const REPORT_GROUP_FEEDBACK = `
mutation( $groupJson: JSON ) {
    reportGroupFeedback(groupJson: $groupJson) {
        ${Common.RESPONSE}
    }
}
`

export const SELECT_MY_GROUP_LIST = `
    query($queryString: JSON, $pageParam: PageParam) {
        selectMyGroupList(queryString: $queryString, pageParam: $pageParam) {
            isTeacher
            isStudentTerm
            total
            list {
                ${Common.GROUP}
            }
        }
    }
`

export const SELECT_JOIN_GROUP_LIST = `
    query($queryString: JSON, $pageParam: PageParam) {
        selectJoinGroupList(queryString: $queryString, pageParam: $pageParam) {
            isTeacher
            isStudentTerm
            total
            list {
                ${Common.GROUP}
            }
        }
    }
`

// 나의 학급 조회
export const SELECT_MY_GROUP = `
    query($queryString: JSON) {
        selectMyGroup(queryString: $queryString) {
            ${GROUP_HOME}
        }
    }
`

// 나의학급 작품 리스트
export const SELECT_GROUP_PROJECT_LIST = `
    query(
        $term: String, 
        $query: String, 
        $groupId: String,
        $pageParam: PageParam, 
        $searchType: String, 
        $searchAfter: JSON,
        $categoryCode: String, 
    ) {
        selectGroupProjectList(
            term: $term
            query: $query
            groupId: $groupId
            pageParam: $pageParam
            searchType: $searchType
            searchAfter: $searchAfter
            categoryCode: $categoryCode
        ) {
            total
            list {
                ${Common.GROUP_PROJECT_LIST_ITEM}
            }
            searchAfter
        }
    }
`

// 나의 학급 커뮤니티 리스트
export const SELECT_GROUP_COMMUNITY_LIST = `
    query(
        $term: String, 
        $query: String, 
        $groupId: String,
        $pageParam: PageParam, 
        $searchType: String, 
        $searchAfter: JSON,
    ) {
        selectGroupCommunityList(
            term: $term
            query: $query
            groupId: $groupId
            pageParam: $pageParam
            searchType: $searchType
            searchAfter: $searchAfter
        ) {
            total
            list {
                ${Discuss.Community}
            }
        }
    }
`

// 가입학급 여부 조회
export const SELECT_JOIN_GROUP = `
    query($queryString: JSON) {
        selectJoinGroup(queryString: $queryString) {
            ${Common.GROUP}
        }
    }
`

// 학급 기본정보 조회
// 선생님인경우 학급오너권한 및 공지등록 권한 추가
export const SELECT_GROUP_SIMPLE = `
    query($id: ID!) {
        selectGroupSimple(id: $id) {
            id
            name
            image
            isGroupOwner
            warningNotice
        }
    }
`

// 학급 스터디  리스트
export const SELECT_GROUP_STUDY_LIST = `
    query(
        $groupId: String,
        $progress: String,
        $activeTab: String,
        $pageParam: PageParam,
        $searchType: String,
        $searchAfter: JSON
    ) {
        selectGroupStudyList(
            groupId: $groupId,
            progress: $progress
            activeTab: $activeTab
            pageParam: $pageParam,
            searchType: $searchType,
            searchAfter: $searchAfter
        ) {
            total
            list {
                id
                title
                description
                categoryCode
                user {
                    username
                    nickname
                    profileImage {
                        filename
                        imageType
                    }
                }
                type
                target
                thumb
                likeCnt
                comment
                visit
                studyCnt
                difficulty
                requiredTime
                lecture {
                    id
                    title
                    description
                }
                curriculum {
                    id
                    title
                    description
                }
                progress
                userprogress
                group {
                    homeworks {
                        id
                        title
                        description
                        due
                        submissions {
                            student
                            studentNo
                            name
                            project
                            lecture
                            submitDate
                        }
                    }
                    
                }
                isForHomework
                homework
                due
                created
                updated
                completed
                myProgress
            }
        }
    }
`

// 학급 스터디 공유
export const SHARE_TO_COPY_LECTURE_GROUP = `
    mutation ($groupJson: JSON) {
        shareToCopyLectureGroup(
            groupJson: $groupJson
        ) {
            ${Common.RESPONSE}
        }
    }
`

// 학급 스터디 삭제
export const REMOVE_SHARE_LECTURE_GROUP = `
    mutation( $groupJson: JSON ) {
        removeShareLectureGroup(groupJson: $groupJson) {
            ${Common.RESPONSE}
        }
    }
`

// 학급 과제 생성
export const CREATE_HOMEWORK_FOR_GROUP = `
    mutation ($groupJson: JSON) {
        createHomeworkForGroup(
            groupJson: $groupJson
        ) {
            ${Common.RESPONSE}
        }
    }
`

// 학급 과제 수정
export const UPDATE_HOMEWORK_FOR_GROUP = `
    mutation ($groupJson: JSON) {
        updateHomeworkForGroup(
            groupJson: $groupJson
        ) {
            ${Common.RESPONSE}
        }
    }
`

// 학급 스터디 수정
export const UPDATE_STUDY_FOR_GROUP = `
    mutation ($groupJson: JSON) {
        updateStudyForGroup(
            groupJson: $groupJson
        ) {
            ${Common.RESPONSE}
        }
    }
`

// 학급 스터디모음 수정
export const UPDATE_CURRICULUM_FOR_GROUP = `
    mutation ($groupJson: JSON) {
        updateCurriculumForGroup(
            groupJson: $groupJson
        ) {
            ${Common.RESPONSE}
        }
    }
`

// 학급 과제 제출 리스트
export const SELECT_GROUP_SUBMISSIONS = `
    query ($queryString: JSON) {
        selectGroupSubmission (
            queryString: $queryString
        ) {
            id
            title
            description
            due
            lecture
            curriculum
            created
            updated
            noProcessCount
            processCount
            completeCount
            homeworkstatus {
                studentCode
                studentNo
                studentName
                studentUser
                user
                status
                project
                lecture
                curriculum
                submitDate
            }
        }
    }
`

// 학급 스터디 진행사항
export const SELECT_GROUP_PROGRESS = `
    query ($queryString: JSON) {
        selectGroupProgress (
            queryString: $queryString
        ) {
            id
            title
            description
            due
            lecture
            curriculum
            noProcessCount
            processCount
            completeCount
            students {
                studentCode
                studentNo
                studentName
                studentUser
                user
                status
                progress {
                    studyIndex
                    lecture
                    status
                    completedType
                }
            }
        }
    }
`
