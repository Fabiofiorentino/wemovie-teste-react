import React from 'react';
import Home from './pages/Home';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Header />
      <Home />
    </CartProvider>
  );
};

export default App;
