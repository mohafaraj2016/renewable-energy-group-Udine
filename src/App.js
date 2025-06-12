import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import About from './pages/About';
import Research from './pages/Research';
import Members from './pages/Members';
import Publications from './pages/Publications';
import News from './pages/News';
import Collaborations from './pages/Collaborations';
import Contact from './pages/Contact';
import Data from './pages/Data';
import Footer from './pages/Footer';
import Hero from './pages/Hero';

export default function App() {
  const [lang, setLang] = useState('en');

  const t = {
    en: {
      about: 'About Us', research: 'Research Areas', members: 'Members', publications: 'Publications',
      news: 'News & Events', collaborations: 'Collaborations', contact: 'Contact', data: 'Data Upload/Download',
      welcome: 'Welcome to the Renewable Energy Group at the University of Udine.',
      address: 'Address',
      usefulLinks: 'Useful Links',
      social: 'Social Media'
    },
    it: {
      about: 'Chi Siamo', research: 'Aree di Ricerca', members: 'Membri', publications: 'Pubblicazioni',
      news: 'Notizie ed Eventi', collaborations: 'Collaborazioni', contact: 'Contatti', data: 'Caricamento/Download Dati',
      welcome: "Benvenuti nel Gruppo di Energia Rinnovabile dell'Università di Udine.",
      address: 'Indirizzo',
      usefulLinks: 'Link Utili',
      social: 'Social Media'

    }
  };
  <Hero lang={lang} t={t} />

  const heroImages = [
    { src: `${process.env.PUBLIC_URL}/Hero_1.png`, captionEn: 'Solar Energy Research', captionIt: 'Ricerca sull’Energia Solare' },
    { src: `${process.env.PUBLIC_URL}/Hero_2.png`, captionEn: 'Wind Tunnel Simulation', captionIt: 'Simulazione della Galleria del Vento' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, heroImages.length]);

  return (
    <>
      <div className="max-w-7xl mx-auto font-sans">
        <header className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow text-center">
          <img
            src={`${process.env.PUBLIC_URL}/logo-Udine-2.png`}
            alt="UniUd Logo"
            className="h-20 md:h-28 mb-2 md:mb-0"
          />
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 mx-4">
                {t[lang].welcome}
            </h1>
            <img
              src={`${process.env.PUBLIC_URL}/logo-renewable.png`}
              alt="Renewable Energy Logo"
              className="h-28"
            />
        </header>

        <div className="flex justify-end space-x-2 p-4">
          <button onClick={() => setLang('en')} className={`px-4 py-2 rounded ${lang === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>English</button>
          <button onClick={() => setLang('it')} className={`px-4 py-2 rounded ${lang === 'it' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>Italiano</button>
        </div>

        <section
  className="relative h-96 bg-cover bg-center text-white flex flex-col items-end justify-end transition-all duration-1000"
  style={{ backgroundImage: `url('${heroImages[currentImageIndex].src}')` }}
>
  {/* Caption only */}
  <div className="bg-black bg-opacity-60 px-4 py-2 mb-4 rounded text-white text-center">
    <p className="text-sm md:text-base">
      {lang === 'en'
        ? heroImages[currentImageIndex].captionEn
        : heroImages[currentImageIndex].captionIt}
    </p>
  </div>

  {/* Navigation dots */}
  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
      
        <nav className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 text-white font-semibold">
          <Link to="/about" className="bg-blue-600 hover:bg-blue-700 py-3 px-4 text-center rounded">{t[lang].about}</Link>
          <Link to="/research" className="bg-green-600 hover:bg-green-700 py-3 px-4 text-center rounded">{t[lang].research}</Link>
          <Link to="/members" className="bg-purple-600 hover:bg-purple-700 py-3 px-4 text-center rounded">{t[lang].members}</Link>
          <Link to="/publications" className="bg-pink-600 hover:bg-pink-700 py-3 px-4 text-center rounded">{t[lang].publications}</Link>
          <Link to="/news" className="bg-yellow-500 hover:bg-yellow-600 py-3 px-4 text-center rounded text-black">{t[lang].news}</Link>
          <Link to="/collaborations" className="bg-red-500 hover:bg-red-600 py-3 px-4 text-center rounded">{t[lang].collaborations}</Link>
          <Link to="/contact" className="bg-gray-700 hover:bg-gray-800 py-3 px-4 text-center rounded">{t[lang].contact}</Link>
          <Link to="/data" className="bg-teal-600 hover:bg-teal-700 py-3 px-4 text-center rounded">{t[lang].data}</Link>
        </nav>

        <Routes>
          <Route path="/" element={<About lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/research" element={<Research lang={lang} />} />
          <Route path="/members" element={<Members lang={lang} />} />
          <Route path="/publications" element={<Publications lang={lang} />} />
          <Route path="/news" element={<News lang={lang} />} />
          <Route path="/collaborations" element={<Collaborations lang={lang} />} />
          <Route path="/contact" element={<Contact lang={lang} />} />
          <Route path="/data" element={<Data lang={lang} />} />
        </Routes>
      </div>
      <Footer lang={lang} t={t} />
    </>
  );
}