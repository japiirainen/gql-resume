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
import { LangSkills } from 'src/components/LangSkills'
import { TechSkills } from 'src/components/TechSkills'
import { SoftSkills } from 'src/components/SoftSkills'
import {
   BioInterface,
   LanguageSkillInterface,
   PositionInterface,
   SoftSkillInterface,
   TechSkillInterface,
} from 'src/interfaces/interfaces'

const SplitRight = styled.div`
   width: 70%;
   margin-left: 20px;
   @media only screen and (max-width: 1024px) {
      margin-left: 20px;
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
      return <span>Error... oops</span>
   }
   if (loading) {
      return <p>loading...</p>
   }
   const {
      bio,
      positions,
      languageSkills,
      techSkills,
      softSkills,
   }: {
      bio: BioInterface
      positions: PositionInterface[]
      languageSkills: LanguageSkillInterface[]
      techSkills: TechSkillInterface[]
      softSkills: SoftSkillInterface[]
   } = data
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
               <LangSkills languageSkills={languageSkills} />
               <TechSkills techSkills={techSkills} />
               <SoftSkills softSkills={softSkills} />
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
