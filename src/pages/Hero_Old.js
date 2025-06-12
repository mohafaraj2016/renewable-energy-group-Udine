// src/pages/Hero.js
import { useEffect, useState } from 'react';

export default function Hero({ lang, t }) {
  const heroImages = [
    { src: '/Hero_1.png', captionEn: 'Solar Energy Research', captionIt: 'Ricerca sull’Energia Solare' },
    { src: '/Hero_2.png', captionEn: 'Wind Tunnel Simulation', captionIt: 'Simulazione della Galleria del Vento' }
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

  return (
    <section
      className="relative h-96 bg-cover bg-center text-white flex flex-col items-center justify-center transition-all duration-1000"
      style={{ backgroundImage: `url('${heroImages[currentImageIndex].src}')` }}
    >
      <div className="bg-white bg-opacity-90 text-center p-6 rounded mb-2 text-gray-800 shadow">
        <h1 className="text-xl md:text-3xl font-bold">{t[lang].welcome}</h1>
        <p className="text-sm mt-2">
          {lang === 'en'
            ? heroImages[currentImageIndex].captionEn
            : heroImages[currentImageIndex].captionIt}
        </p>
      </div>

      <div className="flex mt-2 space-x-2">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentImageIndex(idx);
              setAutoPlay(false);
            }}
            className={`h-3 w-3 rounded-full ${
              idx === currentImageIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}