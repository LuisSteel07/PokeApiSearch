import { useState } from 'react'
import '../css/main.css'

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const searchInput:React.FC<SearchInputProps> = ({ onSearch }) => {
    const [name, setName] = useState("")

    const handleSearch = () => {
        onSearch(name);
    };

    return (
        <section className='flex justify-evenly p-4 gap-4'>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => {setName(e.target.value)}}
                className='bg-slate-600 rounded-2xl p-2 text-white'
                placeholder='Name or ID'
                />
            <button onClick={handleSearch} className='rounded-full bg-blue-500 w-12 h-12 flex items-center justify-center hover:scale-110 hover:bg-blue-700 transition ease-in-out duration-300'>
                <img src="/magnifier.svg" alt="icon" width={30} height={30}/>
            </button>
        </section>
    )
}

export default searchInput