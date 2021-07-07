import { FOREIGN_SELECT_USER, COMMENT } from './common'

export const QnA = `
    id
    title
    created
    commentsLength
    likesLength
    visit
    user {
        ${FOREIGN_SELECT_USER}
    }
    bestComment {
        content
    }
    thumbnail
`

export const Notice = `
    id
    title
    created
    commentsLength
    likesLength
    visit
    prefix
    user {
        ${FOREIGN_SELECT_USER}
    }
`

export const SUGGESTION = `
    id
    title
    created
    commentsLength
    comments {
        ${COMMENT}
    }
    prefix
    user {
        ${FOREIGN_SELECT_USER}
    }
    reply
    progress
`

// used group community
export const Community = `
    id
    title
    content
    seContent
    prefix
    owner
    visit
    likesLength
    commentsLength
    images {
        filename 
        oriFilename 
        imagePath 
        thumbPath 
        imageUrl 
        thumbUrl 
    }
    attachment {
        filename
        oriFilename
        filepath 
        filesize
    }
    user {
        id
        username
        nickname
    }
    category
    groupNotice
    preDataForClous
    created
    updated
`

export const CREATE_DISCUSS_INPUT = `
    $title: String
    $content: JSON
    $text: String
    $category: String
    $prefix: String
`

export const CREATE_DISCUSS_MIDDLE = `
    title: $title
    content: $content
    text: $text
    category: $category
    prefix: $prefix
`

export const CREATE_ENTRYSTORY_INPUT = `
    $content: String
    $text: String
    $image: String
    $sticker: String
    $cursor: String
`

export const CREATE_ENTRYSTORY_MIDDLE = `
    content: $content
    text: $text
    image: $image
    sticker: $sticker
    cursor: $cursor
`

export const SELECT_DISCUSS_LIST_INPUT = `
    $pageParam: PageParam
    $query: String
    $user: String
    $category: String
    $term: String
    $prefix: String
    $progress: String
    $discussType: String
    $searchType: String
    $searchAfter: JSON
`

export const SELECT_DISCUSS_LIST_MIDDLE = `
    pageParam: $pageParam
    query: $query
    user: $user
    category: $category
    term: $term
    prefix: $prefix
    progress: $progress
    discussType: $discussType
    searchType: $searchType
    searchAfter: $searchAfter
`
