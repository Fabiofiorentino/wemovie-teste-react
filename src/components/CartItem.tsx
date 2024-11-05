import { Movie } from "../interfaces/movie.interface";

interface CartItemProps {
  movie: Movie;
  onRemove: (id: string) => void;
}

export default function CartItem({ movie, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center justify-between border-b py-2">
      <img src={movie.image} alt={movie.title} className="w-12 h-12" />
      <div className="flex-1 ml-4">
        <p className="font-semibold">{movie.title}</p>
        <p className="text-gray-500">${movie.price}</p>
      </div>
      <button
        onClick={() => onRemove(movie.id)}
        className="text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  );
}
