import type { MachineProps } from "../Models/MachineProps"

async function MachineRequest(name: string){
    let res = await fetch(`https://pokeapi.co/api/v2/machine/${name}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => {
        if(response.ok){
            return response.json()
        }
    })

    const machine: MachineProps = {
        id: res.id,
        name: res.item.name,
        move: res.move.name,
        version: res.version_group.name
    }

    return machine
}

export default MachineRequest