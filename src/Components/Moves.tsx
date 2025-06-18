import type { MovesProps } from '../Models/MovesProps';
import colorsPokemon from '../Models/colorsPokemon';

function createTicketType(type: string) {
    const color = colorsPokemon[type.toLowerCase()] || "#A8A77A";
    return (
        <p style={{background: color}} className="rounded-2xl m-2 text-white font-semibold w-24 text-center">
            {type}
        </p>
    );
}

interface MovesComponentProps {
    move: MovesProps
}

const Moves: React.FC<MovesComponentProps> = (move: MovesComponentProps) => {
    const {name, id, pp, accuracy, effect_chance, machines, type} = move.move    

    return (
        <section className="pt-8 pb-4 flex flex-col bg-slate-700 rounded-2xl justify-center w-[450px]">
            <div className="flex justify-center items-center p-4">
                <div className="flex flex-col justify-center">
                    <h1 className="text-white font-bold text-xl">Name: {name}</h1>
                    <p className="text-white font-semibold">ID: {id}</p>
                    <p className="text-white font-semibold">PP: {pp}</p>
                    <p className="text-white font-semibold">Accuracy: {accuracy}</p>
                    <p className="text-white font-semibold">Effect Chance: {effect_chance}</p>
                    <p className="text-white font-semibold">Machines:</p>
                    {
                        machines.map((e: string) => {
                            return <p className="text-white font-semibold">{e}</p>
                        })
                    }
                    <p className="text-white font-semibold">Types: </p>
                    {   
                        createTicketType(type)
                    }
                </div>
            </div>
        </section>
    )
}

export default Moves