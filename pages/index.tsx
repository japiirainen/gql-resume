import Head from 'next/head'
import { useQuery } from '@apollo/client'
import styled from 'styled-components'
import { initializeApollo } from 'src/apolloClient'
import { RESUME_QUERY } from '../src/Queries'
import styles from 'src/styles/Home.module.css'
import { QueryComponent } from 'src/components/QueryComponent'
import { Experience } from 'src/components/Experience'
import { Objective } from 'src/components/Objective'
import { Header } from 'src/components/Header'

const SplitRight = styled.div`
   width: 75%;
   @media only screen and (max-width: 1024px) {
      width: 60%;
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
      return (
         <header className={styles.header}>
            <h1>Joona Piirainen</h1>
            <h2>loading...</h2>
         </header>
      )
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
               <h2>Contact</h2>
               <p>
                  <strong>Email</strong> <a href={`mailto:${bio.email}`}>{bio.email}</a>
               </p>
               <p>
                  <strong>Website</strong>{' '}
                  <a target="_blank" href={bio.website}>
                     {new URL(bio.website).host}
                  </a>
               </p>
               <p>
                  <strong>Github</strong>{' '}
                  <a target="_blank" href={bio.github}>
                     {bio.github.replace('https://', '')}
                  </a>
               </p>
               <p>
                  <strong>LinkedIn</strong>{' '}
                  <a target="_blank" href={bio.linkedin}>
                     {bio.linkedin.replace('https://', '').replace('-a026351a8/', '')}
                  </a>
               </p>
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
