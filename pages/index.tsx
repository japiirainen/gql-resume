import Head from 'next/head'
import { useQuery, gql } from '@apollo/client'
import { initializeApollo } from 'src/apolloClient'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { print } from 'graphql/language/printer'
import prismStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/material-oceanic'
import { format } from 'date-fns'
import styles from '../styles/Home.module.css'

const ResumeQuery = gql`
   query ResumeQuery {
      bio {
         name
         tagline
         objective
         linkedin
         website
         email
         github
      }
      positions {
         id
         title
         company
         startDate
         endDate
         location
         years
         months
         achievements
      }
   }
`

export default function Home() {
   const { data, error, loading } = useQuery(ResumeQuery)

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
         <header className={styles.header}>
            <h1>{bio.name}</h1>
            <h2>{bio.tagline}</h2>
         </header>

         <div className={styles.split}>
            <div className={styles.left}>
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
               <SyntaxHighlighter language="graphql" style={prismStyle}>
                  {print(ResumeQuery)}
               </SyntaxHighlighter>
            </div>
            <div className={styles.right}>
               <h2>Objective</h2>
               <p>{bio.objective}</p>

               <h2>Experience</h2>
               {positions.map(pos => {
                  const length = [
                     pos.years > 0 ? `${pos.years} yrs` : null,
                     pos.months > 0 ? `${pos.months} mths` : null,
                  ]
                     .filter(str => str)
                     .join(' ')
                  return (
                     <div key={pos.id}>
                        <h3>{pos.title}</h3>
                        <p className={styles.light}>
                           {pos.company} | {pos.location}
                        </p>
                        <p className={styles.light}>
                           {format(new Date(pos.startDate), 'MMM yyyy')} |{' '}
                           {pos.endDate ? format(new Date(pos.endDate), 'MMM yyyy') : 'current'} (
                           {length})
                        </p>
                        <ul>
                           {pos.achievements.map(a => (
                              <li key={a}>{a}</li>
                           ))}
                        </ul>
                     </div>
                  )
               })}
            </div>
         </div>
      </>
   )
}

export async function getStaticProps() {
   const apolloClient = initializeApollo()

   await apolloClient.query({
      query: ResumeQuery,
   })

   return {
      props: {
         initialApolloState: apolloClient.cache.extract(),
      },
   }
}
