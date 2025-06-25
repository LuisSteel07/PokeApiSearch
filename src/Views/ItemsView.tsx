import SearchInput from '../Components/SearchInput';
import { ToastContainer, toast } from 'react-toastify';

import '../css/main.css'
import type { ItemsProps } from '../Models/ItemsProps';
import { useState } from 'react';
import ItemRequest from '../Requests/ItemRequest';
import Item from '../Components/Item';
import Text from '../Components/Text';

const ItemsView:React.FC = () => {
    const [results, setResults] = useState<ItemsProps>()

    async function handleSearch(query: string){
        try{
            setResults(await ItemRequest(query))
        }
        catch(Error){
            toast("Item not found!");
        }
    } 

    return (
        <section className='flex grow flex-col justify-center pt-8 gap-8 h-full'>
            <section className='flex justify-center pt-8'>
                <Text text='En esta seccion podra buscar todo tipo de items, coloque su nombre o numero.' />
            </section>
            <section className='flex justify-evenly p-4'>
                <SearchInput onSearch={handleSearch} />
            </section>
            {   
                results != undefined
                    ?
                        <section className='flex justify-center'>
                            <Item item={results}/>
                        </section>
                    :
                    <></>
            }
            <ToastContainer theme='dark' />
        </section>
    )
}

export default ItemsView