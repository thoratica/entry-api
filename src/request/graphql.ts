import fetch from 'node-fetch'

let sid: string = ''

export const setSid = (newValue: string) => (sid = newValue)

export interface GraphQLError {
  statusCode: number
}

export const graphql = async (
  query: string,
  variables: { [key: string]: any },
  headers = { 'Content-Type': 'application/json', Cookie: `ETR_SID=${sid};` },
  endpoint = 'https://playentry.org/graphql'
) => {
  let error: GraphQLError | undefined

  const res = await fetch(endpoint, {
    headers,
    body: JSON.stringify({ query, variables }),
    method: 'POST'
  })
  const { data, errors } = await res.json()
  if (errors !== undefined && errors.length > 0) error = errors[0]

  return { data, error, cookie: res.headers.get('set-cookie') }
}
