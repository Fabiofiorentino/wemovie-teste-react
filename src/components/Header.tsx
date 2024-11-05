import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { FaShoppingBag } from 'react-icons/fa';

export default function Header() {
  const { cartItems } = useCart();
  
  return (
    <header className="bg-dark text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">WeMovie</h1>
      <nav>
        <Link to="/cart" className="flex items-center space-x-2">
        <div className="flex flex-col justify-end">
          <span>Meu Carrinho</span>
          <span className="text-right text-gray-400 rounded-full px-2 py-1 text-xs">
            {cartItems.length} itens
          </span>
        </div>
        <FaShoppingBag size={24} />
        </Link>
      </nav>
    </header>
  );
}
