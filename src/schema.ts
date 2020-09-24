import { makeSchema } from '@nexus/schema'
import path from 'path'
import * as types from './allTypes'

export const schema = makeSchema({
   types,
   outputs: {
      schema: path.join(process.cwd(), 'schema.graphql'),
      typegen: path.join(process.cwd(), 'src', 'generated', 'nexus.ts'),
   },
   typegenAutoConfig: {
      sources: [
         {
            alias: 'types',
            source: path.join(process.cwd(), 'src', 'interfaces', 'index.ts'),
            typeMatch: type => {
               console.log(`${type}Interface`)
               return new RegExp(`${type}Interface`)
            },
         },
      ],
      backingTypeMap: {
         Date: 'Date',
         URL: 'URL',
      },
      debug: process.env.NODE_ENV === 'development',
   },
})
