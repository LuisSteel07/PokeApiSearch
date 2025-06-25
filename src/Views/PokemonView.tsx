import { useState } from 'react';
import { type PokemonProps } from '../Models/PokemonProps';

import Pokemon from '../Components/Pokemon';
import Text from '../Components/Text';
import PokemonRequest from '../Requests/PokemonRequest';
import SearchInput from '../Components/SearchInput';
import { ToastContainer, toast } from 'react-toastify';
import '../css/main.css'

function PokemonView(){
    const [results, setResults] = useState<PokemonProps>()

    async function handleSearch(query: string){
        try{
            setResults(await PokemonRequest(query))
        }
        catch(Error){
            toast("Pokemon not found!");
        }
    }

    return (
        <section className='flex grow flex-col justify-center pt-8 gap-8 h-full'>
            <section className='flex justify-center pt-8'>
                <Text text='En esta seccion podra buscar todo tipo de pokemon, coloque su nombre o numero.' />
            </section>
            <section className='flex justify-evenly p-4'>
                <SearchInput onSearch={handleSearch} />
            </section>
            {   
                results != undefined
                    ?
                        <section className='flex justify-center'>
                            <Pokemon pokemon={results}/>
                        </section>
                    :
                    <></>
            }
            <ToastContainer theme='dark' />
        </section>
    )
}

export default PokemonView