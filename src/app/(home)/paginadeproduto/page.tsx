
import  { Naoageuntomaisprodutos } from '../../../../actions/actions';
import Crypto from '@/components/paginadeproduto';

export default async function CryptoGemList({searchParams}:{searchParams:{page?:string}}) {
const currentPage=Number(searchParams?.page)|| 1;
const {produtos,totalPages}=await Naoageuntomaisprodutos(currentPage);

  return (
   <Crypto produtos={produtos} totalPages={totalPages}/>
  
      
  );
  
}
