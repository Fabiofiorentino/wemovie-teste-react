"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ClipLoader from 'react-spinners/ClipLoader';
import MovieCard from "../components/MovieCard";
import { Movie } from "../interfaces/movie.interface";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Define navigate

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get("https://wefit-movies.vercel.app/api/movies");
        setMovies(response.data.products);

        if (response.data.products.length === 0) {
          navigate("/not-found"); // Use navigate instead of router.push
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
        <div className="flex justify-center items-center h-full">
          <ClipLoader size={50} color="#ffffff" loading={true} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-slate-900">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
