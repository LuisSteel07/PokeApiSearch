import type { MovesProps } from "../Models/MovesProps"

async function MovesRequest(name :string) {
    let res = await fetch(`https://pokeapi.co/api/v2/move/${name}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => {
        if(response.ok){
            return response.json()
        }
    })

    let move: MovesProps = {
        name: res.name,
        id: res.id,
        accuracy: res.accuracy,
        effect_chance: res.effect_chance,
        pp: res.pp,
        type: res.type.name,
        machines: [],
    }

    return move
}

export default MovesRequest