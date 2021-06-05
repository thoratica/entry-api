export type BannedReason =
  | 'abuse'
  | 'commercial'
  | 'crime'
  | 'improperclass'
  | 'improperinfo'
  | 'improperprofile'
  | 'information'
  | 'obscene'
  | 'plaster'
  | 'verbal'
  | string

export interface BannedInfo {
  username: string
  nickname: string | null
  reason: BannedReason
  bannedCount: number
  bannedType: 'user'
  projectId: '5f8fcabf2facd301d305d633'
  startDate: string
  userReflect: {
    status: 'read' | string
    endDate: string
  }
}
