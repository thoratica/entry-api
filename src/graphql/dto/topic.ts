export const CREATE_TOPIC_INPUT = `
    $target: String
    $template: String
    $params: [String]
    $thumbUrl: String
    $category: String
    $link: LinkInput
`

export const CREATE_TOPIC_MIDDLE = `
    target: $target
    template: $template
    params: $params
    thumbUrl: $thumbUrl
    category: $category
    link: $link
`
