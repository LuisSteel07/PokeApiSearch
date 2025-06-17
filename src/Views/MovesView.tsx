import SearchInput from '../Components/SearchInput';
import { ToastContainer, toast } from 'react-toastify';

import '../css/main.css'
import { useState } from 'react';
import type { MovesProps } from '../Models/MovesProps';
import Moves from '../Components/Moves';
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
        <>
        <section className='flex justify-center pt-8'>
                <p>En esta seccion podra buscar todo tipo de movimientos, coloque su numero o nombre.</p>
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
        </>
    )
}

export default MovesView