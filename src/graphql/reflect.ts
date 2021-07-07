import * as Common from './dto/common'

export const REFLECT_LIST = `
    query($id: ID) {
        reflectList(id: $id) {
            total
            list {
                id
                category
                title
                content
                created
                url
                original
                picture
                group {
                    name
                }
                created
            }
        }
    }
`

export const REPORT_REFLECT = `
mutation ($reflectJson: JSON) {
    reportReflect(reflectJson: $reflectJson) {
        ${Common.RESPONSE}
    }
}
`
