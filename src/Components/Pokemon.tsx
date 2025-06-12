import { type PokemonProps } from '../Models/PokemonProps';

const Pokemon: React.FC<PokemonProps> = ({name, id, weight, height, photo, cries, types}) => {
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
                        types.map(e => {
                            switch(e){
                                case "normal":
                                    return <p className="bg-[#A8A77A] rounded-2xl m-2 text-white font-semibold w-24 text-center">{e}</p>;
                                case "fire":
                                    return <p className="bg-[#EE8130] rounded-2xl m-2 text-white font-semibold w-24 text-center">{e}</p>;
                                case "water":
                                    return <p className="bg-[#6390F0] rounded-2xl m-2 text-white font-semibold w-24 text-center">{e}</p>;
                                case "electric":
                                    return <p className="bg-[#F7D02C] rounded-2xl m-2 text-white font-semibold w-24 text-center">{e}</p>;
                                case "grass":
                                    return <p className="bg-[#7AC74C] rounded-2xl m-2 text-white font-semibold w-24 text-center">{e}</p>;
                                case "ice":
                                    return <p className="bg-[#96D9D6] rounded-2xl m-2 text-white font-semibold w-24 text-center">{e}</p>;
                                case "fighting":
                                    return <p className="bg-[#C22E28] rounded-2xl m-2 text-white font-semibold w-24 text-center">{e}</p>;
                                case "poison":
                                    return <p className="bg-[#A33EA1] rounded-2xl m-2 text-white font-semibold w-24 text-center">{e}</p>;
                                case "ground":
                                    return <p className="bg-[#E2BF65] rounded-2xl m-2 text-white font-semibold w-24 text-center">{e}</p>;
                                case "flying":
                                    return <p className="bg-[#A98FF3] rounded-2xl m-2 text-white font-semibold w-24 text-center">{e}</p>;
                                case "psychic":
                                    return <p className="bg-[#F95587] rounded-2xl m-2 text-white font-semibold w-24 text-center">{e}</p>;
                                case "bug":
                                    return <p className="bg-[#A6B91A] rounded-2xl m-2 text-white font-semibold w-24 text-center">{e}</p>;
                                case "rock":
                                    return <p className="bg-[#B6A136] rounded-2xl m-2 text-white font-semibold w-24 text-center">{e}</p>;
                                case "ghost":
                                    return <p className="bg-[#735797] rounded-2xl m-2 text-white font-semibold w-24 text-center">{e}</p>;
                                case "dragon":
                                    return <p className="bg-[#6F35FC] rounded-2xl m-2 text-white font-semibold w-24 text-center">{e}</p>;
                                case "dark":
                                    return <p className="bg-[#705746] rounded-2xl m-2 text-white font-semibold w-24 text-center">{e}</p>;
                                case "steel":
                                    return <p className="bg-[#B7B7CE] rounded-2xl m-2 text-white font-semibold w-24 text-center">{e}</p>;
                                case "fairy":
                                    return <p className="bg-[#D685AD] rounded-2xl m-2 text-white font-semibold w-24 text-center">{e}</p>;
                            }
                        })
                    }
                </div>
                <img src={photo} alt="Pokemon photo" className="w-[200px]"/>
            </div>
            <audio src={cries} autoPlay></audio>
        </section>
    )
}

export default Pokemon