import { Image } from './Image'
import { UserPreview } from './UserInfo'

export interface Discuss {
  id: string
  content: string
  created: string
  commentsLength: number
  likesLength: number
  user: UserPreview
  image: Image | null
  sticker: Image | null
  isLike: boolean
}
