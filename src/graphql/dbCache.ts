export const SELECT_DB_CACHE = `
    query ($key: String, $key2: String) {
        beginner: dbCache (key: $key) {
            key
            value
            count
        }
        intermediate: dbCache (key: $key2) {
            key
            value
            count
        }
    }
`
