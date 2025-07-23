
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { enviarContacto } from '../services/contactoService';
import Swal from 'sweetalert2';

const ContactPage = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await enviarContacto({ nombre, correo, mensaje });
      if (res.status === 200) {
        await Swal.fire({
          icon: 'success',
          title: '¡Mensaje enviado!',
          text: 'Tu mensaje ha sido enviado correctamente. Pronto nos pondremos en contacto contigo.',
        });
        navigate('/');
      } else {
        setError('No se pudo enviar el mensaje.');
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Error al enviar el mensaje.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-white">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Contacto</h1>
      <p className="text-lg text-gray-600 mb-6">¿Tienes alguna pregunta o comentario? ¡Contáctanos!</p>
      <form className="flex flex-col gap-4 w-full max-w-md" onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" className="border rounded px-4 py-2" required value={nombre} onChange={e => setNombre(e.target.value)} />
        <input type="email" placeholder="Correo electrónico" className="border rounded px-4 py-2" required value={correo} onChange={e => setCorreo(e.target.value)} />
        <textarea placeholder="Mensaje" className="border rounded px-4 py-2" rows={4} required value={mensaje} onChange={e => setMensaje(e.target.value)} />
        <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700 transition" disabled={loading}>{loading ? 'Enviando...' : 'Enviar'}</button>
        {error && <div className="text-red-500 text-center text-sm mt-2">{error}</div>}
      </form>
    </section>
  );
};

export default ContactPage;
