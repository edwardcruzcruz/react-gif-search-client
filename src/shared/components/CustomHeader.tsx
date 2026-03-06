import styles from './CustomHeader.module.scss';
interface Props {
    title: string;
    description?: string;
}

export const CustomHeader = ({title,description}: Props) => {
  return (
    <div className={styles.contentCenter}>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
    </div>
  )
}
