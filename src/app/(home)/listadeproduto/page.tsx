import React from 'react';
import Tabela from '@/components/tabela/index';
import { Naoageuntomaisprodutos } from '../../../../actions/actions';
type produtoProp={
  searchParams:{
    page?:string,
  }
}
export default async function Page({searchParams}:produtoProp){
const currentPage=Number(searchParams?.page)||1;
const {produtos,totalPages}=await Naoageuntomaisprodutos(currentPage);
  return (
    <Tabela currentPage={currentPage} produtos={produtos} totalPages={totalPages}/>
  );
};

