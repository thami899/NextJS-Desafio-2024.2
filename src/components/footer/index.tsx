const Footer = () => {
  return (
    <footer className="footer p-6 mt-8 bg-gray-800 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-bold mb-2 text-lg">Produtos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Serviços</a></li>
              <li><a href="#" className="hover:underline">Comunidade</a></li>
              <li><a href="#" className="hover:underline">Exchange</a></li>
              <li><a href="#" className="hover:underline">Downloads</a></li>
              <li><a href="#" className="hover:underline">Compre Cripto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-lg">Aplicativo</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Aplicativo de Desktop</a></li>
              <li><a href="#" className="hover:underline">Pay</a></li>
              <li><a href="#" className="hover:underline">Indicação</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-lg">Academy</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Trading OTC</a></li>
              <li><a href="#" className="hover:underline">Live</a></li>
              <li><a href="#" className="hover:underline">BNB</a></li>
              <li><a href="#" className="hover:underline">Tax</a></li>
              <li><a href="#" className="hover:underline">Dados Históricos de Mercado</a></li>
              <li><a href="#" className="hover:underline">Proof of Reserves</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-lg">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Preferências de Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6">
          <p>&copy; {new Date().getFullYear()} Kuinance. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
