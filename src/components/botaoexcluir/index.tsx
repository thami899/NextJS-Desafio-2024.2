import Link from "next/link"

export default function Excluir({id}:{id:number|undefined}){
    return(
        <Link href={`/excluirproduto?id=${id}`}>
       <button
        className="bg-green-500 text-white px-2 py-1 rounded-lg text-sm md:text-base">  
        Excluir
       </button>
       </Link>
    )
}            
