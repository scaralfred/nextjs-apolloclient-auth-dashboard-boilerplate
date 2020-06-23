import { useMemo } from 'react'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http'

let apolloClient

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = (typeof window !== 'undefined') ? localStorage.getItem('token') : null;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(new HttpLink({
      uri: "http://localhost:4000/", // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    })),
    cache: new InMemoryCache(),
  })
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
