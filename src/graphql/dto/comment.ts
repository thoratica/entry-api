export const SELECT_COMMENTS_INPUT = `
    $pageParam: PageParam
    $target: String
    $groupId: ID
`

export const SELECT_COMMENTS_MIDDLE = `
    pageParam: $pageParam
    target: $target
    groupId: $groupId
`

export const CREATE_COMMENT_INPUT = `
    $content: String
    $image: String
    $sticker: String
    $target: String
    $targetSubject: String
    $targetType: String
    $groupId: ID
`

export const CREATE_COMMENT_MIDDLE = `
    content: $content
    image: $image
    sticker: $sticker
    target: $target
    targetSubject: $targetSubject
    targetType: $targetType
    groupId: $groupId
`

export const CREATE_AGREE_INPUT = `
    $content: String
    $target: String
`

export const CREATE_AGREE_MIDDLE = `
    content: $content
    target: $target
`
