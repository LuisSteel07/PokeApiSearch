import type { MachineProps } from '../Models/MachineProps';

interface MachineComponentProps {
    machine: MachineProps
}

const Machine: React.FC<MachineComponentProps> = (machine: MachineComponentProps) => {
    const { id, name, move, version} = machine.machine

    return (
        <section className="pt-8 pb-4 flex flex-col bg-slate-700 rounded-2xl justify-center w-[600px]">
            <div className="flex flex-col justify-center items-center p-4">
                <div className='w-full flex items-center gap-8 justify-evenly'>
                    <h1 className="text-white font-bold text-xl">Name: {name}</h1>
                    <h1 className="text-white font-bold text-xl">ID: {id}</h1>
                </div>
                <div className="flex flex-col justify-center m-4">
                    <p className="text-white flex gap-2"><p className='font-bold'>Move:</p> {move}</p>
                    <p className="text-white flex gap-2"><p className='font-bold'>Version:</p> {version}</p>
                </div>
            </div>
        </section>
    )
}

export default Machine