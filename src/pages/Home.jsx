import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-slate-950 text-white min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-extrabold mb-4 text-amber-500">
        Locação de Carros Importados
      </h1>
      <p className="text-xl text-slate-300 max-w-2xl mb-8">
        Experimente o luxo e a alta performance dos veículos mais cobiçados do mundo.
      </p>
      <Link 
        to="/carros" 
        className="bg-amber-500 text-slate-950 px-8 py-3 rounded-lg font-bold text-lg hover:bg-amber-400 transition"
      >
        Ver Catálogo
      </Link>
    </div>
  );
}