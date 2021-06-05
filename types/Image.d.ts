export interface Image {
  id: string
  name: string
  label: {
    ko: string | null
    en: string | null
    ja: string | null
    vn: string | null
  }
  filename: string
  imageType: string
  dimension: {
    width: number | null
    height: number | null
  }
  trimmed: {
    filename: string
    width: number | null
    height: number | null
  }
}
