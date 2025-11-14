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