import React from 'react';
import Image from 'next/image';
// Remova ou comente a linha abaixo, onde o Footer é importado
// import Footer from '../../../components/footer'; 

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Seção da Imagem e Apresentação */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="hidden lg:flex lg:w-1/2 bg-[#01BC8D] flex-col justify-between p-8">
          <div className="flex justify-between w-full">
            <h1 className="text-3xl font-bold text-black self-start">Kuinance</h1>
          </div>
          <div className="flex justify-center w-full">
            <p className="mt-4 text-xl font-bold text-black">Bem-vindo ao Kuinance</p>
          </div>
          <div className="flex justify-center items-center flex-grow">
            <Image 
              src="/celular.svg" 
              alt="Imagem de um celular"
              width={600}
              height={600}
              className="mb-4"
            />
          </div>
        </div>

        <div className="lg:w-1/2 bg-white flex flex-col justify-center items-center p-8">
          <div className="w-full text-left">
            <h2 className="text-2xl font-bold text-black mt-2 text-center lg:text-left">Inscrever-se</h2>
          </div>
          <form className="w-full max-w-sm mt-4">
            <div className="flex justify-start mb-4">
              <a href="#" className="text-green-500 mr-2">Email</a> 
              <span className="text-gray-500">|</span>
              <a href="#" className="text-gray-700 ml-2">Phone</a>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Senha
              </label>
              <input
                id="password"
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign in
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800" href="#">
                Esqueceu sua senha?
              </a>
            </div>
          </form>
        </div>
      </div>
      {/* Remova ou comente a linha abaixo, onde o Footer é renderizado */}
      {/* <Footer /> */}
    </div>
  );
}
