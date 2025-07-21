import { useState } from 'react';
import { useUser } from '../context/UserContext';

const RegisterPage = () => {
  const { login } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Completa todos los campos');
      return;
    }
    // Registro mock
    if (login(email, password)) {
      setError('');
      window.location.href = '/';
    } else {
      setError('No se pudo registrar');
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh]">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Registro de usuario</h2>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full mb-4 px-4 py-2 border rounded" />
        <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} className="w-full mb-4 px-4 py-2 border rounded" />
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">Registrarse</button>
      </form>
    </section>
  );
};

export default RegisterPage;
