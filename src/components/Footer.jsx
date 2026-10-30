export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-6 text-center mt-auto border-t border-slate-800">
      <p>&copy; {new Date().getFullYear()} Locação de Carros Importados. Todos os direitos reservados.</p>
    </footer>
  );
}