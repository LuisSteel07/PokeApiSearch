import { type PokemonType} from "../Models/pokemonType"

async function PokemonRequest(name: string){
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
    res.types.map((e: PokemonType) => {
        types_pokemon.push(e.type.name)
    })

    return { 
        name: res.name,
        id: res.id,
        weight: res.weight/10,
        height: res.height*10,
        photo: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${res.id}.png`,
        cries: `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${res.id}.ogg`,
        types: types_pokemon
    }
}

export default PokemonRequest