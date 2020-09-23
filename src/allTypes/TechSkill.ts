import { objectType } from '@nexus/schema'

export const TechSkill = objectType({
   name: 'TechSkill',
   definition(t) {
      t.id('id')
      t.string('name')
      t.string('skillLevel')
   },
})
