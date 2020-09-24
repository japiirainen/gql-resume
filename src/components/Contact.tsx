import { BioInterface } from 'src/interfaces/interfaces'
import styled from 'styled-components'

const EllipsDiv = styled.div`
   width: 200px;
   text-overflow: ellipsis;

   @media print {
      width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
   }
`

export const Contact: React.FC<{ bio: BioInterface }> = ({ bio }) => {
   return (
      <EllipsDiv>
         <h2>Contact</h2>
         <p>
            <strong>Email {'=>'}</strong> <a href={`mailto:${bio.email}`}>{bio.email}</a>
         </p>
         <p>
            <strong>Blog {'=>'}</strong>{' '}
            <a target="_blank" href={bio.website}>
               {new URL(bio.website).host}
            </a>
         </p>
         <p>
            <strong>Github {'=>'}</strong>{' '}
            <a target="_blank" href={bio.github}>
               {bio.github.replace('https://', '')}
            </a>
         </p>
         <p>
            <strong>LinkedIn {'=>'}</strong>{' '}
            <a target="_blank" href={bio.linkedin}>
               {bio.linkedin.replace('https://', '').replace('-a026351a8/', '')}
            </a>
         </p>
         <p>
            <strong>Playground {'=>'}</strong>{' '}
            <a target="_blank" href="/api/graphql">
               api/graphql
            </a>
         </p>
      </EllipsDiv>
   )
}
