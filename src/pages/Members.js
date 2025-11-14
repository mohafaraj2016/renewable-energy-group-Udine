// src/pages/Members.js
export default function Members({ lang }) {
  const orcidIcon = "https://upload.wikimedia.org/wikipedia/commons/0/06/ORCID_iD.svg"; // 16x16

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-2xl font-bold mb-8 text-center">
        {lang === 'en' ? 'Group Members' : 'Membri del Gruppo'}
      </h1>

      {/* FACULTY */}
      <h2 className="text-xl font-semibold mb-4">{lang === 'en' ? 'Faculty' : 'Docenti'}</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="flex items-center space-x-4">
          <img src="/team/Marina.png" alt="Marina Cobal" className="w-24 h-24 rounded-full object-cover" />
          <div>
            <h3 className="text-lg font-semibold">Prof. Marina Cobal</h3>
            <p>{lang === 'en' ? 'Full Professor, Coordinator' : 'Professore Ordinario, Coordinatrice'}</p>
            <p>
              <a href="mailto:marina.cobal@uniud.it" className="text-blue-600 hover:underline">marina.cobal@uniud.it</a>
            </p>
            <p className="flex items-center space-x-2 mt-1">
              <img src={orcidIcon} alt="ORCID" className="w-4 h-4" />
              <a href="https://orcid.org/0000-0002-XXXX-XXXX" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ORCID Profile</a>
            </p>
          </div>
        </div>
      </div>

      {/* STUDENTS */}
      <h2 className="text-xl font-semibold mb-4">{lang === 'en' ? 'Ph.D. Students' : 'Dottorandi'}</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Parsu */}
        <div className="flex items-center space-x-4">
          <img src="/team/Parsu.png" alt="Parsu Ram Sharma" className="w-20 h-20 rounded-full object-cover" />
          <div>
            <h3 className="text-lg font-semibold">Parsu Ram Sharma</h3>
            <p>{lang === 'en' ? 'Ph.D. Student' : 'Dottorando'}</p>
            <p>
              <a href="mailto:sharma.parsuram@spes.uniud.it" className="text-blue-600 hover:underline">sharma.parsuram@spes.uniud.it</a>
            </p>
          </div>
        </div>

        {/* Daria */}
        <div className="flex items-center space-x-4">
          <img src="/team/Daria.png" alt="Daria Botsula" className="w-20 h-20 rounded-full object-cover" />
          <div>
            <h3 className="text-lg font-semibold">Daria Botsula</h3>
            <p>{lang === 'en' ? 'Ph.D. Student' : 'Dottoranda'}</p>
            <p>
              <a href="mailto:botsula.daria@spes.uniud.it" className="text-blue-600 hover:underline">botsula.daria@spes.uniud.it</a>
            </p>
          </div>
        </div>
      </div>

      {/* ALUMNI (Empty Placeholder) */}
      <h2 className="text-xl font-semibold mb-4">{lang === 'en' ? 'Alumni' : 'Ex Membri'}</h2>
      <p className="text-gray-600 italic">{lang === 'en' ? 'To be added soon...' : 'In arrivo...'}</p>
    </div>
  );
}