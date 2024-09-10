import React from 'react';
import { pegaprodutoporid } from '../../../../../actions/actions';



export default async function visualizarproduto({params}:{params:{id:string}}) {
const id = parseInt(params.id,10)
 const produto=await pegaprodutoporid(id);
 
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0E0B16] p-4 space-y-10">
      <div className="w-full max-w-md bg-[#0E0B16] p-6 rounded-lg border border-gray-700 shadow-lg shadow-gray-800">
        <h1 className="text-3xl font-bold text-white mb-6">visualizarproduto</h1>
      
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="titulo">
              Título
            </label>
            <input
            name="title"
            defaultValue={produto?.title}
              id="title"
              type="text"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="conteudo">
              Conteúdo
            </label>
            <input
            name="description"
              id="description"
              type="text"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
             
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="status">
              preço
            </label>
            <input
            name="price"
            defaultValue={produto?.price}
              id="price"
              type="text"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
             
            />
          </div>
      
      </div>
    </div>
  );
}
