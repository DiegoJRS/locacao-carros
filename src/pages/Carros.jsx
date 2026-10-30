import Card from '../components/Card';

const carrosImportados = [
  {
    id: 1,
    nome: '911 GT3 RS',
    marca: 'Porsche',
    preco: '3.500',
    imagem: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    nome: 'Huracán EVO',
    marca: 'Lamborghini',
    preco: '5.000',
    imagem: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    nome: 'F8 Tributo',
    marca: 'Ferrari',
    preco: '4.800',
    imagem: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Carros() {
  return (
    <div className="bg-slate-950 min-h-[80vh] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
          Frota Importada
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carrosImportados.map((carro) => (
            <Card key={carro.id} {...carro} />
          ))}
        </div>
      </div>
    </div>
  );
}