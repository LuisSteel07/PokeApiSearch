import SearchInput from '../Components/SearchInput';
import { ToastContainer, toast } from 'react-toastify';

import '../css/main.css'
import type { ItemsProps } from '../Models/ItemsProps';
import { useState } from 'react';
import ItemRequest from '../Requests/ItemRequest';
import Item from '../Components/Item';

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
        <>
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
        </>
    )
}

export default ItemsView