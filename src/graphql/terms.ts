export const GET_TERMS_LIST = `
    query($category: String) {
        termsList(category: $category) {
            list {
                id
                category
                description
                effectived
            }
        }
    }
`

export const GET_TERMS_BY_DATE = `
    query($date: String, $category: String) {
        termsByDate(date: $date, category: $category) {
            id
            category
            description
            effectived
        }
    }
`
