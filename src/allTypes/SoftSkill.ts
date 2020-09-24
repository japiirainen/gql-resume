import { objectType } from '@nexus/schema'

export const SoftSkill = objectType({
   name: 'SoftSkill',
   definition(t) {
      t.id('id')
      t.string('name')
   },
})
