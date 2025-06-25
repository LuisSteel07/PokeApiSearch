import SearchInput from '../Components/SearchInput';
import { ToastContainer, toast } from 'react-toastify';

import '../css/main.css'
import { useState } from 'react';
import type { MachineProps } from '../Models/MachineProps';
import MachineRequest from '../Requests/MachineRequest';
import Machine from '../Components/Machine';
import Text from '../Components/Text';

const ItemsView:React.FC = () => {
    const [results, setResults] = useState<MachineProps>()

    async function handleSearch(query: string){
        try{
            setResults(await MachineRequest(query))
        }
        catch(Error){
            toast("Machine not found!");
        }
    } 

    return (
        <section className='flex grow flex-col justify-center pt-8 gap-8 h-full'>
            <section className='flex justify-center pt-8'>
                <Text text='En esta seccion podra buscar todo tipo de discos de movimientos, coloque su numero.' />
            </section>
            <section className='flex justify-evenly p-4'>
                <SearchInput onSearch={handleSearch} />
            </section>
            {   
                results != undefined
                    ?
                        <section className='flex justify-center'>
                            <Machine machine={results}/>
                        </section>
                    :
                    <></>
            }
            <ToastContainer theme='dark' />
        </section>
    )
}

export default ItemsView