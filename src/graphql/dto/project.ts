export const SELECT_PROJECTS_INPUT = `
    $query: String
    $categoryCode: String
    $staffPicked: Boolean
    $ranked: Boolean
    $parent: String
    $pageParam: PageParam
    $term: String
    $queryTitleOnly:Boolean
    $isChallenge:Boolean
    $searchAfter: JSON
    $searchType: String
    $cacheKey: String
`
export const SELECT_PROJECTS_MIDDLE = `
    query: $query
    categoryCode: $categoryCode
    staffPicked: $staffPicked
    ranked: $ranked
    parent: $parent
    pageParam: $pageParam
    term: $term
    queryTitleOnly: $queryTitleOnly
    isChallenge: $isChallenge
    searchAfter: $searchAfter
    searchType: $searchType
    cacheKey: $cacheKey
`

export const SELECT_USER_PROJECTS_INPUT = `
    $user: String!
    $query: String
    $categoryCode: String
    $groupId: ID
    $pageParam: PageParam
    $isOpen: Boolean
    $except: [ID]
    $searchAfter: JSON
    $searchType: String
`

export const SELECT_USER_PROJECTS_MIDDLE = `
    user: $user
    query: $query
    categoryCode: $categoryCode
    groupId: $groupId
    pageParam: $pageParam
    isOpen: $isOpen
    except: $except
    searchAfter: $searchAfter
    searchType: $searchType
`

export const SELECT_FOLLOWING_PROJECTS_INPUT = `
    $pageParam: PageParam
    $query: String
    $categoryCode: String
    $searchAfter: JSON
    $searchType: String
`

export const SELECT_FOLLOWING_PROJECTS_MIDDLE = `
    pageParam: $pageParam
    query: $query
    categoryCode: $categoryCode
    searchAfter: $searchAfter
    searchType: $searchType
`

export const CREATE_PROJECT_INPUT = `
    $name: String
    $speed: Int
    $objects: JSON
    $variables: JSON
    $messages: JSON
    $functions: JSON
    $tables: JSON
    $scenes: JSON
    $lecture:ID
    $study:ID
    $isForLecture:Boolean
    $isForStudy:Boolean
    $isForSubmit: Boolean
    $isPracticalCourse: Boolean
    $interface: JSON
    $aiUtilizeBlocks: JSON
    $expansionBlocks: JSON
    $description: String
    $description2: String
    $description3: String
    $thumb: String
    $isopen: Boolean
    $categoryCode: String
    $parent: ID
    $learning: String
`

export const CREATE_PROJECT_MIDDLE = `
    name: $name
    speed: $speed
    objects: $objects
    variables: $variables
    messages: $messages
    functions: $functions
    tables: $tables
    scenes: $scenes
    lecture: $lecture
    study: $study
    isForLecture: $isForLecture
    isForStudy: $isForStudy
    isForSubmit: $isForSubmit
    isPracticalCourse: $isPracticalCourse
    interface: $interface
    aiUtilizeBlocks: $aiUtilizeBlocks
    expansionBlocks: $expansionBlocks
    description: $description
    description2: $description2
    description3: $description3
    thumb: $thumb
    isopen: $isopen
    categoryCode: $categoryCode
    parent: $parent
    learning: $learning
`

export const UPDATE_PROJECT_INPUT = `
    $id: ID!
    $name: String
    $speed: Int
    $objects: JSON
    $variables: JSON
    $messages: JSON
    $functions: JSON
    $tables: JSON
    $scenes: JSON
    $interface: JSON
    $aiUtilizeBlocks: JSON
    $expansionBlocks: JSON
    $thumb: String
    $categoryCode: String
    $description: String
    $description2: String
    $description3: String
    $isopen: Boolean
    $isPracticalCourse: Boolean
    $group: ID
    $learning: String
`

export const UPDATE_PROJECT_MIDDLE = `
    id: $id
    name: $name
    speed: $speed
    objects: $objects
    variables: $variables
    messages: $messages
    functions: $functions
    tables: $tables
    scenes: $scenes
    interface: $interface
    aiUtilizeBlocks: $aiUtilizeBlocks
    expansionBlocks: $expansionBlocks
    thumb: $thumb
    categoryCode: $categoryCode
    description: $description
    description2: $description2
    description3: $description3
    isopen: $isopen
    isPracticalCourse: $isPracticalCourse
    group: $group
    learning: $learning
`
