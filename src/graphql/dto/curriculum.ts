export const CREATE_CURRICULUM_INPUT = `
    $title: String
    $categoryCode: String
    $description: String
    $lectures: [String]
    $isOpen: Boolean
`

export const CREATE_CURRICULUM_MIDDLE = `
    title: $title
    categoryCode: $categoryCode
    description: $description  
    lectures: $lectures
    isOpen: $isOpen
`

export const UPDATE_CURRICULUM_INPUT = `
    $id: ID!
    $title: String
    $categoryCode: String
    $description: String
    $lectures: [String]
    $isOpen: Boolean
`

export const UPDATE_CURRICULUM_MIDDLE = `
    id: $id
    title: $title
    categoryCode: $categoryCode
    description: $description
    lectures: $lectures
    isOpen: $isOpen
`
