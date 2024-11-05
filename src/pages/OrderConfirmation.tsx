import { Link } from "react-router-dom";
import CompraFinalizada from "../assets/Frame 2115.png";

export default function OrderConfirmation() {
  return (
    <div className="h-screen">
      <div className="p-4 text-center bg-white">
        <div className='flex flex-col items-center w-full py-4"'>
          <h2 className="text-2xl">Compra Realizada com Sucesso!</h2>
          <img
            src={CompraFinalizada}
            alt="Sucesso"
            className="mb-4 py-4"
            width={300}
          />
          <Link
            to="/"
            className="w-32 mt-4 px-4 py-2 bg-primary text-white rounded"
          >
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
}
