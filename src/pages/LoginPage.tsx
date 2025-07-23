import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { loginUsuario } from '../services/usuarioService';

const LoginPage = () => {
  const { login } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Completa todos los campos');
      return;
    }
    try {
      // Aquí podrías cambiar a loginUsuario({ username, password }) si tu backend lo requiere
      const response = await loginUsuario({ email: username, password });
      if (response.status === 200) {
        setError('');
        // Asumimos la estructura de response.data
        const data = response.data as { token: string; usuario: any };
        localStorage.setItem('token', data.token);
        localStorage.setItem('usuario', JSON.stringify(data.usuario));
        // Actualizar contexto global de usuario
        login(data.usuario);
        window.location.href = '/';
      } else {
        setError('Credenciales incorrectas');
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Error al iniciar sesión');
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xs flex flex-col gap-3 border">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center">Iniciar sesion</h2>
        <p className="text-gray-500 text-sm text-center mb-2">Identifícate con tu usuario y contraseña.</p>
        <label className="text-sm font-semibold text-gray-700">Usuario</label>
        <input type="text" placeholder="Ingresa tu usuario." value={username} onChange={e => setUsername(e.target.value)} className="w-full mb-1 px-4 py-2 border rounded" />
        <label className="text-sm font-semibold text-gray-700">Contraseña</label>
        <div className="relative mb-1">
          <input type="password" placeholder="********" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded pr-10" />
          {/* Aquí podrías agregar un botón para mostrar/ocultar contraseña si lo deseas */}
        </div>
        <div className="flex justify-between items-center mb-2">
          <a href="#" className="text-xs text-blue-600 hover:underline">Recuperar Contraseña</a>
        </div>
        <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded font-semibold hover:bg-gray-900 transition mb-2">Iniciar Sesion</button>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="remember" checked={remember} onChange={e => setRemember(e.target.checked)} className="mr-2" />
          <label htmlFor="remember" className="text-xs text-gray-600">Recordarme.</label>
        </div>
        <button type="button" className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded mb-2 hover:bg-gray-100 transition">
          <svg className="w-5 h-5" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.4 30.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 5.1 29.6 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.3-.2-3z"/><path fill="#34A853" d="M6.3 14.7l7 5.1C15.1 17.1 19.2 14 24 14c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 5.1 29.6 3 24 3c-7.2 0-13.3 4.1-16.7 10.1z"/><path fill="#FBBC05" d="M24 44c5.6 0 10.5-1.9 14.3-5.1l-6.6-5.4C29.7 35.1 27 36 24 36c-6.1 0-10.7-2.6-11.7-6.5l-7 5.4C7.7 39.9 15.1 44 24 44z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.7C34.7 33.4 30.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 5.1 29.6 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.3-.2-3z"/></g></svg>
          Inicia Sesion con Google
        </button>
        <button type="button" className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-100 transition">
          <svg className="w-5 h-5" viewBox="0 0 48 48"><g><path fill="#3b5998" d="M24 4C12.95 4 4 12.95 4 24c0 10.02 7.37 18.27 17 19.8V30.89h-5.1v-6.89H21V20.1c0-5.07 3.07-7.84 7.56-7.84 2.18 0 4.46.39 4.46.39v4.9h-2.51c-2.47 0-3.24 1.54-3.24 3.12v3.63h5.51l-.88 6.89h-4.63V43.8C36.63 42.27 44 34.02 44 24c0-11.05-8.95-20-20-20z"/></g></svg>
          Inicia Sesion con Facebook
        </button>
        {error && <div className="text-red-500 text-center text-sm mt-2">{error}</div>}
      </form>
      <div className="mt-4 text-center">
        <span className="text-gray-600 text-sm">¿No tienes cuenta?</span>
        <Link to="/register" className="ml-2 text-blue-600 hover:underline font-semibold">Regístrate</Link>
      </div>
    </section>
  );
};

export default LoginPage;
