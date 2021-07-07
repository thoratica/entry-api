import { PICTURE } from './dto/common'
export const GET_PICTURES = `
    query($category_main: String, $category_sub: String, $type: String, $userId: String, $pageParam: PageParam) {
        pictures(category_main: $category_main, category_sub: $category_sub, type: $type, userId: $userId, pageParam: $pageParam) {
            list {
                ${PICTURE}
            }
        }
    }
`

export const SEARCH_PICTURES = `
    query($name: String, $type: String) {
        pictures(name: $name, type: $type) {
            list {
                ${PICTURE}
            }
        }
    }
`
