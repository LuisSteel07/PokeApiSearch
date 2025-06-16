import { useState } from 'react';
import { type PokemonProps } from '../Models/PokemonProps';

import Pokemon from '../Components/Pokemon';
import PokemonRequest from '../Requests/PokemonRequest';
import SearchInput from '../Components/SearchInput';
import { ToastContainer, toast } from 'react-toastify';
import '../css/main.css'

function PrincipalView(){
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
        <>
            <section className='flex justify-center pt-8'>
                <p>En esta seccion podra buscar todo tipo de pokemon, coloque su nombre o numero.</p>
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
        </>
    )
}

export default PrincipalView