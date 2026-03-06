import type { Gif } from "../interfaces/gif.interface"
import styles from "./GifList.module.scss";
interface Props {
    gifs: Gif[]
}

export const GifList = ({gifs}: Props) => {
  return (
    <div className={styles.gifsContainer}>
        {gifs.map( (gif) => (
            <div key={gif.id} className={styles.gitCard}>
                <img src={gif.url} alt={gif.title}/>
                <h3>{gif.title}</h3>
                <p>
                    {gif.width}x{gif.height} (1.5mb)
                </p>
            </div>
        ))}
    </div>
  )
}
