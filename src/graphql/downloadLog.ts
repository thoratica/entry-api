import * as Common from './dto/common'

export const CREATE_DOWNLOAD_LOG = `
    mutation CREATE_DOWNLOAD_LOG($id: ID!, $name:String!, $category: String!, $os: String!, $version: String!){
        createDownloadLog (
            id: $id
            name: $name
            category: $category
            os: $os
            version: $version
        ){
            ${Common.RESPONSE}
        }
    }
`
