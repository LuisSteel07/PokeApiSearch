import type { ItemsProps } from '../Models/ItemsProps';

function createAttributes(type: string) {
    return (
        <li className="rounded-2xl m-2 text-white font-semibold">
            {type}
        </li>
    );
}

interface ItemsComponentProps {
    item: ItemsProps
}

const Item: React.FC<ItemsComponentProps> = (item: ItemsComponentProps) => {
    const { name, photo, effect, category, attributes} = item.item

    return (
        <section className="pt-8 pb-4 flex flex-col bg-slate-700 rounded-2xl justify-center w-[600px]">
            <div className="flex flex-col justify-center items-center p-4">
                <div className='w-full flex items-center gap-8 justify-evenly'>
                    <h1 className="text-white font-bold text-xl">Name: {name}</h1>
                    <img src={photo} alt="Item photo" className="w-[80px]"/>
                </div>
                <div className="flex flex-col justify-center m-4">
                    <p className="text-white flex gap-2"><p className='font-bold'>Effect:</p> {effect}</p>
                    <p className="text-white flex gap-2"><p className='font-bold'>Category:</p> {category}</p>
                    <p className="text-white font-semibold">Types: </p>
                    {   
                        attributes.map(e => createAttributes(e))
                    }
                </div>
            </div>
        </section>
    )
}

export default Item