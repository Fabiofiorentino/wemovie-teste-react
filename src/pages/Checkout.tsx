// src/pages/Checkout.tsx
import { useCart } from '../contexts/CartContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const handleConfirmPurchase = () => {
    clearCart();
    navigate('/order-confirmation');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Revisar Pedido</h2>
      {cartItems.map(item => (
        <div key={item.id} className="mb-2">
          <p>{item.title}</p>
          <p>${item.price}</p>
        </div>
      ))}
      <button
        onClick={handleConfirmPurchase}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Confirmar Compra
      </button>
      <Link to="/cart" className="block mt-4 text-center">
        Voltar ao Carrinho
      </Link>
    </div>
  );
}
