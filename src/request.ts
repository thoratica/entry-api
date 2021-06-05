import axios, { AxiosInstance } from 'axios'
import { Namespaces } from './i18n'

let sid: string = ''

export const setSid = (newValue: string) => (sid = newValue)

export const rawRequest: AxiosInstance = axios.create({
  baseURL: 'https://playentry.org',
  timeout: 3000,
  headers: { Cookie: `ETR_SID=${sid}`, 'Content-Type': 'application/json' }
})

export const graphQL = async (
  query: string,
  variables: Record<string, string | number | boolean | undefined>
) => {
  const res = await rawRequest.post('/graphql', { query, variables })
  return res
}

export const requestTranslations = async (
  namespace: Namespaces,
  lang: 'ko' | 'en' | 'ja' = 'ko'
) => {
  const res = await rawRequest(`/locales/${lang}/${namespace}`)
  if (res.status === 200) return res.data
  else return {}
}
