"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (!token) {
      router.push('/login'); // Redirige al login si no hay token
    }    
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <div className="bg-white shadow-lg rounded-lg p-12 max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold mb-6">Bienvenido</h1>
        <p className="text-2xl mb-8">
          Este es un proyecto de clase para el Master en Desarrollo de Apps y Programación Web - Módulo 4 Frontend
        </p>
        <h2 className="text-3xl font-semibold mb-6">Alcance:</h2>
        <ul className="text-left list-disc list-inside text-xl">
          <li>Registro de Usuario</li>
          <li>Validación de Código</li>
          <li>Login</li>
          <li>Registro de Clientes</li>
          <li>Listar y Filtrar Clientes</li>
          <li>Redireccionar a la pagina 404 si intentan acceder a una ruta inexistente</li>
        </ul>
      </div>
    </div>
  );
}