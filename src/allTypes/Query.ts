import { idArg, queryType } from '@nexus/schema'
import { data } from 'src/data'
import { Bio, Position } from './index'
import { LanguageSkill } from './LanguageSkill'
import { SoftSkill } from './SoftSkill'
import { TechSkill } from './TechSkill'

export const Query = queryType({
   definition(t) {
      t.field('bio', {
         type: Bio,
         description: 'Find a bio',
         resolve: () => data.bio,
      })

      t.list.field('positions', {
         type: Position,
         description: 'Find all positions',
         resolve: () => data.positions as any,
      })

      t.field('position', {
         type: Position,
         description: 'Find a position by its ID',
         nullable: true,
         args: { id: idArg() },
         resolve: (_, { id }: { id: string }) => data.positions.find(pos => pos.id === id) as any,
      })

      t.list.field('languageSkills', {
         type: LanguageSkill,
         description: 'Find languageSkills',
         resolve: () => data.languageSkills,
      })

      t.list.field('techSkills', {
         type: TechSkill,
         description: 'Find techSkills',
         resolve: () => data.techSkills,
      })

      t.list.field('softSkills', {
         type: SoftSkill,
         description: 'Find techSkills',
         resolve: () => data.softSkills,
      })
   },
})
