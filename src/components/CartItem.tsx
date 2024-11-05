import { FaTrash } from "react-icons/fa";
import { Movie } from "../interfaces/movie.interface";
import { formatPrice } from "../utils/currencyFormatter";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import { useState } from "react";

interface CartItemProps {
  movie: Movie;
  onRemove: () => void;
  setTotal: (total: number) => void;
  total: number;
}

export default function CartItem({ movie, onRemove, setTotal, total }: CartItemProps) {
  const [ quantity, setQuantity ] = useState(1)

  const handleDecrement = () => {
    setQuantity(quantity - 1)
    setTotal(total - movie.price)
  }

  const handleIncrement = () => {
    setQuantity(quantity + 1)
    setTotal(total + movie.price)
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4 items-center text-center">
      <div className="flex flex-row items-center justify-center">
      <img src={movie.image} alt={movie.title} className="w-24 mb-4" />
      <div className="flex-1 ml-4">
        <p className="font-semibold">{movie.title}</p>
        <p className="text-gray-500">{formatPrice(movie.price)}</p>
      </div>
      </div>
      <div className="flex items-center justify-center space-x-2">

      <button >
          <BiMinusCircle onClick={handleDecrement} className="text-cyan-600 size-6" />
        </button>
        <input
          min="1"
          value={quantity}
          className="w-12 text-center border rounded"
        />
        <button>
          <BiPlusCircle onClick={handleIncrement} className="text-cyan-600 w-18 size-6"/>
        </button>
      </div>
      <div className="flex justify-center">
        <p className="text-sm font-semibold">
          {formatPrice(movie.price)}
        </p>
      </div>
      <div className="flex justify-center">
        <button>
          <FaTrash onClick={onRemove} className="text-primary" />
        </button>
      </div>
    </div>
  );
}
