import { createGlobalStyle } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'src/apolloClient'

const Style = createGlobalStyle`
   html,
   body {
      padding: 0;
      margin: 0;
      font-family: 'Dank Mono', monospace;
      font-weight: bald;
      }

   * {
      box-sizing: border-box;
   }
`

function MyApp({ Component, pageProps }) {
   const client = useApollo(pageProps.initialApolloState)

   return (
      <ApolloProvider client={client}>
         <Style />
         <Component {...pageProps} />
      </ApolloProvider>
   )
}

export default MyApp
