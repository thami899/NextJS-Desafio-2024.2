"use client";

import { useSearchParams } from 'next/navigation';
import React, { use } from 'react';
import { deleteCripto } from '../../../../actions/actions';
import Link from 'next/link';

export default function ExcluirProduto() {
  const searchParams=useSearchParams();
  const params=Object.fromEntries(searchParams.entries());
  const id=Number(params["id"]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0E0B16] p-4 space-y-10">
      <div className="w-full max-w-md bg-[#0E0B16] p-6 rounded-lg border border-gray-700 shadow-lg shadow-gray-800">
        <h1 className="text-3xl font-bold text-white mb-6">Excluir Produto</h1>
          <Link href={"/listadeproduto"}>
          <button
          onClick={()=> deleteCripto(id)}
            className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition-colors"
          >
            Excluir
          </button>
          </Link>
      </div>
    </div>
  );
}
