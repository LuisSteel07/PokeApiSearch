import { Link } from 'react-router'
import '../css/main.css'

function NavBar(){
    return (
        <nav className="flex w-full bg-slate-700 p-4 justify-between">
            <a href="/" className=''>
                <h1 className='text-white font-bold text-2xl'>PokeApiSearch</h1>
            </a>
            <section className='hidden md:flex gap-4 items-center'>
                <Link to={"/pokemon"}>
                    <p className='text-white font-semibold underline underline-offset-2'>Pokemon</p>
                </Link>
                <Link to={"/items"}>
                    <p className='text-white font-semibold underline underline-offset-2'>Items</p>
                </Link>
                <Link to={"/machines"}>
                    <p className='text-white font-semibold underline underline-offset-2'>Machines</p>
                </Link>
                <Link to={"/move"}>
                    <p className='text-white font-semibold underline underline-offset-2'>Moves</p>
                </Link>
            </section>
        </nav>
    )
}

export default NavBar