import { TechSkillInterface } from 'src/interfaces/interfaces'
import { LightP } from './Experience'

export const TechSkills: React.FC<{ techSkills: TechSkillInterface[] }> = ({ techSkills }) => {
   return (
      <>
         <h2>Tech skills</h2>
         {techSkills.map(item => {
            return (
               <LightP key={item.id}>
                  {item.name} | {item.skillLevel}
               </LightP>
            )
         })}
      </>
   )
}
