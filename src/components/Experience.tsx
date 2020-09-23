import { format } from 'date-fns'
import styled from 'styled-components'

interface ExperienceProps {
   positions: any[]
}

const LighP = styled.p`
   margin: 0.25rem 0;
   font-size: 0.9rem;
   color: #607d8b;
`

export const Experience: React.FC<ExperienceProps> = ({ positions }) => {
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
                  <LighP>
                     {pos.company} | {pos.location}
                  </LighP>
                  <LighP>
                     {format(new Date(pos.startDate), 'MMM yyyy')} |{' '}
                     {pos.endDate ? format(new Date(pos.endDate), 'MMM yyyy') : 'current'} ({length}
                     )
                  </LighP>
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
