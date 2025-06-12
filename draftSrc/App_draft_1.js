import React, { useState, useEffect } from 'react';

export default function App() {
  const [lang, setLang] = useState('en');
  const heroImages = [
    { src: '/Hero_1.png', captionEn: 'Solar Energy Research', captionIt: 'Ricerca sull’Energia Solare' },
    { src: '/Hero_2.png', captionEn: 'Wind Tunnel Simulation', captionIt: 'Simulazione della Galleria del Vento' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

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
      downloadSample: 'Download Sample',
      address: '123 Renewable Way, Udine, Italy',
      usefulLinks: 'Useful Links',
      social: 'Follow us on social media'
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
      downloadSample: 'Scarica Esempio',
      address: "Via dell'Energia 123, Udine, Italia",
      usefulLinks: 'Link Utili',
      social: 'Seguici sui social media'
    }
  };
  
  const section = (id, title, content) => (
    <section id={id} className="p-6 md:p-10 border-b border-gray-200">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </section>
  );

  return (
    <div className="max-w-7xl mx-auto font-sans">
      {/* Header with Logos */}
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <img src="/logo-Udine-2.png" alt="UniUd Logo" className="h-24" />
        <img src="/logo-renewable.png" alt="Renewable Energy Logo" className="h-24" />
      </header>

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

      {/* Hero Section */}
      <section
        className="relative h-64 bg-cover bg-center text-white flex flex-col items-center justify-center transition-all duration-1000"
        style={{ backgroundImage: `url('${heroImages[currentImageIndex].src}')` }}
      >
      <div className="bg-black bg-opacity-50 p-6 rounded mb-2">
          <h1 className="text-xl md:text-3xl font-bold text-center">
          {t[lang].welcome}
        </h1>
        <p className="text-sm mt-2 text-center">
          {lang === 'en' ? heroImages[currentImageIndex].captionEn : heroImages[currentImageIndex].captionIt}
        </p>
      </div>

  {/* Buttons */}
  {/*
  <div className="flex space-x-4 mt-2">
    <button
      onClick={() => {
        setCurrentImageIndex((currentImageIndex - 1 + heroImages.length) % heroImages.length);
        setAutoPlay(false);
      }}
      className="bg-white text-black px-4 py-1 rounded hover:bg-gray-200"
    >
      ◀ Previous
    </button>
    <button
      onClick={() => {
        setCurrentImageIndex((currentImageIndex + 1) % heroImages.length);
        setAutoPlay(false);
      }}
      className="bg-white text-black px-4 py-1 rounded hover:bg-gray-200"
    >
      Next ▶
    </button>
  </div>
  */}


  {/* Dots */}
  <div className="flex mt-2 space-x-2">
    {heroImages.map((_, idx) => (
      <button
        key={idx}
        onClick={() => {
          setCurrentImageIndex(idx);
          setAutoPlay(false);
        }}
        className={`h-3 w-3 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-gray-400'}`}
      />
    ))}
  </div>
</section>

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

      {/* Footer */}
      <footer className="bg-gray-100 text-sm mt-10">
        <div className="p-6 grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold mb-2">{t[lang].address}</h4>
            <p>Email: renewable.energy@uniud.it</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">{t[lang].usefulLinks}</h4>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://www.uniud.it"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  University of Udine
                </a>
              </li>
              <li><a href="#" className="text-blue-600 hover:underline">Department of Engineering</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Sustainable Energy Lab</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">{t[lang].social}</h4>
            <ul className="space-y-1">
              <li><a href="#" className="text-blue-600 hover:underline">Facebook</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Instagram</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}