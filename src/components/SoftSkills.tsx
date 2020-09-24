import { SoftSkillInterface } from 'src/interfaces'
import styled from 'styled-components'

const LightLi = styled.li`
   margin: 0.25rem 0;
   font-size: 0.9rem;
   color: #607d8b;
`

export const SoftSkills: React.FC<{ softSkills: SoftSkillInterface[] }> = ({ softSkills }) => {
   return (
      <>
         <h2>Social skills</h2>
         <ul>
            {softSkills.map(skill => {
               return <LightLi key={skill.id}>{skill.name}</LightLi>
            })}
         </ul>
      </>
   )
}
