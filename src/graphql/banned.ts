export const IPADDRESS_BANNED = `
    query {
        ipaddressBanned {
            bannedType
            ipaddress
            endDate
            reason
        }
    }
`

export const SELECT_BANNED_INFINITE = `
    query ($id: ID!){
        selectBannedInfinite(id: $id) {
            bannedType
            startDate
            endDate
            reason
            description
            bannedCount
            username
        }
    }
`

export const SELECT_BANNED_USER_INFO = `
    query ($id: ID!){
        selectBannedUserInfo(id: $id) {
            id
            bannedType
            startDate
            endDate
            reason
            description
            bannedCount
            username
            nickname
            userReflect {
                id
                endDate
                status
            }
            projectId
        }
    }
`
