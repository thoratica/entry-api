import { SPRITE } from './dto/common'

export const GET_SPRITES = `
    query($category_main: String, $category_sub: String, $type: String, $userId: String, $pageParam: PageParam) {
        sprites(category_main: $category_main, category_sub: $category_sub, type: $type, userId: $userId, pageParam: $pageParam) {
            list {
                ${SPRITE}
            }
        }
    }
`

export const SEARCH_SPRITES = `
query($name: String, $type: String) {
        sprites(name: $name, type: $type) {
            list {
                ${SPRITE}
            }
        }
    }
`
