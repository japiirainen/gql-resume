import { LanguageSkillInterface } from 'src/interfaces/interfaces'
import { LightP } from './Experience'

export const LangSkills: React.FC<{ languageSkills: LanguageSkillInterface[] }> = ({
   languageSkills,
}) => {
   return (
      <>
         <h2>Language skills</h2>
         {languageSkills.map(lang => {
            return (
               <LightP key={lang.id}>
                  {lang.name} | {lang.skillLevel}
               </LightP>
            )
         })}
      </>
   )
}
