import { requestTranslations } from './request'

const namespaces = [
  'common',
  'user',
  'terms',
  'alarm',
  'workspace',
  'admin',
  'material',
  'profile',
  'project',
  'study',
  'community',
  'faq',
  'about',
  'download',
  'term',
  'main',
  'report',
  'notice',
  'group',
  'reflect',
  'banned',
  'learn',
  'notice',
  'title'
]
export type Namespaces =
  | 'common'
  | 'user'
  | 'terms'
  | 'alarm'
  | 'workspace'
  | 'admin'
  | 'material'
  | 'profile'
  | 'project'
  | 'study'
  | 'community'
  | 'faq'
  | 'about'
  | 'download'
  | 'term'
  | 'main'
  | 'report'
  | 'notice'
  | 'group'
  | 'reflect'
  | 'banned'
  | 'learn'
  | 'notice'
  | 'title'
const saves: {
  // eslint-disable-next-line no-unused-vars
  [_ in Namespaces]?: { [key: string]: string }
} = {}

export const useTranslate = async (
  includeNamespaces: Namespaces[],
  lang: 'ko' | 'en' | 'ja' = 'ko'
) => {
  const unifiedTranslations: { [key: string]: string } = {}
  await Promise.all(
    includeNamespaces.map(async namespace => {
      if (namespaces.includes(namespace)) {
        if (Object.keys(saves).includes(namespace) && saves[namespace] !== {}) {
          Object.assign(unifiedTranslations, saves[namespace]!)
        } else {
          const rawTranslations = await requestTranslations(namespace, lang)
          const translations: { [key: string]: string } = {}

          Object.keys(rawTranslations).forEach(translation => {
            translations[`${namespace}:${translation}`] =
              rawTranslations[translation]
          })
          saves[namespace] = translations
          Object.assign(unifiedTranslations, translations)
        }
      }
    })
  )
  return unifiedTranslations
}
