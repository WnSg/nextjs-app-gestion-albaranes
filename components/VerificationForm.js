"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Importa useRouter

export default function VerificationForm() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleInputChange = (index, value) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    const verificationCode = code.join('');
    const token = localStorage.getItem('jwt');

    try {
      const response = await axios.put('https://bildy-rpmaya.koyeb.app/api/user/validation',
        { code: verificationCode },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        }
      );

      if (response.status === 200) {
        setMessage('Verification successful!');
        router.push('/login');  // Redirige al login
      }
    } catch (error) {
      setMessage('Verification failed. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Ingresa el Codigo de Verificación</h2>
      <p>Acabamos de enviar un código de verificación a su correo electrónico..</p>
      <form onSubmit={handleVerify} className="space-y-4 mt-4">
        <div className="flex space-x-2 justify-center">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="w-12 h-12 text-center border border-gray-300 rounded"
              maxLength="1"
              required
            />
          ))}
        </div>
        <button type="submit" className="w-full bg-green-400 text-white py-2 rounded">Validar</button>
      </form>
      {message && <p className="mt-4 text-center text-green-500">{message}</p>}
    </div>
  );
}