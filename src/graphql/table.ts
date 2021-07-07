import { TABLE, TABLE_INFO } from './dto/common'

export const GET_TABLE = `
    query($id: ID!) {
        table(id: $id) {
            ${TABLE}
        }
    }
`

export const GET_TABLES = `
    query {
        tables {
            list {
                ${TABLE_INFO}
            }
        }
    }
`

export const SEARCH_TABLES = `
    query($name: String) {
        tables(name: $name) {
            list {
                ${TABLE_INFO}
            }
        }
    }
`
