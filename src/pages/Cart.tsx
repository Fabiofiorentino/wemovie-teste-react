import { useCart } from "../contexts/CartContext";
import CartItem from "../components/CartItem";
import { Link, useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/currencyFormatter";
import { useState } from "react";

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);
  const [total, setTotal] = useState(totalAmount);

  //Componente caso não tenha nenum item adicionado no carrinho
  if (cartItems.length === 0) {
    return (
      <div className="h-screen">
        <div className="p-4 text-center bg-white">
          <h2 className="text-2xl">Seu carrinho está vazio</h2>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Voltar para a Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <div className="p-4 bg-white rounded">
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 p-4">
          <h2 className="text-2xl mb-4 text-14 font-semibold text-gray-400 text-center">
            PRODUTO
          </h2>
          <h2 className="text-2xl mb-4 text-14 font-semibold text-gray-400 text-center">
            QTD
          </h2>
          <h2 className="text-2xl mb-4 text-14 font-semibold text-gray-400 text-center">
            SUBTOTAL
          </h2>
          <h2 className="text-2xl mb-4">{/* remove button */}</h2>
        </div>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            movie={item}
            total={total}
            onRemove={() => removeFromCart(item.id)}
            setTotal={(total) => setTotal(total)}
          />
        ))}
        <div className="text-right mt-4 flex justify-between border-slate-400 border-t-2 ">
            <Link to="/order-confirmation">
          <button className="mt-2 px-4 py-2 bg-primary text-white rounded">
            Finalizar Pedido
          </button>
            </Link>
          <div className="flex items-center">
            <p className="text-sm text-gray-500 mr-2 font-semibold">Total</p>
            <p className="text-lg font-semibold"> {formatPrice(total)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
