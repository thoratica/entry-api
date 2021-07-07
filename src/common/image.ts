export interface ImageInfo {
  id: string
  name: string
  filename: string
  imageType: string
}

export class Image {
  id: string
  name: string
  filename: string
  imageType: string
  imageUrl: string
  constructor (imageInfo: ImageInfo) {
    this.id = imageInfo.id
    this.name = imageInfo.name
    this.filename = imageInfo.filename
    this.imageType = imageInfo.imageType
    this.imageUrl = `https://playentry.org/uploads/${imageInfo.filename.slice(
      0,
      2
    )}/${imageInfo.filename.slice(2, 4)}/${imageInfo.filename}.${
      imageInfo.imageType
    }`
  }
}
