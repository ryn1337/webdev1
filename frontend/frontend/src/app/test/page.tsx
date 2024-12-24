'use client'
import { gql, useQuery } from '@apollo/client'

const HELLO_QUERY = gql`
  query {
    hello
  }
`

export default function TestPage() {
  const { data, loading, error } = useQuery(HELLO_QUERY)

  if (loading) return <p>Lade ...</p>
  if (error) return <p>Fehler: {error.message}</p>

  return <p>Antwort: {data.hello}</p>
}
