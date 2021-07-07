import * as Common from './dto/common'

export const SELECT_BANNERS = `
    query ($category: String, $deviceType: String) {
        banners(category: $category, deviceType: $deviceType) {
            total
            list {
                ${Common.BANNER}
            }
        }
    }
`

export const SELECT_STUDY_INFO = `
    query {
        studyinfo {
            banner {
                ${Common.STUDY_BANNER}
            }
            contents {
                ${Common.STUDY_CONTENTS}
            }
        }
    }
`
