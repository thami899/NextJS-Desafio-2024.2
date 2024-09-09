import Link from "next/link";

export default function Editar({id}:{id:number|undefined}){
    return(
        <Link href={`/editarproduto`}>
       <button
        className="bg-green-500 text-white px-2 py-1 rounded-lg text-sm md:text-base">  
        Editar
       </button>
       </Link>
    )
}            

