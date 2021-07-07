import { Category } from '.'
import { SELECT_PROJECT } from '../graphql/project'
import { graphql } from '../request'
import { User } from '../user'
import { CategoryText } from './category'

export interface ProjectInfo {
  id: string
  name: string
  user: User
  thumbURL: string
  created: Date
  updated: Date
  isOpen: boolean
  isPracticalCourse: boolean
  category: Category
  categoryText: CategoryText
  visit: number
  likeCnt: number
  favorite: number
  complexity: number | null
  staffPicked: Date | null
  ranked: Date | null
  speed: number
}

export class Project {
  id: string
  name: string
  user: User
  thumbURL: string
  created: Date
  updated: Date
  isOpen: boolean
  isPracticalCourse: boolean
  category: Category
  categoryText: CategoryText
  visit: number
  likeCnt: number
  complexity: number | null
  staffPicked: Date | null
  ranked: Date | null
  speed: number
  constructor (projectInfo: ProjectInfo) {
    this.id = projectInfo.id
    this.name = projectInfo.name
    this.user = projectInfo.user
    this.thumbURL = projectInfo.thumbURL
    this.created = projectInfo.created
    this.updated = projectInfo.updated
    this.isOpen = projectInfo.isOpen
    this.isPracticalCourse = projectInfo.isPracticalCourse
    this.category = projectInfo.category
    this.categoryText = projectInfo.categoryText
    this.visit = projectInfo.visit
    this.likeCnt = projectInfo.likeCnt
    this.complexity = projectInfo.complexity
    this.staffPicked = projectInfo.staffPicked
    this.ranked = projectInfo.ranked
    this.speed = projectInfo.speed
  }

  public static async fromId (id: string) {
    const {
      data: { project: data },
      error
    } = await graphql(SELECT_PROJECT, { id })
    if (error?.statusCode !== undefined)
      throw new Error(error.statusCode.toString())

    return new Project({
      id: data.id,
      name: data.name,
      user: await User.fromId(data.user.id),
      thumbURL: data.thumb,
      created: new Date(data.created),
      updated: new Date(data.updated),
      isOpen: data.isopen,
      isPracticalCourse: data.isPracticalCourse,
      category: data.categoryCode,
      categoryText: data.category,
      visit: data.visit,
      likeCnt: data.likeCnt,
      favorite: data.favorite,
      complexity: data.complexity,
      staffPicked:
        data.staffPicked !== null ? new Date(data.staffPicked) : null,
      ranked: data.ranked !== null ? new Date(data.ranked) : null,
      speed: data.speed
    })
  }
}
