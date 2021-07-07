import { Role } from '.'
import { SELECT_USER_PROJECTS } from '../graphql/project'
import { Project, Sort } from '../project'
import { graphql } from '../request'
import { Image } from '../common'
import {
  FIND_USERSTATUS_BY_USERNAME,
  FIND_USER_BY_NICKNAME,
  FIND_USER_BY_USERNAME
} from '../graphql/user'

export interface UserInfo {
  id: string
  nickname: string
  username: string
  description: string
  shortURL: string
  profileImage: Image
  coverImage: Image
  role: Role
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
  }
}

export class User {
  id: string
  nickname: string
  username: string
  description: string
  shortURL: string
  profileImage: Image
  coverImage: Image
  role: Role
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
  }

  constructor (userInfo: UserInfo) {
    this.id = userInfo.id
    this.nickname = userInfo.nickname
    this.username = userInfo.username
    this.description = userInfo.description
    this.shortURL = userInfo.shortURL
    this.profileImage = userInfo.profileImage
    this.coverImage = userInfo.coverImage
    this.role = userInfo.role
    this.status = userInfo.status
  }

  public async getProjects (
    {
      sort,
      display,
      order,
      start
    }: {
      sort?: Sort
      display?: number
      order?: number
      start?: number
    } = {
      sort: 'created',
      display: 20,
      order: -1,
      start: 0
    }
  ) {
    const {
      data: {
        userProjectList: { list: data }
      },
      error
    } = await graphql(SELECT_USER_PROJECTS, {
      pageParam: { display, order, sort, start },
      queryTitleOnly: false,
      searchAfter: [],
      searchType: 'scroll',
      term: 'all',
      user: this.id
    })
    if (error?.statusCode !== undefined)
      throw new Error(error.statusCode.toString())

    const projects = await Promise.all(
      data.map(async (project: { id: string }) => Project.fromId(project.id))
    )

    return projects
  }

  public static async fromId (id: string) {
    const {
      data: { userstatus: data },
      error
    } = await graphql(FIND_USERSTATUS_BY_USERNAME, { id })
    if (error?.statusCode !== undefined)
      throw new Error(error.statusCode.toString())

    return new User({
      id: data.id,
      nickname: data.nickname,
      username: data.username,
      description: data.description,
      shortURL: data.shortUrl,
      profileImage: new Image(data.profileImage),
      coverImage: new Image(data.coverImage),
      role: data.role,
      status: {
        project: data.status.project,
        projectAll: data.status.projectAll,
        study: data.status.study,
        studyAll: data.status.studyAll,
        community: {
          qna: data.status.community.qna,
          tips: data.status.community.tips,
          free: data.status.community.free
        },
        following: data.status.following,
        follower: data.status.follower,
        bookmark: {
          project: data.status.bookmark.project,
          study: data.status.bookmark.study
        }
      }
    })
  }
  public static async fromNickname (nickname: string) {
    const {
      data: {
        user: { id }
      },
      error
    } = await graphql(FIND_USER_BY_NICKNAME, {
      nickname
    })
    if (error?.statusCode !== undefined)
      throw new Error(error.statusCode.toString())

    return User.fromId(id)
  }
  public static async fromUsername (username: string) {
    const {
      data: {
        user: { id }
      },
      error
    } = await graphql(FIND_USER_BY_USERNAME, {
      username
    })
    if (error?.statusCode !== undefined)
      throw new Error(error.statusCode.toString())

    return User.fromId(id)
  }
}
