import { Image } from './Image'
import { UserPreview } from './UserInfo'

export interface DiscussList {
  total: number
  list: {
    id: string
    title: 'entryStory' | string
    content: string
    seContent: string | null
    created: string
    commentsLength: number
    likesLength: number
    visit: number
    category: 'tips' | string
    prefix: string | null
    groupNotice: boolean
    user: UserPreview
    images: { filename: string; imageUrl: string } | null
    progress: any | null
    thumbnail: any | null
    reply: any | null
    bestComment: { content: string } | null
    blamed: boolean
  }
}

export interface QnAList {
  total: number
  list: {
    id: string
    title: string
    created: string
    commentsLength: string
    likesLength: string
    visit: string
    user: UserPreview
    bestComment: { content: string } | null
    thumbnail: string | null
  }
  searchAfter: number[]
}

export interface EntryStoryList {
  total: number
  list: {
    id: string
    content: string
    commentsLength: number
    likesLength: number
    user: UserPreview
    image: Image | null
    sticker: Image | null
    isLike: boolean
  }
}

export interface NoticeList {
  total: number
  list: {
    id: string
    title: string
    created: string
    commentsLength: number
    likesLength: number
    visit: number
    prefix: string | null
    user: UserPreview
  }
}
