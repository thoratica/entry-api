export const SELECT_COMMONCODE = `
    query ($key: String) {
        commonCode(key: $key) {
            codes {
                code
                text
            }
            key
        }
    }
`
