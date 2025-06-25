import SearchInput from '../Components/SearchInput';
import { ToastContainer, toast } from 'react-toastify';

import '../css/main.css'
import { useState } from 'react';
import type { MovesProps } from '../Models/MovesProps';
import Moves from '../Components/Moves';
import Text from '../Components/Text';
import MovesRequest from '../Requests/MovesRequest';

const MovesView:React.FC = () => {
    const [results, setResults] = useState<MovesProps>()

    async function handleSearch(query: string){
        try{
            setResults(await MovesRequest(query))
        }
        catch(Error){
            toast("Move not found!");
        }
    } 

    return (
        <section className='flex grow flex-col justify-center pt-8 gap-8 h-full'>
            <section className='flex justify-center pt-8'>
                <Text text='En esta seccion podra buscar todo tipo de movimientos, coloque su numero o nombre.' />
            </section>
            <section className='flex justify-evenly p-4'>
                <SearchInput onSearch={handleSearch} />
            </section>
            {   
                results != undefined
                    ?
                        <section className='flex justify-center'>
                            <Moves move={results}/>
                        </section>
                    :
                    <></>
            }
            <ToastContainer theme='dark' />
        </section>
    )
}

export default MovesView