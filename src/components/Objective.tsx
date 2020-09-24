import { BioInterface } from 'src/interfaces/interfaces'

export const Objective: React.FC<{ bio: BioInterface }> = ({ bio }) => {
   return (
      <>
         <h2>Objective</h2>
         <p>{bio.objective}</p>
      </>
   )
}
