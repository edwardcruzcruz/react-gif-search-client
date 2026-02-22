import type { FC } from 'react';

interface Props {
  searches: string[];

  onLabelClicked: (term: string) => void;
}

export const CustomPreviousSearches: FC<Props> = ({searches, onLabelClicked}) => {
  return (
    <div className='previous-searches'>
      <h2>Búsquedas previas</h2>
      <ul className='previous-searches-list'>
          {searches.map((item)=>(
            <li 
              key={item}
              onClick={() => {onLabelClicked(item)}}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  )
}
