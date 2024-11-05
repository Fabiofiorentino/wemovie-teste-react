'use client'
import { createContext, useContext, useState, ReactNode } from 'react';
import { Movie } from '../interfaces/movie.interface';

interface CartContextType {
  cartItems: Movie[];
  addToCart: (movie: Movie) => void;
  removeFromCart: (movieId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Movie[]>([]);

  //Função para adicionar no carrinho
  const addToCart = (movie: Movie) => {
    setCartItems((prevItems) => [...prevItems, movie]);
  };

  //Função para remover do carrinho
  const removeFromCart = (movieId: string) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== movieId));
  };

  //Função para limpar o carrinho
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
