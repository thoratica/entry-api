import { INSTALL_FILE } from './dto/common'

export const GET_INSTALL_FILES = `
    query($limit: Int, $category: String!, $page: Int) {
        installFiles(limit: $limit, category: $category, page: $page) {
            list {
                ${INSTALL_FILE}
            }
            total
        }
    }
`

export const GET_LATEST_FILE = `
    query($category: String!) {
        latestInstallFile(category: $category) {
            ${INSTALL_FILE}
        }
    }
`
