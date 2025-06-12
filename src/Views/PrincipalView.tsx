import { useState } from 'react';
import AppBar from '../Components/AppBar';
import Pokemon from '../Components/Pokemon';
import { type PokemonProps } from '../Models/PokemonProps';
import '../css/main.css'

function PrincipalView(){
    const [name, setName] = useState("")
    const [results, setResults] = useState<PokemonProps>({})
    const [showPokemon, setShowPokemon] = useState(false)

    async function search_pokemon(){
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            if(response.ok){
                return response.json()
            }
        })
        let types_pokemon: Array<string> = []
        res.types.map((e) => {
            console.log(e.type.name)
            types_pokemon.push(e.type.name)
        })
        setResults({ 
            name: res.name,
            id: res.id,
            weight: res.weight/10,
            height: res.height*10,
            photo: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${res.id}.png`,
            cries: `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${res.id}.ogg`,
            types: types_pokemon
        })
        setShowPokemon(true)
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
                showPokemon
                    ?
                        <section className='flex justify-center'>
                            <Pokemon name={results.name} weight={results.weight} height={results.height} id={results.id} photo={results.photo} cries={results.cries} types={results.types}/>
                        </section>
                    :
                    <></>
            }
        </>
    )
}

export default PrincipalView