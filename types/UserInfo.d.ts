import { BannedInfo, BannedReason } from './BannedInfo'
import { Image } from './Image'

export interface UserPreview {
  id: string
  username: string
  nickname: string
  profileImage: Image | null
  status: {
    following: number
    follower: number
  }
  description: string
  role: 'member' | 'teacher' | 'admin'
}

export interface UserInfo {
  id: string
  username: string
  nickname: string
  role: 'member' | 'teacher' | 'admin'
  isEmailAuth: boolean
  isSnsAuth: boolean
  isPhoneAuth: boolean
  studentTerm: boolean
  status: { userStatus: 'USE' | string }
  profileImage: Image | null
  banned: BannedInfo | null
}

export interface DetailedUserInfo extends UserInfo {
  description: string
  shortUrl: string
  profileImage: Image | null
  coverImage: Image | null
  status: {
    project: number
    projectAll: number
    study: number
    studyAll: number
    community: {
      qna: number
      tips: number
      free: number
    }
    following: number
    follower: number
    bookmark: {
      project: number
      study: number
    }
    userStatus: 'USE' | string
  }
}
