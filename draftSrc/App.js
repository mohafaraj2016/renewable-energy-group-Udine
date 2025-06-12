import React, { useState } from 'react';

export default function App() {
  const [lang, setLang] = useState('en');

  const t = {
    en: {
      about: 'About Us',
      research: 'Research Areas',
      members: 'Members',
      publications: 'Publications',
      news: 'News & Events',
      collaborations: 'Collaborations',
      contact: 'Contact',
      data: 'Data Upload/Download',
      welcome: 'Welcome to the Renewable Energy Group at the University of Udine.',
      uploadCSV: 'Upload CSV',
      downloadSample: 'Download Sample'
    },
    it: {
      about: 'Chi Siamo',
      research: 'Aree di Ricerca',
      members: 'Membri',
      publications: 'Pubblicazioni',
      news: 'Notizie ed Eventi',
      collaborations: 'Collaborazioni',
      contact: 'Contatti',
      data: 'Caricamento/Download Dati',
      welcome: "Benvenuti nel Gruppo di Energia Rinnovabile dell'Università di Udine.",
      uploadCSV: 'Carica CSV',
      downloadSample: 'Scarica Esempio'
    }
  };

  const section = (id, title, content) => (
    <section id={id} className="p-6 md:p-10 border-b border-gray-200">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </section>
  );

  return (
    <div className="max-w-5xl mx-auto font-sans">
      {/* Language Toggle */}
      <div className="flex justify-end space-x-2 p-4">
        <button
          onClick={() => setLang('en')}
          className={`px-4 py-2 rounded ${lang === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          English
        </button>
        <button
          onClick={() => setLang('it')}
          className={`px-4 py-2 rounded ${lang === 'it' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Italiano
        </button>
      </div>

      {/* Header */}
      <header className="text-center p-6">
        <h1 className="text-3xl font-bold">{t[lang].welcome}</h1>
      </header>

      {/* Navigation */}
      <nav className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-sm font-semibold p-4">
        {['about', 'research', 'members', 'publications', 'news', 'collaborations', 'contact', 'data'].map(sectionKey => (
          <a href={`#${sectionKey}`} key={sectionKey} className="hover:underline">
            {t[lang][sectionKey]}
          </a>
        ))}
      </nav>

      {/* Sections */}
      {section('about', t[lang].about, 'We are a multidisciplinary team focused on renewable energy solutions.')}
      {section('research', t[lang].research, 'Our work spans solar, wind, bioenergy, and smart grid integration.')}
      {section('members', t[lang].members, 'Meet our team of researchers, professors, and students.')}
      {section('publications', t[lang].publications, 'Browse our peer-reviewed articles, conference papers, and reports.')}
      {section('news', t[lang].news, 'Check our latest updates, workshops, and outreach events.')}
      {section('collaborations', t[lang].collaborations, 'We partner with local, national, and international organizations.')}
      {section('contact', t[lang].contact, 'Email: renewable.energy@uniud.it')}

      {/* Data Upload/Download */}
      <section id="data" className="p-6 md:p-10">
        <h2 className="text-xl font-bold mb-4">{t[lang].data}</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="border rounded p-4 flex-1">
            <h3 className="font-semibold mb-2">{t[lang].uploadCSV}</h3>
            <input type="file" accept=".csv" className="mb-2" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              {t[lang].uploadCSV}
            </button>
          </div>
          <div className="border rounded p-4 flex-1">
            <h3 className="font-semibold mb-2">{t[lang].downloadSample}</h3>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              {t[lang].downloadSample}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}