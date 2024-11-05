import React from "react";
import { CartProvider } from "./contexts/CartContext";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/notFound";
import OrderConfirmation from "./pages/OrderConfirmation";

const App: React.FC = () => {
  return (
    <CartProvider>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/not-found" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
