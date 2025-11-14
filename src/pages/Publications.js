// src/pages/Publications.js
export default function Publications({ lang }) {
  const publications = [
    {
      title: {
        en: "xxx Title of Journal Paper in English",
        it: "xxx Titolo dell’articolo in italiano"
      },
      journal: "xxx Journal Name",
      year: "xxxx",
      arxiv: "",
      doi: ""
    },
    {
      title: {
        en: "xxx Conference Paper Title in English",
        it: "xxx Titolo della conferenza in italiano"
      },
      journal: "xxx Conference Proceedings",
      year: "xxxx",
      arxiv: "",
      doi: ""
    }
    // More entries can be added below
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-8 text-gray-800">
      <h1 className="text-2xl font-bold mb-6">{lang === 'en' ? 'Publications' : 'Pubblicazioni'}</h1>
      <p className="mb-4">
        {lang === 'en'
          ? 'Browse our peer-reviewed articles, conference papers, and technical reports.'
          : 'Consulta i nostri articoli scientifici, atti di conferenze e rapporti tecnici.'}
      </p>

      <ul className="space-y-6">
        {publications.map((pub, idx) => (
          <li key={idx} className="border-l-4 border-blue-600 pl-4">
            <h2 className="text-lg font-semibold">{pub.title[lang]}</h2>
            <p className="text-sm text-gray-600">
              {pub.journal} – {pub.year}
            </p>
            <div className="mt-1 space-x-4 text-sm">
              {pub.arxiv && (
                <a
                  href={pub.arxiv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  ArXiv
                </a>
              )}
              {pub.doi && (
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  DOI
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-center italic text-gray-500">
        {lang === 'en'
          ? 'More publications will be added soon.'
          : 'Altre pubblicazioni saranno aggiunte presto.'}
      </p>
    </div>
  );
}