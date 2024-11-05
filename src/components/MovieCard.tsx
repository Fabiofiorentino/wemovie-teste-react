import React, { useState } from 'react';
import { Movie } from '../interfaces/movie.interface';
import { FaCartPlus } from "react-icons/fa";
import { useCart } from '../contexts/CartContext';
import { formatPrice } from '../utils/currencyFormatter';


interface MovieCardProps {
  movie: Movie;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onAddToCart, onRemoveFromCart }) => {
  const { cartItems } = useCart();
  const [cartCount, setCartCount] = useState(0); 
  const [buttonColor, setButtonColor] = useState("bg-primary");

  const handleAddToCart = () => {
    if(cartCount !== 1){
      onAddToCart()
      
    } else {
      onRemoveFromCart()
    }
    setCartCount(cartCount === 0 ? 1 : 0);
    setButtonColor(buttonColor === "bg-primary" ? "bg-success" : "bg-primary")

  };

  return (
    <div className="bg-white p-4 shadow rounded flex flex-col items-center">
      <img src={movie.image} alt={movie.title} className="w-32 object-cover mb-4" />
      <h3 className="text-sm font-semibold text-center">{movie.title}</h3>
      <p className="text-gray-700 font-bold text-center text-lg">{formatPrice(movie.price)}</p>
      <button
        onClick={() => handleAddToCart()}
        className={`w-full mt-2 px-4 py-2 ${buttonColor} text-white rounded flex items-center justify-center`}
      >
        <FaCartPlus className="mr-2" /> 
        {cartCount} Adicionar ao carrinho
      </button>
    </div>
  );
};

export default MovieCard;
