import { useEffect, useState } from 'react';
const heroImages = [
    { src: `${process.env.PUBLIC_URL}/Device_1.png`, captionEn: 'Solar Energy Research', captionIt: 'Ricerca sull’Energia Solare' },
    { src: `${process.env.PUBLIC_URL}/Hero_1.png`, captionEn: 'Wind Tunnel Simulation', captionIt: 'Simulazione della Galleria del Vento' }
  ];

export default function Hero({ lang, t }) {
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
    <div>
      {/* ✅ Just the image with caption below */}
      <section>
        <div className="bg-black bg-opacity-60 px-4 py-2 mb-4 rounded text-white text-center">
          <p className="text-sm md:text-base">
            {lang === 'en'
              ? heroImages[currentImageIndex].captionEn
              : heroImages[currentImageIndex].captionIt}
          </p>
        </div>

        {/* Dots */}
        <div className="absolute bottom-2 flex space-x-2">
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
    </div>
  );
}