import React from 'react';
import { useCart } from '../contexts/CartContext';

interface MovieCardProps {
  movie: {
    id: string;
    title: string;
    price: number;
    image: string;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 bg-dark text-gray_light">
      <img src={movie.image} alt={movie.title} className="w-full h-40 object-cover mb-2" />
      <h3 className="text-lg font-bold">{movie.title}</h3>
      <p className="text-primary">${movie.price}</p>
      <button
        onClick={() => addToCart(movie)}
        className="mt-2 bg-primary text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default MovieCard;
