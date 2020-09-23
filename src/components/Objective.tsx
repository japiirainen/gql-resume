export interface BioProps {
   bio: any
}

export const Objective: React.FC<BioProps> = ({ bio }) => {
   return (
      <>
         <h2>Objective</h2>
         <p>{bio.objective}</p>
      </>
   )
}
