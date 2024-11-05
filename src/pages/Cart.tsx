import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Carrinho</h2>
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <CartItem
            key={item.id}
            movie={item}
            onRemove={removeFromCart}
          />
        ))
      ) : (
        <p>Seu carrinho está vazio.</p>
      )}
      <Link to="/checkout" className="mt-4 block text-center bg-green-500 text-white py-2">
        Finalizar Compra
      </Link>
    </div>
  );
}
