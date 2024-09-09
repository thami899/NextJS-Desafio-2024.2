type Card = {
    id: number,
    title: string,
    text: string
}

export default function Card({id, title, text}:Card){
    return(
        <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/3">
        <h3 className="text-xl font-bold mb-4 text-black">{title}</h3>
        <p className="text-sm text-black">{text}</p>
      </div>
    )
}