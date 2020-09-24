import { LightP } from './Experience'

export const LangSkills: React.FC<{ languageSkills: any[] }> = ({ languageSkills }) => {
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
