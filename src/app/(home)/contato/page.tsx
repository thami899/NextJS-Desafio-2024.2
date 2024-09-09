"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log({ nome, email, telefone, mensagem });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contato</h1>
      <p className="mb-4 font-bold text-[#01BC8D]">Contate a Kuinance</p>
      
      <div className="grid grid-cols-1 gap-4 border border-green-700 rounded-lg p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-[#01BC8D]">Nome</label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-1 focus:ring-[#01BC8D] sm:text-sm"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#01BC8D]">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-1 focus:ring-[#01BC8D] sm:text-sm"
              placeholder="Seu email"
            />
          </div>
          <div>
            <label htmlFor="telefone" className="block text-sm font-medium text-[#01BC8D]">Telefone</label>
            <input
              id="telefone"
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-1 focus:ring-[#01BC8D] sm:text-sm"
              placeholder="Seu telefone"
            />
          </div>
          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium text-[#01BC8D]">Mensagem</label>
            <textarea
              id="mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-1 focus:ring-[#01BC8D] sm:text-sm"
              rows={4}
              placeholder="Sua mensagem"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-[#01BC8D] text-white border border-[#01BC8D] rounded-md shadow-sm hover:bg-[#019b80] focus:outline-none focus:ring-2 focus:ring-[#01BC8D]"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
