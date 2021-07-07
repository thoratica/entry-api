import * as Common from './dto/common'

const USER = `
    id
    username
    nickname
    role
    isEmailAuth
    isSnsAuth
    isPhoneAuth
    studentTerm
    status {
        userStatus
    }
    profileImage {
        ${Common.PICTURE}
    }
    banned {
        username
        nickname
        reason
        bannedCount
        bannedType
        projectId
        startDate
        userReflect {
            status
            endDate
        }
    }
`

const PERSONAL_INFO = ` 
    mobile
    email
    grade
    gender
    isSnsId
`

export const CURRENT_USER_QUERY = `
    query {
        me {
            ${USER}
        }
    }
`

export const FIND_PERSONAL_INFO = `
    query {
        me {
            ${USER}
        }
        personalInfo {
            ${PERSONAL_INFO}
        }
    }
`

export const FIND_STUDENT_INFO = `
    query {
        me {
            ${USER}
        }
        personalInfo {
            ${PERSONAL_INFO}
        }
        studentInfo {
            id
            studentCode
            studentNo
            studentName
            studentUser
            group {
                id
                name
            }
            status
        }
    }
`

export const FIND_USER_BY_USERNAME = `
    query ($username: String) {
        user(username: $username) {
            id
        }
    }
`

export const FIND_USER_BY_NICKNAME = `
    query ($nickname: String) {
        user(nickname: $nickname) {
            id
        }
    }
`

export const FIND_USER_BY_HASHED_VALUE = `
    query ($hashedValue: String) {
        hashedValueUser(hashedValue: $hashedValue) {
            id
            nickname
            username
        }
    }
`

export const CHECK_EXISTS_EMAIL = `
    query ($email: String) {
        existsUser(email: $email) {
            exists
        }
    }
`

export const CHECK_EXISTS_MOBILE = `
    query ($mobile: String) {
        existsUser(mobile: $mobile) {
            exists
        }
    }
`

export const FIND_USERSTATUS_BY_USERNAME = `
    query ($id: String) {
        userstatus(id: $id) {
            id
            nickname
            username
            description
            shortUrl
            profileImage {
                ${Common.PICTURE}
            }
            coverImage {
                ${Common.PICTURE}
            }
            role
            studentTerm
            status {
                project
                projectAll
                study
                studyAll
                community {
                    qna
                    tips
                    free
                }
                following
                follower
                bookmark {
                    project
                    study
                }
                userStatus
            }
        }
    }
`

export const REQUEST_MOBILE_AUTHENTICATION = `
    mutation ($number: String!, $nationalNumber: String!, $contryCode: String) {
        mobileAuthentication(number: $number, nationalNumber: $nationalNumber, contryCode: $contryCode) {
            ${Common.RESPONSE}
        }
    }
`

export const SEND_RECEIVE_NUMBER = `
    mutation ($key: String!, $receiveNumber: String!) {
        sendReceiveNumber(key: $key, receiveNumber: $receiveNumber) {
            ${Common.RESPONSE}
        }
    }
`

export const CHECK_EXISTS_USERNAME = `
    query ($username: String) {
        existsUser(username: $username) {
            exists
        }
    }
`

export const CHECK_PROHIBITED_WORD = `
    query ($type: String, $word: String) {
        prohibitedWord(type: $type, word: $word) {
            ${Common.RESPONSE}
        }
    }
`

export const CHECK_EXISTS_NICKNAME = `
    query ($nickname: String) {
        existsUser(nickname: $nickname) {
            exists
        }
    }
`

export const RECOMMEND_USER = `
    query ($minCount: Int, $limit: Int) {
        recommendUser(minCount: $minCount, limit: $limit) {
            total
            list {
                id
                nickname
                username
                profileImage {
                    ${Common.PICTURE}
                }
                coverImage {
                    ${Common.PICTURE}
                }
            }
        }
    }
`

export const SIGNIN_BY_USERNAME = `
    mutation (
        $username: String!,
        $password: String!,
        $rememberme: Boolean,
        $captchaValue: String,
        $captchaKey: String,
        $captchaType: String
    ) {
        signinByUsername (
            username: $username,
            password: $password,
            rememberme: $rememberme,
            captchaValue: $captchaValue,
            captchaKey: $captchaKey,
            captchaType: $captchaType
        ) {
            ${USER}
        }
    }
`

export const WITHDRAW_SIGNIN_BY_USERNAME = `
    mutation (
        $username: String!,
        $password: String!,
        $rememberme: Boolean,
        $captchaValue: String,
        $captchaKey: String,
        $captchaType: String
    ) {
        withdrawSigninByUsername (
            username: $username,
            password: $password,
            rememberme: $rememberme,
            captchaValue: $captchaValue,
            captchaKey: $captchaKey,
            captchaType: $captchaType
        ) {
            ${USER}
        }
    }
`

export const SIGNUP_BY_USERNAME = `
    mutation ($role: String!, $grade: String!, $gender: String!, $nickname: String!, $email: String, $username: String!, $password: String!, $passwordConfirm: String!, $mobileKey: String) {
        signupByUsername(role: $role, grade: $grade , gender: $gender , nickname: $nickname , email: $email , username: $username , password: $password, passwordConfirm: $passwordConfirm, mobileKey: $mobileKey ) {
            ${USER}
        }
    }
`

export const REMOVE_USER = `
    mutation {
        removeUser {
            ${Common.RESPONSE}
        }
    }
`

export const UNSUBSCRIBE_USER = `
    mutation ($password: String!) {
        unsubscribeUser (password: $password) {
            ${Common.RESPONSE}
        }
    }
`

export const SIGNOUT = `
    mutation {
        signout {
            ${Common.RESPONSE}
        }
    }
`

export const SIGNIN_FOR_NAVER = `
    mutation ($ses: String!, $idno: String!, $isWithdraw: Boolean) {
        signinForNaver(ses: $ses, idno: $idno, isWithdraw: $isWithdraw) {
            ${Common.RESPONSE}
        }
    }
`

export const SIGNIN_FOR_NAVER_BEGIN = `
    mutation {
        signinForNaverBegin {
            ${Common.RESPONSE}
        }
    }
`

export const SIGNIN_FOR_NAVER_CALLBACK = `
    mutation ($code: String!, $state: String!) {
        signinForNaverCallback(code: $code, state: $state) {
            ${Common.RESPONSE}
        }
    }
`

export const SIGNUP_FOR_NAVER = `
    mutation ($role: String!, $grade: String!, $gender: String!, $nickname: String!, $mobileKey: String) {
        signupForNaver(role: $role, grade: $grade, gender: $gender, nickname: $nickname, mobileKey: $mobileKey) {
            ${Common.RESPONSE}
        }
    }
`

export const SEND_FORGOT_PASSWORD = `
    mutation ($email: String!) {
        sendForgotPassword (email: $email) {
            ${Common.RESPONSE}
        }
    }
`

export const CHANGE_TEACHER_TO_MEMBER = `
    mutation {
        changeTeacherToMember {
            ${Common.RESPONSE}
        }
    }
`
export const UPDATE_USERINFO = `
    mutation UPDATE_USERINFO (
        $profileImage: String,
        $coverImage: String,
        $description: String,
        $nickname: String,
        $gender: String
        $mobileKey: String
    ) {
        updateUserInfo(
            profileImage: $profileImage,
            coverImage: $coverImage,
            description: $description
            nickname: $nickname
            gender: $gender
            mobileKey: $mobileKey
        ) {
            ${Common.RESPONSE}
        }
    }
`

export const CHANGE_USER_EMAIL = `
    mutation ($email: String!) {
        changeUserEmail(email: $email) {
            ${Common.RESPONSE}
        }
    }
`

export const CHANGE_USER_PASSWORD = `
    mutation ($password: String!, $newPassword: String!) {
        changeUserPassword(password: $password, newPassword: $newPassword) {
            ${Common.RESPONSE}
        }
    }
`

export const STUDENT_PASSWORD_AND_TERM = `
    mutation ($password: String!, $password2: String!, $gender: String!) {
        studentPasswordAndTerm(password: $password, password2: $password2, gender: $gender) {
            ${Common.RESPONSE}
        }
    }
`

export const CHANGE_USER_PASSWORD_BY_HASHED_VALUE = `
    mutation ($password: String!, $hashedValue: String!) {
        changeUserPasswordByHashedValue(password: $password, hashedValue: $hashedValue) {
            ${Common.RESPONSE}
        }
    }
`

export const SNS_MAPPING_FOR_NAVER_BEGIN = `
    mutation {
        snsMappingForNaverBegin {
            ${Common.RESPONSE}
        }
    }
`

export const SNS_MAPPING_FOR_NAVER = `
    mutation ($email: String, $gender: String) {
        snsMappingForNaver (email: $email, gender: $gender) {
            ${Common.RESPONSE}
        }
    }
`

export const SNS_CLEAR_FOR_NAVER = `
    mutation {
        snsClearForNaver {
            ${Common.RESPONSE}
        }
    }
`

export const TOGGLE_ALARM_ALLOW = `
    mutation {
        toggleAlarmAllow {
            ${Common.RESPONSE}
        }
    }
`

export const GET_CAPTCHA_DATA = `
    query ($captchaType: String!) {
        getCaptchaData (captchaType: $captchaType) {
            ${Common.RESPONSE}
        }
    }
`
