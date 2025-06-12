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