import { graphQL } from '../request'
import {
  SELECT_DISCUSS_LIST,
  SELECT_ENTRYSTORY,
  SELECT_NOTICE_LIST,
  SELECT_QNA_LIST
} from '../../graphql/discuss'
import {
  DiscussList,
  EntryStoryList,
  NoticeList,
  QnAList
} from '../../types/DiscussInfo'

type Categories = 'qna' | 'free' | 'notice' | 'tips' | string
type DiscussListType<T> = T extends 'qna'
  ? QnAList
  : T extends 'free'
  ? EntryStoryList
  : T extends 'notice'
  ? NoticeList
  : DiscussList

export const getDiscussList = async <T extends Categories>(
  category: T,
  start: number = 0,
  display: number = 10,
  sort: 'created' = 'created'
): Promise<{
  total: number
  list: DiscussListType<T>[]
  searchAfter: number[]
}> => {
  return (
    await graphQL(
      category === 'qna'
        ? SELECT_QNA_LIST
        : category === 'free'
        ? SELECT_ENTRYSTORY
        : category === 'notice'
        ? SELECT_NOTICE_LIST
        : SELECT_DISCUSS_LIST,
      {
        category,
        pageParam: { start, display, sort },
        prefix: 'all',
        searchAfter: [],
        searchType: 'scroll',
        term: 'all'
      }
    )
  ).discussList
}
