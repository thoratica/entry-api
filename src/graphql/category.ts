import { CATEGORY } from './dto/common'

export const GET_CATEGORIES = `
    query($categoryType: String, $depth: Int) {
        categories(categoryType: $categoryType, depth: $depth) {
            category {
                ${CATEGORY}
            }
            subCategory {
                ${CATEGORY}
            }
        }
    }
`
