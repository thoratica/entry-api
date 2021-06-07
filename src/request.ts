import fetch, { RequestInit } from 'node-fetch'
import { Namespaces } from './i18n'

let cookie: string = ''

export const getCookie = () => cookie
export const setCookie = (newValue: string) => (cookie = newValue)

export const rawRequest = async (
  url: string,
  method: 'GET' | 'POST' = 'GET',
  data: { [key: string]: any } = {}
) => {
  const requestData: RequestInit = {
    method,
    headers: { 'Content-Type': 'application/json', Cookie: cookie }
  }
  if (method !== 'GET') requestData.body = JSON.stringify(data)
  return await fetch(`https://playentry.org${url}`, requestData)
}
export const graphQL = async (
  query: string,
  variables: Record<string, any>,
  returnRawResponse: boolean = false
) => {
  const res = await rawRequest('/graphql', 'POST', { query, variables })

  if (returnRawResponse) return res

  const data = await res.json()
  if (Object.keys(data).includes('errors')) {
    throw new Error(data.errors[0].statusCode)
  }

  return data.data
}

export const requestTranslations = async (
  namespace: Namespaces,
  lang: 'ko' | 'en' | 'ja' = 'ko'
) => {
  const res = await rawRequest(`/locales/${lang}/${namespace}`)
  if (res.status === 200) return await res.json()
  else return {}
}
