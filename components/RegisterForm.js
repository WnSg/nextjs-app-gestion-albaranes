"use client";  

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';  // Importa useRouter

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();  // Usa el hook useRouter

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://bildy-rpmaya.koyeb.app/api/user/register', {
        email,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token;  // Asumiendo que el token se devuelve en response.data.token
        localStorage.setItem('jwt', token); // Guardar el token en localStorage
        setMessage('Registration successful! Check your email for a verification code.');
        router.push('/verify');  // Redirige a la página de verificación
      }
    } catch (error) {
      setMessage('Registration failed. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Crea tu Cuenta</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First name"
            className="border border-gray-300 p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Last name"
            className="border border-gray-300 p-2 rounded"
            required
          />
        </div>
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
        <div className="flex items-center">
          <input type="checkbox" required />
          <p className="ml-2 text-sm">Para continuar, acepta los <a href="#" className="text-green-600">Terminos y Condiciones</a></p>
        </div>
        <button type="submit" className="w-full bg-green-400 text-white py-2 rounded">Registrarse con email</button>
      </form>
      {message && <p className="mt-4 text-center text-red-500">{message}</p>}
    </div>
  );
}