import { SoftSkillInterface } from 'src/interfaces/interfaces'

export const SoftSkills: React.FC<{ softSkills: SoftSkillInterface[] }> = ({ softSkills }) => {
   return (
      <>
         <h2>Social skills</h2>
         <ul>
            {softSkills.map(skill => {
               return <li key={skill.id}>{skill.name}</li>
            })}
         </ul>
      </>
   )
}
