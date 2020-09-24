import { gql } from '@apollo/client'

export const RESUME_QUERY = gql`
   query Joona {
      bio {
         name
         tagline
         objective
         linkedin
         website
         email
         github
      }
      techSkills {
         id
         name
         skillLevel
      }
      languageSkills {
         id
         name
         skillLevel
      }
      softSkills {
         id
         name
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
