import Link from "next/link"

export default function Adicionar(){
    return(
        <Link href={`/criarproduto`}>
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded-lg">
          + Adicionar
        </button>
        </Link>
    )
}