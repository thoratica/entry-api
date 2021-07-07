import * as Common from './dto/common'
import * as DTO from './dto/topic'

export const TOPIC_SUBSCRIPTION = `
    subscription TOPIC_ADDED($target: String) {
        topicAdded(target: $target) {
          ${Common.TOPIC}
        }
    }
`

export const ADD_TOPIC = `
  mutation ADD_TOPIC(
    ${DTO.CREATE_TOPIC_INPUT}
  ) {
      addTopic(
        ${DTO.CREATE_TOPIC_MIDDLE}
      ) {
        status
        result {
          ${Common.TOPIC}
        }
      }
  }
`

export const SELECT_TOPICS = `
    query SELECT_TOPICS($pageParam: PageParam){
        topicList(pageParam: $pageParam) {
            hasNext
            list {
                ${Common.TOPIC}
            }
        }
    }
`

export const READ_TOPICS = `
    mutation {
      readTopics {
        ${Common.RESPONSE}
      }
    }
`

export const DELETE_TOPICS = `
    mutation {
      deleteAllTopics {
        ${Common.RESPONSE}
      }
    }
`

export const DELETE_TOPIC = `
    mutation($id: ID!) {
      deleteTopic(id: $id) {
        ${Common.RESPONSE}
      }
    }
`
