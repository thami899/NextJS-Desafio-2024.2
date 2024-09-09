"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import getApi from '@/api/get-seção';
import Card from '@/components/secaoapi/Card';

  type getApi = {
    id : number,
    title: string,
    text : string,
    
    }
    export default function Home() {
      const [cards,setCards] = useState<getApi[]>([]);
      useEffect(()=> {
        const data= async () => {
          try {
            const {identities}= await getApi();
            setCards(identities);
          } catch {
            console.error('erro');
          }
        };
        data();
      });
      const router = useRouter();
    
    
  const handleButtonClick = () => {
    router.push('/login'); // Substitua '/login' pelo caminho correto da sua página de login
  };

  return (
    <main className="flex flex-col min-h-screen px-4">
      {/* Seção Principal */}
      <section className="relative flex flex-col lg:flex-row items-center py-20">
        {/* Imagem Destaque */}
        
        {/* Conteúdo da Seção Principal */}
        <div className="flex flex-col items-start space-y-4 w-full max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold">Encontre o próximo Crypto Gem em Kuinance</h1>
          <p className="text-lg">E-mail/número de telefone</p>
          
          {/* Barra de Pesquisa */}
          <input 
            type="text" 
            placeholder="Digite seu e-mail ou número de telefone" 
            className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-md text-black"
          />
          <button 
            className="bg-green-500 text-black py-2 px-6 rounded-[20px]"
            onClick={handleButtonClick}
          >
            Inscreva-se agora
          </button>
        </div>
      </section>

      {/* Mercado Criptográfico Hoje */}
      <section className="py-10">
        <h2 className="text-2xl font-bold mb-6">Mercado Criptográfico Hoje</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="publication-card bg-white text-black p-6 rounded-lg shadow-lg flex flex-col space-y-4">
            <h3 className="text-xl font-bold">Destaques</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between">
                <span>MANA</span>
                <span>$0,35871342</span>
              </div>
              <div className="flex justify-between">
                <span>Decentraland</span>
                <span className="text-green-400">+6,04%</span>
              </div>
              <div className="flex justify-between">
                <span>ICP</span>
                <span>$10,16</span>
              </div>
              <div className="flex justify-between">
                <span>Internet Computer</span>
                <span className="text-green-400">+4,33%</span>
              </div>
              <div className="flex justify-between">
                <span>KCS</span>
                <span>$9,88</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="publication-card bg-white text-black p-6 rounded-lg shadow-lg flex flex-col space-y-4">
            <h3 className="text-xl font-bold">Novas Moedas</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between">
                <span>BANANA</span>
                <span>$72,21</span>
              </div>
              <div className="flex justify-between">
                <span>Banana</span>
                <span className="text-green-400">+36,2%</span>
              </div>
              <div className="flex justify-between">
                <span>ANYONE</span>
                <span>$1,43</span>
              </div>
              <div className="flex justify-between">
                <span>ANyONe Protocol</span>
                <span className="text-green-400">+7,23%</span>
              </div>
              <div className="flex justify-between">
                <span>UXLINK</span>
                <span>$0,24549816</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="publication-card bg-white text-black p-6 rounded-lg shadow-lg flex flex-col space-y-4">
            <h3 className="text-xl font-bold">Maiores Ganhos</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between">
                <span>TRIBL</span>
                <span>$0,81812712</span>
              </div>
              <div className="flex justify-between">
                <span>Tribal Token</span>
                <span className="text-green-400">+42,44%</span>
              </div>
              <div className="flex justify-between">
                <span>ORDI</span>
                <span>$39,4</span>
              </div>
              <div className="flex justify-between">
                <span>Ordinals</span>
                <span className="text-green-400">+6,05%</span>
              </div>
              <div className="flex justify-between">
                <span>SOL</span>
                <span>$169,53</span>
              </div>
            </div>
          </div>
        </div>
      </section> 

      {/* Chamada para Ação */}
      <section className="py-10 bg-white w-full text-center">
        <h2 className="text-2xl font-bold mb-4 text-black">Comece sua jornada criptográfica agora!</h2>
        <button 
          className="bg-green-500 text-black py-2 px-6 rounded-[20px]"
          onClick={handleButtonClick}
        >
          Inscreva-se agora
        </button>
      </section>

      {/* Produtos e Serviços */}
      <section className="py-10">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6 text-center">Produtos e Serviços</h2>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full">
            <div className="flex-shrink-0 w-full lg:w-1/3 flex items-center justify-center">
              <Image src="/celular.svg" alt="Descrição da Imagem" width={400} height={400} className="object-cover rounded-[12px] shadow-lg" />
            </div>
            <div className="w-full lg:w-2/3 flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                <div className="publication-card bg-white p-4 rounded-[12px] shadow-lg flex flex-col items-center justify-center h-28 w-full">
                  <h3 className="text-lg font-bold mb-2 text-center">KuCoin Earn</h3>
                  <p className="text-sm text-center">Invista e ganhe uma renda estável com a ajuda de um gestor de ativos profissional.</p>
                </div>
                <div className="publication-card bg-white p-4 rounded-[12px] shadow-lg flex flex-col items-center justify-center h-28 w-full">
                  <h3 className="text-lg font-bold mb-2 text-center">Bot de Negociação</h3>
                  <p className="text-sm text-center">Ganhe renda passiva 24 horas por dia sem ter que monitorar constantemente os mercados.</p>
                </div>
                <div className="publication-card bg-white p-4 rounded-[12px] shadow-lg flex flex-col items-center justify-center h-28 w-full">
                  <h3 className="text-lg font-bold mb-2 text-center">Negociação à Vista</h3>
                  <p className="text-sm text-center">Negocie criptos com nosso conjunto abrangente de ferramentas poderosas para maximizar seus lucros.</p>
                </div>
                <div className="publication-card bg-white p-4 rounded-[12px] shadow-lg flex flex-col items-center justify-center h-28 w-full">
                  <h3 className="text-lg font-bold mb-2 text-center">Comprar Cripto</h3>
                  <p className="text-sm text-center">Compre criptos de forma rápida e fácil em nossa plataforma popular e líder do setor.</p>
                </div>
                <div className="publication-card bg-white p-4 rounded-[12px] shadow-lg flex flex-col items-center justify-center h-28 w-full">
                  <h3 className="text-lg font-bold mb-2 text-center">Derivativos de Cripto</h3>
                  <p className="text-sm text-center">Somos a melhor exchange de criptos para negociação de futuros de criptos.</p>
                </div>
                <div className="publication-card bg-white p-4 rounded-[12px] shadow-lg flex flex-col items-center justify-center h-28 w-full">
                  <h3 className="text-lg font-bold mb-2 text-center">GemSPACE</h3>
                  <p className="text-sm text-center">Descubra novas moedas com potencial significativo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Valores e Visão */}
       <section className="py-10 bg-[#0E0B16]-100">
        <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6 text-white">Nossa Missão, Valores e Visão</h2>
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          {(cards.map((card,index)=> (
            <Card id={card.id} title={card.title} text={card.text} key={index}/>
            
          )))

          }
          </div> 
        </div>
      </section>
    </main>
  );
}
