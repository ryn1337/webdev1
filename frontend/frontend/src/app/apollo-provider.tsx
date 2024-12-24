'use client'
import { ReactNode } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

// 1) Client konfigurieren
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

// 2) Wrapper-Komponente
type Props = {
  children: ReactNode
}

export function ApolloWrapper({ children }: Props) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
