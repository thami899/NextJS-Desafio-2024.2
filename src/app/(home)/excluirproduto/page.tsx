"use client";

import React from 'react';

export default function ExcluirProduto() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0E0B16] p-4 space-y-10">
      <div className="w-full max-w-md bg-[#0E0B16] p-6 rounded-lg border border-gray-700 shadow-lg shadow-gray-800">
        <h1 className="text-3xl font-bold text-white mb-6">Excluir Produto</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="titulo">
              Título
            </label>
            <input
              id="titulo"
              type="text"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Digite o título"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="conteudo">
              Conteúdo
            </label>
            <input
              id="conteudo"
              type="text"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Digite o conteúdo"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="status">
              Status
            </label>
            <input
              id="status"
              type="text"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Digite o status"
              readOnly
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition-colors"
          >
            Excluir
          </button>
        </form>
      </div>
    </div>
  );
}
