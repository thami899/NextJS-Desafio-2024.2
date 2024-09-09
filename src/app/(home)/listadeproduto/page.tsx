"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Adicionar from '@/components/botaoadicionar';
import Visualizar from '@/components/botaovisualizar';
import Editar from '@/components/botaoeditar';
import ExcluirProduto from '../excluirproduto/page';
import Excluir from '@/components/botaoexcluir';

const ProductList = () => {
  const produtos = [
    { id: 1, nome: 'MANA', preco: '$0,35871342', descricao: 'Decentraland' },
  { id: 2, nome: 'ICP', preco: '$10,16', descricao: 'Internet Computer' },
  { id: 3, nome: 'KCS', preco: '$9,88', descricao: 'KuCoin Token' },
  { id: 4, nome: 'ORDI', preco: '$39,4', descricao: 'Ordinals' },
  { id: 5, nome: 'SOL', preco: '$169,53', descricao: 'Solana' },
  ];

  const router = useRouter();


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
                <td className="p-2 text-sm md:text-base">{produto.nome}</td>
                <td className="p-2 text-sm md:text-base">{produto.preco}</td>
                <td className="p-2 text-sm md:text-base">{produto.descricao}</td>
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

export default ProductList;
