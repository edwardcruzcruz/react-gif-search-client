import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

//const gifsCache: Record<string, Gif[]> = {};
export const useGifs = (maxItemNumber: number = 5) => {
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifs, setGifs] = useState<Gif[]>([]);
    const gifsCache = useRef<Record<string, Gif[]>>({});
    

    const handleTermClicked = async (term: string) => {
        gifsCache.current
        if(gifsCache.current[term]){
            setGifs(gifsCache.current[term])
            return;
        }
        const gifs = await getGifsByQuery(term);
        if(gifs.length > 0){
            setGifs(gifs);
            gifsCache.current[term] = gifs;
        }
    };
    const handleSearch = async(query: string) => {
        const queryString = query.toLowerCase().trim();
        if(queryString && !previousTerms.includes(queryString)){
            setPreviousTerms((prev) => {
                const updated = [...prev,queryString];
                if(updated.length > maxItemNumber){
                    updated.shift();
                }
                return updated;
            });
            const gifs = await getGifsByQuery(query);
            if(gifs.length > 0){
                setGifs(gifs);
                gifsCache.current[queryString] = gifs;
            }
        }
    };
    return {
        gifs,
        previousTerms,
        handleSearch,
        handleTermClicked,
    }
}
