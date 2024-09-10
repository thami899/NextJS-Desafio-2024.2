import { Product } from "@prisma/client";
import Adicionar from "../botaoadicionar";
import Visualizar from "../botaovisualizar";
import Editar from "../botaoeditar";
import Excluir from "../botaoexcluir";

export default function Tabela({produtos,totalPages,currentPage}:{produtos:Product[],totalPages:number,currentPage:number}){

    return (
    <div className="bg-[#0E0B16] p-4 rounded-lg max-w-4xl mx-auto mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h2 className="text-2xl text-white mb-2 md:mb-0">Lista de Produtos</h2>
        <Adicionar/>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-white">
          <thead>
            <tr className="bg-green-700 text-left">
              <th className="p-2">Nome do Produto</th>
              <th className="p-2">Preço</th>
              <th className="p-2">Descrição</th>
              <th className="p-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto, index) => (
              <tr key={index} className="border-t border-green-500">
                <td className="p-2 text-sm md:text-base">{produto.title}</td>
                <td className="p-2 text-sm md:text-base">{produto.price}</td>
                <td className="p-2 text-sm md:text-base">{produto.description}</td>
                <td className="p-2 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                <Visualizar id={produto.id}/>
                <Editar id={produto.id}/>
                <Excluir id={produto.id}/>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};