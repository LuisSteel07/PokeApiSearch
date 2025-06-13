import { type PokemonProps } from '../Models/PokemonProps';
import colorsPokemon from '../Models/colorsPokemon';

function createTicketType(type: string) {
  const color = colorsPokemon[type.toLowerCase()] || "#A8A77A";

  return (
    <p className={`bg-[${color}] rounded-2xl m-2 text-white font-semibold w-24 text-center`}>
      {type}
    </p>
  );
}

interface PokemonComponentProps {
    pokemon: PokemonProps
}

const Pokemon: React.FC<PokemonComponentProps> = (pokemon: PokemonComponentProps) => {
    const {name, id, weight, height, types, photo, cries} = pokemon.pokemon

    return (
        <section className="flex flex-col bg-slate-700 rounded-2xl justify-center w-[450px]">
            <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center">
                    <h1 className="text-white font-bold text-2xl">Name: {name}</h1>
                    <p className="text-white font-semibold">ID: {id}</p>
                    <p className="text-white font-semibold">Weight: {weight}kg</p>
                    <p className="text-white font-semibold">Height: {height}m</p>
                    <p className="text-white font-semibold">Types: </p>
                    {   
                        types.map(e => createTicketType(e))
                    }
                </div>
                <img src={photo} alt="Pokemon photo" className="w-[200px]"/>
            </div>
            <audio src={cries} autoPlay></audio>
        </section>
    )
}

export default Pokemon