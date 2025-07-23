import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUsuario } from '../services/usuarioService';

type Step = 'form1' | 'form2' | 'email' | 'success';

const RegisterPage = () => {
  const [step, setStep] = useState<Step>('form1');
  // Form 1
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  // Form 2
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [remember, setRemember] = useState(false);
  // Error
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Paso 1: Datos personales
  const handleForm1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !apellidos || !direccion || !telefono || !email) {
      setError('Completa todos los campos');
      return;
    }
    setError('');
    setStep('form2');
  };

  // Paso 2: Credenciales
  const handleForm2 = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!usuario || !password || !confirmPassword) {
      setError('Completa todos los campos');
      return;
    }
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    setError('');
    // Enviar datos al backend
    try {
      const userPayload = {
        nombre,
        apellido: apellidos,
        email,
        password,
        telefono,
        rol: 'cliente',
        usuario
      };
      await createUsuario(userPayload);
      setStep('email');
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Error al registrar usuario');
    }
  };

  // Paso 3: Confirmar email
  const handleEmailConfirm = () => {
    setStep('success');
  };

  // Paso 4: Ir a login
  const handleGoLogin = () => {
    navigate('/login');
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-50">
      {step === 'form1' && (
        <form onSubmit={handleForm1} className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xs flex flex-col gap-3 border">
          <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center">Registrarse</h2>
          <label className="text-sm font-semibold text-gray-700">Nombre(s).</label>
          <input type="text" placeholder="Ingresa aqui tu nombre." value={nombre} onChange={e => setNombre(e.target.value)} className="w-full px-4 py-2 border rounded" />
          <label className="text-sm font-semibold text-gray-700">Apellido(s).</label>
          <input type="text" placeholder="Ingresa aqui tus apellidos." value={apellidos} onChange={e => setApellidos(e.target.value)} className="w-full px-4 py-2 border rounded" />
          <label className="text-sm font-semibold text-gray-700">Dirección.</label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400"><svg width="16" height="16" fill="none"><path d="M8 2C5.243 2 3 4.243 3 7c0 4.25 5 7 5 7s5-2.75 5-7c0-2.757-2.243-5-5-5Zm0 7.5A2.5 2.5 0 1 1 8 4a2.5 2.5 0 0 1 0 5.5Z" fill="#9ca3af"/></svg></span>
            <input type="text" placeholder="Ingresa aqui tu dirección." value={direccion} onChange={e => setDireccion(e.target.value)} className="w-full px-4 py-2 border rounded pl-8" />
          </div>
          <label className="text-sm font-semibold text-gray-700">Teléfono.</label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400"><svg width="16" height="16" fill="none"><path d="M3 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Zm5 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" fill="#9ca3af"/></svg></span>
            <input type="text" placeholder="Ingresa aqui tu teléfono." value={telefono} onChange={e => setTelefono(e.target.value)} className="w-full px-4 py-2 border rounded pl-8" />
          </div>
          <label className="text-sm font-semibold text-gray-700">Correo electrónico.</label>
          <input type="email" placeholder="Ingresa aqui tu Email." value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded" />
          <div className="text-xs text-gray-500 mt-2 mb-2">Al crear tu cuenta, estás aceptando el tratamiento de tus datos personales conforme a la política de Ley de datos vigente.</div>
          {error && <div className="text-red-500 text-center text-sm mt-2">{error}</div>}
          <div className="flex gap-2 mt-2">
            <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded font-semibold hover:bg-gray-900 transition">Siguiente</button>
            <Link to="/login" className="w-full bg-gray-200 text-gray-700 py-2 rounded font-semibold text-center hover:bg-gray-300 transition">Volver al login</Link>
          </div>
        </form>
      )}
      {step === 'form2' && (
        <form onSubmit={handleForm2} className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xs flex flex-col gap-3 border">
          <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center">Crea tus credenciales</h2>
          <div className="text-gray-500 text-sm text-center mb-2">Crea un nuevo usuario y una nueva contraseña.</div>
          <label className="text-sm font-semibold text-gray-700">Crea tu nuevo usuario.</label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400"><svg width="16" height="16" fill="none"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z" fill="#9ca3af"/></svg></span>
            <input type="text" placeholder="Ingresa tu nuevo usuario." value={usuario} onChange={e => setUsuario(e.target.value)} className="w-full px-4 py-2 border rounded pl-8" />
          </div>
          <label className="text-sm font-semibold text-gray-700">Crea una nueva contraseña.</label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400"><svg width="16" height="16" fill="none"><path d="M12 8V6a4 4 0 1 0-8 0v2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-6-2a2 2 0 1 1 4 0v2H6V6Zm6 8H2v-4h10v4Z" fill="#9ca3af"/></svg></span>
            <input type="password" placeholder="********" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded pl-8" />
          </div>
          <label className="text-sm font-semibold text-gray-700">Confirma tu nueva contraseña.</label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400"><svg width="16" height="16" fill="none"><path d="M12 8V6a4 4 0 1 0-8 0v2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-6-2a2 2 0 1 1 4 0v2H6V6Zm6 8H2v-4h10v4Z" fill="#9ca3af"/></svg></span>
            <input type="password" placeholder="********" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="w-full px-4 py-2 border rounded pl-8" />
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="remember" checked={remember} onChange={e => setRemember(e.target.checked)} className="mr-2" />
            <label htmlFor="remember" className="text-xs text-gray-600">Recordarme.</label>
          </div>
          {error && <div className="text-red-500 text-center text-sm mt-2">{error}</div>}
          <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded font-semibold hover:bg-gray-900 transition mb-2">Registrarme</button>
          <button type="button" className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded mb-2 hover:bg-gray-100 transition">
            <svg className="w-5 h-5" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.4 30.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 5.1 29.6 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.3-.2-3z"/><path fill="#34A853" d="M6.3 14.7l7 5.1C15.1 17.1 19.2 14 24 14c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 5.1 29.6 3 24 3c-7.2 0-13.3 4.1-16.7 10.1z"/><path fill="#FBBC05" d="M24 44c5.6 0 10.5-1.9 14.3-5.1l-6.6-5.4C29.7 35.1 27 36 24 36c-6.1 0-10.7-2.6-11.7-6.5l-7 5.4C7.7 39.9 15.1 44 24 44z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.7C34.7 33.4 30.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 5.1 29.6 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.3-.2-3z"/></g></svg>
            Identificarme con Google
          </button>
          <button type="button" className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-100 transition">
            <svg className="w-5 h-5" viewBox="0 0 48 48"><g><path fill="#3b5998" d="M24 4C12.95 4 4 12.95 4 24c0 10.02 7.37 18.27 17 19.8V30.89h-5.1v-6.89H21V20.1c0-5.07 3.07-7.84 7.56-7.84 2.18 0 4.46.39 4.46.39v4.9h-2.51c-2.47 0-3.24 1.54-3.24 3.12v3.63h5.51l-.88 6.89h-4.63V43.8C36.63 42.27 44 34.02 44 24c0-11.05-8.95-20-20-20z"/></g></svg>
            Identificarme con Facebook
          </button>
        </form>
      )}
      {step === 'email' && (
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xs flex flex-col gap-3 border items-center">
          <h2 className="text-xl font-bold text-gray-800 text-center mb-2">Revisa tu correo.</h2>
          <div className="text-gray-600 text-center mb-4">Te hemos enviado un email de confirmación, haz clic en el enlace.<br /><br />¿No has recibido tu correo? Revisa tu carpeta de Spam o haz clic en: <button className="text-blue-600 hover:underline">Reenviarme email.</button></div>
          <button onClick={handleEmailConfirm} className="w-full bg-gray-800 text-white py-2 rounded font-semibold hover:bg-gray-900 transition">Confirmar manualmente</button>
        </div>
      )}
      {step === 'success' && (
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xs flex flex-col gap-3 border items-center">
          <h2 className="text-xl font-bold text-gray-800 text-center mb-2">¡Gracias por registrarte en Joyería Los Alcazares!</h2>
          <div className="text-gray-600 text-center mb-4">Te has registrado exitosamente. Tu nuevo código de cliente es: <span className="font-bold">XXXXX</span>.<br /><br />¡Ya puedes iniciar sesión con tu nueva cuenta!</div>
          <button onClick={handleGoLogin} className="w-full bg-gray-800 text-white py-2 rounded font-semibold hover:bg-gray-900 transition">Iniciar Sesion</button>
        </div>
      )}
    </section>
  );
};

export default RegisterPage;
