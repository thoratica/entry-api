import { graphQL } from '../request'
import { SELECT_DISCUSS_LIST } from '../../graphql/discuss'
import { Discuss } from '../../types/DiscussInfo'

export const getDiscussList = async (
  category: 'free' | any = 'free',
  start: number = 0,
  display: number = 10,
  sort: 'created' = 'created'
): Promise<{ total: number; list: Discuss[] }> => {
  const discussType = category === 'free' ? 'entryStory' : ''
  const getDiscussListRes = await graphQL(SELECT_DISCUSS_LIST, {
    category,
    discussType,
    pageParam: { start, display, sort },
    prefix: 'all',
    searchAfter: [],
    searchType: 'scroll',
    term: 'all'
  })
  const getDiscussListData = await getDiscussListRes.json()
  if (Object.keys(getDiscussListData).includes('errors')) {
    throw new Error(getDiscussListData.errors[0].statusCode)
  }
  return getDiscussListData.data.discussList
}
