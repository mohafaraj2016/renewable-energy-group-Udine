// src/pages/About.js
export default function About({ lang }) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">{lang === 'en' ? 'About Us' : 'Chi Siamo'}</h1>
        <p>
          {lang === 'en'
            ? 'We are a research group at the University of Udine focusing on renewable energy innovation.'
            : 'Siamo un gruppo di ricerca dell’Università di Udine focalizzato sull’innovazione in energia rinnovabile.'}
        </p>
      </div>
    );
  }
  
  // src/pages/Research.js
  export default function Research({ lang }) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">{lang === 'en' ? 'Research Areas' : 'Aree di Ricerca'}</h1>
        <p>
          {lang === 'en'
            ? 'Our research spans solar, wind, bioenergy, and smart grid integration.'
            : 'Le nostre ricerche coprono solare, eolico, bioenergia e integrazione con smart grid.'}
        </p>
      </div>
    );
  }
  
  // src/pages/Members.js
  export default function Members({ lang }) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">{lang === 'en' ? 'Members' : 'Membri'}</h1>
        <p>
          {lang === 'en'
            ? 'Meet our interdisciplinary team of researchers, professors, and students.'
            : 'Conosci il nostro team interdisciplinare di ricercatori, professori e studenti.'}
        </p>
      </div>
    );
  }
  
  // src/pages/Publications.js
  export default function Publications({ lang }) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">{lang === 'en' ? 'Publications' : 'Pubblicazioni'}</h1>
        <p>
          {lang === 'en'
            ? 'Browse our peer-reviewed articles, conference papers, and reports.'
            : 'Consulta i nostri articoli peer-reviewed, atti di conferenze e report.'}
        </p>
      </div>
    );
  }
  
  // src/pages/News.js
  export default function News({ lang }) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">{lang === 'en' ? 'News & Events' : 'Notizie ed Eventi'}</h1>
        <p>
          {lang === 'en'
            ? 'Stay updated with our latest news, workshops, and outreach activities.'
            : 'Resta aggiornato con le nostre ultime notizie, workshop e attività divulgative.'}
        </p>
      </div>
    );
  }
  
  // src/pages/Collaborations.js
  export default function Collaborations({ lang }) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">{lang === 'en' ? 'Collaborations' : 'Collaborazioni'}</h1>
        <p>
          {lang === 'en'
            ? 'We collaborate with local, national, and international institutions.'
            : 'Collaboriamo con istituzioni locali, nazionali e internazionali.'}
        </p>
      </div>
    );
  }
  
  // src/pages/Contact.js
  export default function Contact({ lang }) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">{lang === 'en' ? 'Contact' : 'Contatti'}</h1>
        <p>
          {lang === 'en'
            ? 'For any inquiries, reach out to us at renewable.energy@uniud.it.'
            : 'Per qualsiasi informazione, contattaci a renewable.energy@uniud.it.'}
        </p>
      </div>
    );
  }
  
  // src/pages/Data.js
  export default function Data({ lang }) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">{lang === 'en' ? 'Data Upload/Download' : 'Caricamento/Download Dati'}</h1>
        <p>
          {lang === 'en'
            ? 'Here you can upload and download mirror reading data in CSV format.'
            : 'Qui puoi caricare e scaricare i dati di lettura specchio in formato CSV.'}
        </p>
      </div>
    );
  }