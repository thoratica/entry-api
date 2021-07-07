export const UPDATED_RESULT = `
    n
    nModified
    ok
`

export const BLOCK = `
    category
    blocks
`

export const FILE = `
    name
    path
    size
    id
`

export const DIMENSION = `
    width
    height
`

export const PDF_FILE = `
    name
    path
    url
`

export const LABEL = `
    ko
    en
    ja
    vn
`

export const PICTURE = `
    id
    name
    label {
        ${LABEL}
    }
    filename
    imageType
    dimension {
        ${DIMENSION}
    }
    trimmed {
        filename
        width
        height
    }
`

export const FOREIGN_SELECT_USER = `
    id
    nickname
    username
    profileImage {
        ${PICTURE}
    }
    status {
        following
        follower
    }
    description
    role
`

export const CODE = `
    id
    speed
    objects
    variables
    messages
    functions
    scenes
    interface
    expansionBlocks
`

export const PROGRESS = `
    id
    student{
        id
    }
    studyStatus {
        category
        status
        value
    }
`

export const INJECT_OPTION = `
    objectEditable
    pictureeditable
    soundeditable
    sceneEditable
    messageEnable
    variableEnable
    listEnable
    functionEnable
    hintDisable
    programmingMode
    isMovePossible
    isRandomQuestion
    isCheckAnwser
    freezingVariable
    lockBasicBlocks
`

export const CATEGORY = `
    id
    name
    value
    label {
        ${LABEL}
    }
    categoryType
    depth
    categoryOrder
    children {
        id
        name
        value
        label {
            ${LABEL}
        }
        categoryType
        depth
        categoryOrder
    }
`

export const SOUND = `
    id
    name
    label {
        ${LABEL}
    }
    filename
    duration
`

export const SPRITE = `
    id
    name
    label {
        ${LABEL}
    }
    category {
        main
        sub
    }
    pictures {
        ${PICTURE}
    }
    sounds {
        ${SOUND}
    }
`

export const TABLE = `
    chart
    fields
    name
    data
`

export const TABLE_INFO = `
    id
    name
    lang
    url
    rows
    fields
    provider
    summary
    description
    exampleurl
    linkText
    isOpen
    projectTable
`

export const REALTIME_VARIABLE = `
    variableType
    key
    value
    array {
        key
        data
    }
    minValue
    maxValue
    visible
    x
    y
    width
    height
    object
`
export const PROJECT = `
    id
    name
    user {
        ${FOREIGN_SELECT_USER}
    }
    visit
    speed
    objects
    variables
    messages
    functions
    tables
    scenes
    thumb
    isopen
    blamed
    isPracticalCourse
    category
    categoryCode
    created
    updated
    shortenUrl
    parent {
        id
        name
        user {
            id
            username
            nickname
        }
    }
    likeCnt
    favorite
    special
    isForLecture
    isForStudy
    isForSubmit
    hashId
    complexity
    staffPicked
    ranked
    submitId {
        id
    }
    description
    description2
    description3
    hasRealTimeVariable
    realTimeVariable {
        ${REALTIME_VARIABLE}
    }
    commentGroup {
        group
        count
    }
    likeCntGroup {
        group
        count
    }
    visitGroup {
        group
        count
    }
    recentGroup {
        group
        count
    }
    learning
    expansionBlocks
    aiUtilizeBlocks
`

export const SYLLABUS_LIST_ITEM = `
    id
    title
    description
    categoryCode
    user {
        id
        username
        nickname
        profileImage {
            id
            filename
            imageType
        }
    }
    isOpen
    type
    target
    thumb
    likeCnt
    comment
    visit
    studyCnt
    difficulty
    requiredTime
`

export const PROJECT_LIST_ITEM = `
    id
    name
    user {
        id
        username
        nickname
        profileImage {
            id
            filename
            imageType
        }
    }
    thumb
    isopen
    isPracticalCourse
    category
    categoryCode
    created
    updated
    special
    isForLecture
    isForStudy
    isForSubmit
    hashId
    complexity
    staffPicked
    ranked
    visit
    likeCnt
    comment
`

export const GROUP_PROJECT_LIST_ITEM = `
    id
    name
    user {
        id
        username
        nickname
        profileImage {
            filename
            imageType
        }
    }
    thumb
    isopen
    isPracticalCourse
    category
    categoryCode
    created
    updated
    special
    isForLecture
    isForStudy
    isForSubmit
    hashId
    complexity
    staffPicked
    group
    visit
    comment
    likeCnt
    recentGroup {
        group
        count
    }
`

export const STUDY = `
    id
    type
    name
    stageName
    stageNumber
    
    basicProject {
        ${PROJECT}
    }
    doneProject {
        ${PROJECT}
    }
    blockSkins
    endRule
    nextStep
    overrideBlock
    limitBlockCount
    theme
    hints
    tvcastUrl
    availableBlocks {
        category
        blocks
    }
    injectOption {
        ${INJECT_OPTION}
    }
    pdfFile {
        ${PDF_FILE}
    }
    entities
    gridSize {
        ${DIMENSION}
    }
    tileSize {
        ${DIMENSION}
    }
    preloadBlock
   
    character
    refCount
    contents
    checkScript
    media
    textContent
    
`
export const LECTURE = `
    id
    title
    description
    goals
    thumb
    category
    categoryCode
    lectureType
    isOpen
    requiredTime
    difficulty
    textBookInfo{
        isTextBook
        sequence
        title
    }
    file {
        name
        path
        url
    }
    user {
        ${FOREIGN_SELECT_USER}
    }
    curriculum { 
        id
        title
        description
        categoryCode
        isOpen
        lectures {
            id
            title
            thumb
            user {
                ${FOREIGN_SELECT_USER}
            }
            progress{
                ${PROGRESS}
            }
        }
        visit
        favorite
        shortenUrl
        updated
    }
    visit
    likeCnt
    visit
    favorite
    studyCnt
    isForHomework
    homework
    due
    studies {
        ${STUDY}
    }
    progress {
        ${PROGRESS}
    }
    repStudy{
        ${STUDY}
    }

    studies {
        ${STUDY}
    }
    parent {
        id
        title
        user {
            id
            nickname
        }
        description
        goals
        difficulty
        requiredTime
    }
    created
    updated
    blamed
`

export const LECTURE_LIST = `
    id
    title
    user {
        ${FOREIGN_SELECT_USER}
    }
    visit
    likeCnt
    favorite
    studyCnt
    isForHomework
    progress {
        ${PROGRESS}
    }
    repStudy{
        ${STUDY}
    }
`
export const CURRICULUM = `
    id
    title
    description
    categoryCode
    isOpen
    user {
        ${FOREIGN_SELECT_USER}
    }
    lectures {
        ${LECTURE_LIST}
    }
    visit
    favorite
    shortenUrl
    created
    updated
    blamed
`
export const COMMENT = `
    id
    user {
        ${FOREIGN_SELECT_USER}
    }
    content
    created
    removed
    blamed
    commentsLength
    likesLength
    isLike
    hide
    image {
        ${PICTURE}
    }
    sticker {
        ${PICTURE}
    }
`
export const DISCUSS = `
    id
    title
    content
    seContent
    created
    commentsLength
    likesLength
    visit
    category
    prefix
    groupNotice
    user {
        ${FOREIGN_SELECT_USER}
    }
    images {
        filename
        imageUrl
    }
    progress
    thumbnail
    reply
    bestComment {
        ${COMMENT}
    }
    blamed
`

export const SYLLABUS = `
    id
    title
    description
    thumb
    likeCnt
    visit
    commentCnt
    category
    categoryCode
    requiredTime
    difficulty
    target
    user {
        ${FOREIGN_SELECT_USER}
    }
    type
`

export const RESPONSE = `
    status
    result
`

export const TOPIC = `
    id
    params
    template
    thumbUrl
    category
    target
    isRead
    created
    updated
    link {
        category
        target
        hash
    }
    topicinfo {
        category
        targetId
    }
`

export const FOLLOWERS = `
    id
    user {
        id
        username
        nickname
        profileImage {
            ${PICTURE}
        }
        status {
            following
            follower
        }
        isFollow
        projects {
            id
            thumb
            name
        }
    }
`
export const FOLLOWINGS = `
    id
    follow {
        id
        username
        nickname
        profileImage {
            ${PICTURE}
        }
        status {
            following
            follower
        }
        isFollow
        projects {
            id
            thumb
            name
        }
    }
`
export const FOLLOW = `
    id
    ${FOLLOWERS}
    ${FOLLOWINGS}
`

export const INSTALL_FILE = `
    id
    version
    apps {
        win32_x86 {
            ${FILE}
        }
        win32_x64 {
            ${FILE}
        }
        darwin {
            ${FILE}
        }
    }
    category
    hashes
    isPublish
    releaseDate
    created
    updated
`
export const FAVORITE = `
    target
    targetSubject
    targetType
`
export const LIKE = `
    target
    targetSubject
    targetType
`
export const BANNER = `
    id
    name
    url
    backgroundColorCode
    textColorCode
    image {
        ${PICTURE}
    }
    title {
        ${LABEL}
    }
    subTitle {
        ${LABEL}
    }
`

export const STUDY_BANNER = `
    id
    name
    url
    textColorCode
    title {
        ${LABEL}
    }
    description {
        ${LABEL}
    }
    image {
        ${PICTURE}
    }
    tabletImage {
        ${PICTURE}
    }
`

export const STUDY_CONTENTS = `
    id
    name
    url
    textColorCode
    title {
        ${LABEL}
    }
    description {
        ${LABEL}
    }
    material {
        ${LABEL}
    }
    image {
        ${PICTURE}
    }
    tabletImage {
        ${PICTURE}
    }
`

export const EntryStory = `
	id
    content
    created
    commentsLength
    likesLength
    user {
        ${FOREIGN_SELECT_USER}
    }
    image {
        ${PICTURE}
    }
    sticker {
        ${PICTURE}
    }
    isLike
`

export const FAQ = `
    id
    title
    content
`

export const STICKER = `
    id
    title
    image {
        ${PICTURE}
    }
    stickers {
        ${PICTURE}
    }
`

export const GROUP = `
    id
    teacher {
        id
        username
        nickname
    }
    name
    school
    grade
    image
    description
    shortUrl
    students {
        id
        studentNo
        studentName
        studentCode
        tempPwd
        sex
        status
        user {
            id
            username
            nickname
        }
        studentUser {
            id
            username
            nickname
        }
    }
    discuss {
        list {
            id
            title
            groupNotice
            created
            updated
        }
        total
    }
    homeworks {
        title
        description
        due
        lecture
        submissions {
            student 
            name
            project 
            lecture 
            submitDate
        }
        created
        updated
        target
    }
    syllabus {
        list {
            id
            title
            created
            updated
        }
        total
    }
    lectures {
        id
        title
        description
    }
    isTeacher
    invite {
        code
        expired
    }
    created
    updated
`

export const NEW_STUDENT = `
    id
    studentNo
    studentName
    studentCode
    tempPwd
    sex
    status
    user {
        id
        username
        nickname
    }
    studentUser {
        id
        username
        nickname
    }
`

export const LIKE_USER = `
    id
    target
    targetSubject
    targetType
    user {
        ${FOREIGN_SELECT_USER}
    }
`

export const CHALLENGE = `
    id
    topic 
    keywords 
    bgColor
    mainKeyword {
        ko
        en
    }
    description {
        ko
        en
    }
`

export const BANNED_INFO = `
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
`
