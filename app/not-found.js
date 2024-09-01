// /app/not-found.js
export default function NotFound() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
        <h1 className="text-4xl font-bold mb-4">404 - Página No Encontrada</h1>
        <p className="text-lg mb-6">Lo sentimos, la página que buscas no existe.</p>
        <a href="/" className="text-blue-500 hover:underline">Volver al Inicio</a>
      </div>
    );
  }