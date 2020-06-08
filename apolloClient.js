import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'
import { APP_CONFIG } from './app.config'
import { AUTH_APIS } from './utils/auth'

const authLink = setContext(async (_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: await AUTH_APIS.scheduleRenewal().then(res => res)
    }
  }
})

const queryLink = new HttpLink({
  uri: APP_CONFIG.domain().graphql + 'api/graphql', // Server URL (must be absolute)
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  fetch
})

const mutationLink = new HttpLink({
  uri: APP_CONFIG.domain().graphql + 'api/private', // Server URL (must be absolute)
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  withCredentials: true,
  fetch
})

export default function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.

  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: ApolloLink.split(
      operation => operation.getContext().clientName === 'mutation',
      authLink.concat(mutationLink),
      queryLink
    ),
    cache: new InMemoryCache().restore(initialState)
  })
}
