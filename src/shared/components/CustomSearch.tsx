import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
    placeholder?: string;
    onQuery: (query: string) => void;
}

export const CustomSearch = ({placeholder='Buscar',onQuery}:Props) => {
    const [query, setQuery] = useState('')
    useEffect(() => {//hook de efecto que se dispara cada
        //vez que se renderiza este componente en el dom
      const timeoutId = setTimeout(() => {
          onQuery(query) //se ejecuta nuestra función cada vez que query es modificado en el input
          //sin necesidad de usar algun evento diferente a click o spacio, solo con digitar algo en el input
      }, 700);
    
      return () => {
        clearTimeout(timeoutId);//este return dispara las acciones que deben ejecutarse antes de cerrar o finalizar la ejecución del hook
      }
    }, [query, onQuery])//cuales son las dependencias que quiero usar para que se dispare el hook
    //cambios en Query o el onQuery
    
    const handleSearch = () => {
        onQuery(query);
    };
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if( event.key === 'Enter'){
            handleSearch();
        }
    };
    return (
        <div className='search-container'>
            <input 
                type='text' 
                placeholder={placeholder} 
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button
                onClick={handleSearch}
                >
                Buscar
            </button>
        </div>
    )
}
