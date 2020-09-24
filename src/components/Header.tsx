import styled, { css } from 'styled-components'

const MainHeader = styled.header`
   text-align: center;
   padding: 2rem 0;
   background-color: #785964;
`

const NameH1 = styled.h1`
   color: #e7e5e5;
`
const BioH2 = styled.h2`
   color: #e7e5e5;
`

export const Header: React.FC<{ bio: any }> = ({ bio }) => {
   return (
      <MainHeader>
         <NameH1>{bio.name}</NameH1>
         <BioH2>{bio.tagline}</BioH2>
      </MainHeader>
   )
}
