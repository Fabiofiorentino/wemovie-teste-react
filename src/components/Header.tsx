import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">WeMovie</h1>
      <nav>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}
