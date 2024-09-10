import Link from "next/link";

export default function Visualizar({id}:{id:number|undefined}){
    return(
        <Link href={`/visualizarproduto/${id}`}>
        <button    
        className="bg-green-500 text-white px-2 py-1 rounded-lg text-sm md:text-base">
        Visualizar
        </button>
        </Link>
            
    )
}

