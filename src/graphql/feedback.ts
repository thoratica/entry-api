import * as Common from './dto/common'

export const REPORT_FEEDBACK = `
mutation ($reportJson: JSON) {
    reportFeedback(reportJson: $reportJson) {
        ${Common.RESPONSE}
    }
}
`

export const FEEDBACK_USER_LIST = `
    query($id: ID) {
        feedbackUserlist(id: $id) {
            total
            list {
                category
                url
                original
                created
                group {
                    name
                }
                lecture {
                    title
                }
            }
        }
    }
`
