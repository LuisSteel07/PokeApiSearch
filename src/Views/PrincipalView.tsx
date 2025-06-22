import Card from '../Components/Card'
import '../css/main.css'

function PrincipalView(){
    return (
        <div className='flex flex-col justify-center pt-8 gap-8 h-full'>
            <h1 className='text-4xl font-bold text-center underline'>Puede buscar informacion acerca de</h1>
            <section className='flex flex-wrap gap-8 justify-center'>
                <Card 
                    title='Pokemon' 
                    text='Puedes buscar cualquier tipo de pokemon mostrando sus principales caracteristicas.' 
                    url='/pokemon' 
                    photo='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' 
                    bg_color='from-amber-600 to-orange-900'
                />
                <Card 
                    title='Items' 
                    text='Puedes buscar cualquier tipo de item para saber su efecto y otras caracteristicas.' 
                    url='/items' 
                    photo='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png' 
                    bg_color='from-violet-600 to-pink-900'
                />
                <Card 
                    title='Machines' 
                    text='Puedes buscar las maquinas que pueden enseñar ciertos movimientos.' 
                    url='/machines' 
                    bg_color='from-slate-600 to-gray-900'
                />
                <Card 
                    title='Movimientos' 
                    text='Se mostraran todos los movimientos, con sus tipos y porcentajes.' 
                    url='/move' 
                    bg_color='from-red-600 to-pink-800'
                />
            </section>
        </div>
    )
}

export default PrincipalView