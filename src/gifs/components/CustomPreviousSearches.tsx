import type { FC } from 'react';
import styles from './CustomPreviousSeraches.module.scss';

interface Props {
  searches: string[];

  onLabelClicked: (term: string) => void;
}

export const CustomPreviousSearches: FC<Props> = ({searches, onLabelClicked}) => {
  return (
    <div className={styles.previousSearches}>
      <h2>Búsquedas previas</h2>
      <ul className={styles.previousSearchesList}>
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
