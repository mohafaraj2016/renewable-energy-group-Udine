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