import type { ItemsProps } from "../Models/ItemsProps"
import type { attributesType } from "../Models/attributesType"

async function ItemRequest(name :string) {
    let res = await fetch(`https://pokeapi.co/api/v2/item/${name}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => {
        if(response.ok){
            return response.json()
        }
    })

    let attributes: Array<string> = []

    res.attributes.map((e: attributesType) => {
        attributes.push(e.name)
    })

    let item: ItemsProps = {
        name: res.name,
        effect: res.effect_entries[0].effect,
        photo: res.sprites.default,
        attributes: attributes,
        category: res.category.name
    }

    return item

}

export default ItemRequest