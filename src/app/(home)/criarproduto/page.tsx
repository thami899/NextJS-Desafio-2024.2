"use client";

import React from 'react';
import { criarCripto } from '../../../../actions/actions';

export default function CriarProduto() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0E0B16] p-4 space-y-10">
      <div className="w-full max-w-md bg-[#0E0B16] p-6 rounded-lg border border-gray-700 shadow-lg shadow-gray-800">
        <h1 className="text-3xl font-bold text-white mb-6">Criar produto</h1>
        <form action={criarCripto}>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="titulo">
              Título
            </label>
            <input
            name="title"
              id="title"
              type="text"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Digite o título"
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
              placeholder="Digite o conteúdo"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="status">
              preco
            </label>
            <input
            name="price"
              id="price"
              type="text"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Digite o preco"
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
