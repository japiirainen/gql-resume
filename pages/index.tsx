import Head from 'next/head'
import { useQuery } from '@apollo/client'
import styled from 'styled-components'
import { initializeApollo } from 'src/apolloClient'
import { RESUME_QUERY } from '../src/Queries'
import { QueryComponent } from 'src/components/QueryComponent'
import { Experience } from 'src/components/Experience'
import { Objective } from 'src/components/Objective'
import { Header } from 'src/components/Header'
import { Contact } from 'src/components/Contact'

const SplitRight = styled.div`
   width: 65%;
   @media only screen and (max-width: 1024px) {
      width: 50%;
   }
   @media only screen and (max-width: 650px) {
      width: 100%;
   }
`
const SplitLeft = styled.div`
   width: 25%;
   > pre {
      width: 90%;
   }
   @media only screen and (max-width: 1024px) {
      width: 40%;
   }
   @media only screen and (max-width: 650px) {
      width: 100%;
      > pre {
         width: 100%;
      }
   }
`
const Split = styled.div`
   display: flex;
   flex-wrap: wrap;
   padding: 1rem;
`

export default function Home() {
   const { data, error, loading } = useQuery(RESUME_QUERY)

   if (error) {
      return <span>Error...</span>
   }
   if (loading) {
      return <p>loading...</p>
   }
   const { bio, positions } = data
   return (
      <>
         <Head>
            <title>Joona Piirainen Resume</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Header bio={bio} />
         <Split>
            <SplitLeft>
               <Contact bio={bio} />
               <QueryComponent />
            </SplitLeft>
            <SplitRight>
               <Objective bio={bio} />
               <Experience positions={positions} />
            </SplitRight>
         </Split>
      </>
   )
}

export async function getStaticProps() {
   const apolloClient = initializeApollo()

   await apolloClient.query({
      query: RESUME_QUERY,
   })

   return {
      props: {
         initialApolloState: apolloClient.cache.extract(),
      },
   }
}
