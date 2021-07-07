import * as Common from './dto/common'

export const SELECT_ALL = `
    query (
        $query: String, 
        $projectParam: PageParam
        $syllabusParam: PageParam
        $qnaParam: PageParam
        $tipsParam: PageParam
    ){
        projectList(query: $query, pageParam: $projectParam) {
            total
            list {
                ${Common.PROJECT_LIST_ITEM}
            }
        }
        syllabusList(query: $query, pageParam: $syllabusParam) {
            total
            list {
                ${Common.SYLLABUS}
            }
        }
        qnaList: discussList(query: $query, pageParam: $qnaParam, category: "qna") {
            total
            list {
                ${Common.DISCUSS}
            }
        }
        tipList: discussList(query: $query, pageParam: $tipsParam, category: "tips") {
            total
            list {
                ${Common.DISCUSS}
            }
        }
    }
`

export const GET_POPULAR_SEARCH_WORD = `
    query {
        popularSearchWord {
            words
        }
    }
`

export const SET_POPULAR_SEARCH_WORD = `
    mutation ($query: String) {
        addSearchWord(query: $query) {
            ${Common.RESPONSE}
        }
    }
`
