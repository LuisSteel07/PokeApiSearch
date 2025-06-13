import { useState } from 'react';
import AppBar from '../Components/AppBar';
import Pokemon from '../Components/Pokemon';
import { type PokemonProps } from '../Models/PokemonProps';
import PokemonRequest from '../Requests/PokemonRequest';
import '../css/main.css'

function PrincipalView(){
    const [name, setName] = useState("")
    const [results, setResults] = useState<PokemonProps>()

    async function search_pokemon(){
        setResults(await PokemonRequest(name))
    }

    return (
        <>
            <AppBar/>
            <section className='flex justify-evenly p-4'>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => {setName(e.target.value)}}
                    className='bg-slate-600 rounded-2xl p-2 text-white'
                    placeholder='Name or ID pokemon'
                    />
                <button onClick={search_pokemon} className='rounded-full bg-blue-500 w-12 h-12 flex items-center justify-center hover:scale-110 hover:bg-blue-700 transition ease-in-out duration-300'>
                    <img src="/magnifier.svg" alt="icon" width={30} height={30}/>
                </button>
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
        </>
    )
}

export default PrincipalView