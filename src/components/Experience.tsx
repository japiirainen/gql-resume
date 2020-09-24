import { format } from 'date-fns'
import styled from 'styled-components'

export const LightP = styled.p`
   margin: 0.25rem 0;
   font-size: 0.9rem;
   color: #607d8b;
`

export const Experience: React.FC<{ positions: any[] }> = ({ positions }) => {
   return (
      <div>
         <h2>Experience</h2>
         {positions.map(pos => {
            const length = [
               pos.years > 0 ? `${pos.years} yrs` : null,
               pos.months > 0 ? `${pos.months} mths` : null,
            ]
               .filter(str => str)
               .join(' ')
            return (
               <div key={pos.id}>
                  <h3>{pos.title}</h3>
                  <LightP>
                     {pos.company} | {pos.location}
                  </LightP>
                  <LightP>
                     {format(new Date(pos.startDate), 'MMM yyyy')} |{' '}
                     {pos.endDate ? format(new Date(pos.endDate), 'MMM yyyy') : 'current'} ({length}
                     )
                  </LightP>
                  <ul>
                     {pos.achievements.map(a => (
                        <li key={a}>{a}</li>
                     ))}
                  </ul>
               </div>
            )
         })}
      </div>
   )
}
