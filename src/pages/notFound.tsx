import { useNavigate } from "react-router-dom";
import notFound from "../assets/Frame 2111.png";

export default function OrderConfirmed() {
  const navigate = useNavigate();

  return (
    <div className="h-screen">
      <div className="p-4 text-center bg-white">
        <div className="flex flex-col items-center w-full py-4">
          <h2 className="text-2xl">Parece que não há nada por aqui :(</h2>
          <img
            src={notFound}
            alt="Não encontrado"
            width={400}
            className="mb-4 py-4"
          />
          <button
            onClick={() => navigate("/")}
            className="w-48 mt-4 px-4 py-2 bg-primary text-white rounded"
          >
            Recarregar Página
          </button>
        </div>
      </div>
    </div>
  );
}
