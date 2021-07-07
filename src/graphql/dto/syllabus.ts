export const SELECT_SYLLABUS_INPUT = `
    $query: String 
    $categoryCode: String
    $pageParam: PageParam
    $ranked: Boolean
    $term: String
    $searchType: String
    $searchAfter: JSON
`

export const SELECT_SYLLABUS_MIDDLE = `
    query: $query
    categoryCode: $categoryCode
    pageParam: $pageParam
    ranked: $ranked
    term: $term
    searchType: $searchType
    searchAfter: $searchAfter
`

export const SELECT_USER_SYLLABUS_INPUT = `
    $user: String!
    $query: String
    $categoryCode: String
    $groupId: ID
    $studyType: String
    $isOpen: Boolean
    $type: String
    $pageParam: PageParam
    $searchType: String
    $searchAfter: JSON
`

export const SELECT_USER_SYLLABUS_MIDDLE = `
    user: $user
    query: $query
    categoryCode: $categoryCode
    groupId: $groupId
    studyType: $studyType
    isOpen: $isOpen
    type: $type
    pageParam: $pageParam
    searchType: $searchType
    searchAfter: $searchAfter
`
