interface CardProps {
    title: string,
    text: string,
    photo?: string,
    url: string,
    bg_color: string
}

const Card:React.FC<CardProps> = ({title, text, photo, url, bg_color}:CardProps) => {
    const class_name = `flex flex-col md:flex-row justify-center items-center rounded-2xl text-white bg-gradient-to-bl ${bg_color} p-4`

    return (
        <a href={url} className="font-bold m-4 text-white transition-all ease-in-out hover:scale-105 w-[700px]">
            <article className={class_name}>
                {
                    photo != null 
                        ?
                        <img src={photo} alt="card image" width={120} />
                        :
                        <></>
                }
                <div className="flex flex-col gap-4 p-2">
                    <h1 className="font-bold text-3xl">{title}</h1>
                    <p>{text}</p>
                </div>
            </article>
        </a>
    )
}

export default Card