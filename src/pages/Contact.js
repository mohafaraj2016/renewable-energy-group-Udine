// src/pages/Contact.js
export default function Contact({ lang }) {
  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-2xl font-bold mb-4">
        {lang === 'en' ? 'Contact' : 'Contatti'}
      </h1>

      {lang === 'en' ? (
        <>
          <p className="mb-2">
            For general inquiries, email us at: <a href="mailto:lateris.udine@gmail.com" className="text-blue-600 underline">lateris.udine@gmail.com</a>
          </p>
          <p className="mb-2">
            Office address: <br />
            Via delle Scienze 208, Udine, Italy
          </p>
          <p className="mb-2">
            <strong>Prof. Marina Cobal</strong><br />
            Email: <a href="mailto:marina.cobal@uniud.it" className="text-blue-600 underline">marina.cobal@uniud.it</a><br />
            Office: Via delle Scienze 208, Udine, Italy
          </p>
          <p className="mb-4">
            Phone: <a href="tel:+393513426367" className="text-blue-600 underline">+39 351 342 6367</a><br />
            Alternate Email: <a href="mailto:lateris.udine@gmail.com" className="text-blue-600 underline">xxx.@uniud.it</a>
          </p>
        </>
      ) : (
        <>
          <p className="mb-2">
            Per informazioni generali, scrivici a: <a href="mailto:renewable.energy@uniud.it" className="text-blue-600 underline">renewable.energy@uniud.it</a>
          </p>
          <p className="mb-2">
            Indirizzo: <br />
            Via delle Scienze 208 Udine UD, Italia
          </p>
          <p className="mb-2">
            <strong>Prof.ssa Marina Cobal</strong><br />
            Email: <a href="mailto:marina.cobal@uniud.it" className="text-blue-600 underline">marina.cobal@uniud.it</a><br />
            Ufficio: Via delle Scienze 208, Udine, Italia
          </p>
          <p className="mb-4">
            Telefono: <a href="tel:+393513426367" className="text-blue-600 underline">+39 351 342 6367</a><br />
            Email alternativa: <a href="mailto:lateris.udine@gmail.com" className="text-blue-600 underline">lateris.udine@gmail.com</a>
          </p>
        </>
      )}

      {/* Google Maps Embed */}
      <div className="mt-8">
        <iframe
          title="UniUd Map"
         /*src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.659221138228!2d13.226002715867236!3d46.07952797911233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477b29a4a51e5c3f%3A0x9cf848802803ec8f!2sVia%20Palladio%208%2C%2033100%20Udine%20UD%2C%20Italy!5e0!3m2!1sen!2sit!4v1718181234567"*/
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.409595758411!2d13.218689415857574!3d46.08167897911279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477b29574e000001%3A0xf258c23a51d79c3!2sVia%20delle%20Scienze%2C%20208%2C%2033100%20Udine%20UD%2C%20Italy!5e0!3m2!1sit!2sit!4v1718181945082"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}