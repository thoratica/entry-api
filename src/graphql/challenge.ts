import * as Common from './dto/common'

export const SELECT_CURRENT_CHALLENGE = `
    query  {
        currentChallenge {
            ${Common.CHALLENGE}
        }
    }
`
