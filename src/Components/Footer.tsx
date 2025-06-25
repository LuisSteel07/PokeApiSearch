const Footer:React.FC = () => {
    return (
        <footer className="flex flex-col md:flex-row justify-between bg-slate-800 text-white p-4">
            <section className="flex justify-center items-center">
                <h1 className="text-4xl font-bold p-4">PokeApiSearch</h1>
            </section>
            <section className="flex justify-center items-center">
                <p className="text-xl">Creado por: <a href="https://github.com/LuisSteel07" className="text-blue-800 font-bold">LuisSteel07</a></p>
            </section>
        </footer>
    )
}

export default Footer