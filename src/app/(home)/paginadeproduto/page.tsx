"use client";

import React, { useEffect, useState } from 'react';
import { Crypto } from '../../../../types/home/home';
import GetCripto from '../../../../actions/actions';

export default function CryptoGemList() {
  const [cryptoGems, setPosts] = useState<Crypto[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    GetCripto().then(setPosts);
  }, []);

  // Filtrar as criptos com base no termo de pesquisa
  const filteredGems = cryptoGems.filter((gem) =>
    gem.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calcula o total de páginas com base nos itens filtrados
  const totalPages = Math.ceil(filteredGems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredGems.slice(startIndex, startIndex + itemsPerPage);

  // Função para alterar a página
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Renderização dos botões de paginação
  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-1 px-3 py-1 rounded-lg ${
            i === currentPage ? 'bg-green-500 text-white' : 'bg-green-300 text-green-800'
          }`}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="bg-[#0E0B16] text-white p-8 rounded-lg max-w-screen-lg mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
        <h2 className="text-2xl mb-4 md:mb-0">Nossas Crypto Gems em Kuinance</h2>
        <input
          type="text"
          placeholder="Pesquisar..."
          className="p-2 rounded-lg text-black w-full md:w-1/3"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reseta para a primeira página ao pesquisar
          }}
        />
      </div>
      <div className="border-4 border-green-700 rounded-lg p-4">
        {currentItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {currentItems.map((gem, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-green-200 text-green-800 rounded-lg border border-green-500">
                <span>{gem.title}</span>
                <span>{gem.price}</span>
              </div>
            ))}
          </div>
        ) : (
          <p>Nenhuma crypto encontrada.</p>
        )}
      </div>

      {/* Paginação */}
      <div className="flex justify-center items-center mt-4 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-green-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Anterior
        </button>

        <div className="flex space-x-1">
          {renderPaginationButtons()}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-green-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
