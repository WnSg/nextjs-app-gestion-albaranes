"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; 

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://bildy-rpmaya.koyeb.app/api/user/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('jwt', token); // Guarda el token en localStorage
        setMessage('Inicio de sesion exitoso!');
        router.push('/'); // Redirige a la página principal o la deseada
      }
    } catch (error) {
      setMessage('Inicio de Sesion Fallido. Por Favor revise sus credenciales e intente de nuevo.');
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Inicie sesión con su cuenta</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Recordar credenciales
          </label>
          <a href="#" className="text-sm text-green-600">Olvido el Password?</a>
        </div>
        <button type="submit" className="w-full bg-green-400 text-white py-2 rounded">Inicie sesion con su email</button>
      </form>
      <p className="mt-4 text-center">
        No tienes una cuenta? <a href="/register" className="text-green-600 font-bold">Registrate</a>
      </p>
      {message && <p className="mt-4 text-center text-red-500">{message}</p>}
    </div>
  );
}