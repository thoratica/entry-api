import * as Common from './dto/common'

export const UPDATE_VIEWCOUNT = `
    mutation UPDATE_VIEWCOUNT(
        $target: ID!, $targetSubject: String, $groupId: ID
    ){
        updateViewCount(
            target: $target, targetSubject: $targetSubject, groupId: $groupId
        ){
            ${Common.RESPONSE}
        }
    }
`
