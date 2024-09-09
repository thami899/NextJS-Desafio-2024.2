import Link from "next/link"

export default function Adicionar({id}:{id:number|undefined}){
    return(
        <Link href={`/criarproduto`}>
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded-lg">
          + Adicionar
        </button>
        </Link>
    )
}