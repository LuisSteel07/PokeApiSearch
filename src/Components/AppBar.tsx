import { Link } from 'react-router'
import '../css/main.css'

function AppBar(){
    return (
        <nav className="flex w-full bg-slate-700 p-4 m-0 justify-between">
            <h1 className='text-white font-bold text-2xl'>PokeApiSearch</h1>
            <section className='flex gap-4 items-center'>
                <Link to={"/"}>
                    <p className='text-white font-semibold underline underline-offset-2'>Pokemon</p>
                </Link>
                <Link to={"/items"}>
                    <p className='text-white font-semibold underline underline-offset-2'>Items</p>
                </Link>
                <Link to={"/"}>
                    <p className='text-white font-semibold underline underline-offset-2'>Machines</p>
                </Link>
                <Link to={"/"}>
                    <p className='text-white font-semibold underline underline-offset-2'>Moves</p>
                </Link>
            </section>
        </nav>
    )
}

export default AppBar