import React, { useEffect, useState } from "react";
import axios from "axios";
import ClipLoader from 'react-spinners/ClipLoader';
import MovieCard from "../components/MovieCard";
import { Movie } from "../interfaces/movie.interface";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const Home: React.FC = () => {
  const { addToCart, removeFromCart } = useCart();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get("https://wefit-movies.vercel.app/api/movies");
        setMovies(response.data.products);

        if (response.data.products.length === 0) {
          navigate("/not-found");
        }
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [navigate]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center h-screen">
          <ClipLoader size={50} color="#ffffff" loading={true} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-dark">
          {movies.map((movie) => (
            <MovieCard 
              key={movie.id} 
              movie={movie}
              onAddToCart={() => addToCart(movie)}
              onRemoveFromCart={() => removeFromCart(movie.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
