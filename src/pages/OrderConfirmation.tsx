// src/pages/OrderConfirmation.tsx
import { Link } from 'react-router-dom';

export default function OrderConfirmation() {
  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold mb-4">Compra Realizada com Sucesso!</h2>
      <p>Obrigado por sua compra.</p>
      <Link to="/" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">
        Voltar para a Home
      </Link>
    </div>
  );
}
