'use client'
import { Product } from '@prisma/client';
import React, { useState, useEffect } from 'react';
import { editarCripto } from '../../../../../actions/actions';

export default function EditarProduto({ produto }: { produto: Product | null }) {
  // Verificação de produto
  console.log('Produto recebido:', produto);

  // Inicializando os estados
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  // Usando useEffect para carregar os dados do produto quando disponível
  useEffect(() => {
    if (produto) {
      setTitle(produto.title || '');
      setDescription(produto.description || '');
      setPrice(produto.price?.toString() || '');
    }
  }, [produto]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);

    await editarCripto(produto?.id, formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0E0B16] p-4 space-y-10">
      <div className="w-full max-w-md bg-[#0E0B16] p-6 rounded-lg border border-gray-700 shadow-lg shadow-gray-800">
        <h1 className="text-3xl font-bold text-white mb-6">Editar produto</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="titulo">
              Título
            </label>
            <input
              type="text"
              name="title"
              value={title} // Usando o estado controlado
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="conteudo">
              Conteúdo
            </label>
            <input
              name="description"
              value={description} // Usando o estado controlado
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              type="text"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="price">
              Preço
            </label>
            <input
              name="price"
              value={price} // Usando o estado controlado
              onChange={(e) => setPrice(e.target.value)}
              id="price"
              type="text"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition-colors"
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}
