import { CustomPreviousSearches } from './gifs/components/CustomPreviousSearches'
import { GifList } from './gifs/components/GifList'
import { CustomHeader } from './shared/components/CustomHeader'
import { CustomSearch } from './shared/components/CustomSearch'
import { useGifs } from './gifs/hooks/useGifs'

const MAX_ITEMS = 3;
export const GifsApp = () => {
    const {gifs,handleSearch,handleTermClicked,previousTerms} = useGifs(MAX_ITEMS);
    return (
        <>
            {/* Header */}
            <CustomHeader 
                title='Buscador de Gifs'
                description='Descubre y comparte el Gif perfecto' 
            />

            {/* Search */}
            <CustomSearch 
                placeholder='Buscar gif'
                onQuery={handleSearch}
            />

            {/* Búsquedas previas */}
            <CustomPreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>

            {/* Gifs */}
            <GifList 
                gifs={gifs}
            />
        </>
      )
}
