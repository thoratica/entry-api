import * as Common from './dto/common'

export const SELECT_STICKER = `
    query($title: String){
        sticker(title: $title){
            ${Common.STICKER}
        }
    }
`
