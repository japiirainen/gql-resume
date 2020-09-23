import { objectType } from '@nexus/schema'

export const LanguageSkill = objectType({
   name: 'LanguageSkill',
   definition(t) {
      t.id('id')
      t.string('name')
      t.string('skillLevel')
   },
})
