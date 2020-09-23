import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { print } from 'graphql/language/printer'
import prismStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/material-oceanic'

import { RESUME_QUERY } from '../Queries'

export const QueryComponent: React.FC = () => {
   return (
      <SyntaxHighlighter language="graphql" style={prismStyle}>
         {print(RESUME_QUERY)}
      </SyntaxHighlighter>
   )
}
