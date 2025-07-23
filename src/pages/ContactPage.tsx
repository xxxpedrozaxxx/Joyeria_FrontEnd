const ContactPage = () => (
  <section className="flex flex-col items-center justify-center min-h-[60vh] bg-white">
    <h1 className="text-3xl font-bold mb-4 text-gray-800">Contacto</h1>
    <p className="text-lg text-gray-600 mb-6">¿Tienes alguna pregunta o comentario? ¡Contáctanos!</p>
    <form className="flex flex-col gap-4 w-full max-w-md">
      <input type="text" placeholder="Nombre" className="border rounded px-4 py-2" required />
      <input type="email" placeholder="Correo electrónico" className="border rounded px-4 py-2" required />
      <textarea placeholder="Mensaje" className="border rounded px-4 py-2" rows={4} required />
      <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700 transition">Enviar</button>
    </form>
  </section>
);

export default ContactPage;
