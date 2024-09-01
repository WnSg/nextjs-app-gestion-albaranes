"use client";
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('jwt'); // Elimina el token de sesión
    router.push('/login'); // Redirige al login
  };

  return (
    <header className="bg-white p-4 shadow flex justify-between items-center">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 p-2 rounded"
      />
      <div className="flex items-center">
        <button className="mr-4">🔔</button>
        <button className="mr-4">⚙️</button>
        <button 
          onClick={handleLogout}
          className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
        >
          Salir
        </button>
      </div>
    </header>
  );
}





