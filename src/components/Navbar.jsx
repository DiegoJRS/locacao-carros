import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wider text-amber-500">EXOTIC CARS</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-amber-400 transition">Home</Link>
          <Link to="/carros" className="hover:text-amber-400 transition">Carros</Link>
        </div>
      </div>
    </nav>
  );
}