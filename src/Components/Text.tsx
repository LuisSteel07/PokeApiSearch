interface TextProps{
    text: string
}

const Text:React.FC<TextProps> = ({text}: TextProps) => {
    return (
        <p className="font-medium text-xl text-black">{text}</p>
    )
}

export default Text