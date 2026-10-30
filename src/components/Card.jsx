export default function Card({ nome, marca, preco, imagem }) {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 border border-slate-700 text-white">
      <img src={imagem} alt={nome} className="w-full h-48 object-cover" />
      <div className="p-5">
        <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">{marca}</span>
        <h3 className="text-xl font-bold mt-1 mb-2">{nome}</h3>
        <p className="text-slate-300 font-medium text-lg">R$ {preco} <span className="text-sm font-normal text-slate-400">/ dia</span></p>
        <button className="mt-4 w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2 rounded-lg transition">
          Alugar Agora
        </button>
      </div>
    </div>
  );
}