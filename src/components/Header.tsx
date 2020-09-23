import { BioProps } from './Objective'

import styled from 'styled-components'

const MyHeader = styled.header`
   text-align: center;
   padding: 2rem 0;
   background-color: #bbdefb;
`

export const Header: React.FC<BioProps> = ({ bio }) => {
   return (
      <MyHeader>
         <h1>{bio.name}</h1>
         <h2>{bio.tagline}</h2>
      </MyHeader>
   )
}
