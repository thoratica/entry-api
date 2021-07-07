import { SOUND } from './dto/common'

export const GET_SOUNDS = `
    query($category_main: String, $category_sub: String, $type: String, $userId: String, $pageParam: PageParam) {
        sounds(category_main: $category_main, category_sub: $category_sub, type: $type, userId: $userId, pageParam: $pageParam) {
            list {
                ${SOUND}
            }
        }
    }
`

export const SEARCH_SOUNDS = `
    query($name: String, $type: String) {
        sounds(name: $name, type: $type) {
            list {
                ${SOUND}
            }
        }
    }
`
