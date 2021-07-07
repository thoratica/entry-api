export const CREATE_LECTURE_INPUT = `
    $title: String
    $categoryCode: String
    $description: String
    $goals: [String]
    $difficulty: Int
    $requiredTime: Int
    $studies: [JSON]
    $groupId: ID
    $isOpen: Boolean
`

export const CREATE_LECTURE_MIDDLE = `
    title: $title
    categoryCode: $categoryCode
    description: $description
    goals: $goals
    difficulty: $difficulty
    requiredTime: $requiredTime
    studies: $studies
    groupId: $groupId
    isOpen: $isOpen
`

export const UPDATE_LECTURE_INPUT = `
    $id: ID!
    $title: String
    $categoryCode: String
    $description: String
    $goals: [String]
    $difficulty: Int
    $requiredTime: Int
    $studies: [JSON]
    $isOpen: Boolean
`

export const UPDATE_LECTURE_MIDDLE = `
    id: $id
    title: $title
    categoryCode: $categoryCode
    description: $description
    goals: $goals
    difficulty: $difficulty
    requiredTime: $requiredTime
    studies: $studies
    isOpen: $isOpen
`
