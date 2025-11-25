// src/pages/About.js
export default function About({ lang }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-justify text-gray-800">
      <h1 className="text-2xl font-bold mb-6 text-center">
        {lang === 'en' ? 'About Us' : 'Chi Siamo'}
      </h1>

      {lang === 'en' ? (
        <>
          <p className="mb-6">
            The Renewable Energy Group at the University of Udine is actively involved in advancing research and applications of sustainable energy systems, particularly within the Friuli Venezia Giulia region. The group is coordinated by two full professors, Prof. Marina Cobal and Prof. Hans, and includes two PhD students working on interdisciplinary projects.
          </p>
          <p>
            The team has installed and monitored several renewable energy components, such as photovoltaic panels, solar sensors, and environmental data loggers, in various locations across the region. These systems are used to measure and analyze key variables, including solar radiation, ambient temperature, and system efficiency, enabling in-depth studies of renewable energy performance in different environmental conditions. The collected data helps inform both academic research and local energy policy initiatives.
          </p>
        </>
      ) : (
        <>
          <p className="mb-6">
            Il Gruppo di Energia Rinnovabile dell’Università di Udine è attivamente impegnato nella ricerca e nello sviluppo di sistemi energetici sostenibili, con particolare attenzione al territorio del Friuli Venezia Giulia. Il gruppo è coordinato da due professori ordinari, la Prof.ssa Marina Cobal e il Prof. Hans, ed è composto da due dottorandi che lavorano su progetti interdisciplinari.
          </p>
          <p>
            Il team ha installato e monitorato diversi componenti legati all’energia rinnovabile, come pannelli fotovoltaici, sensori solari e dispositivi di raccolta dati ambientali, in varie località della regione. Questi sistemi sono utilizzati per misurare e analizzare variabili fondamentali, tra cui la radiazione solare, la temperatura ambientale e l’efficienza dei sistemi, permettendo studi approfonditi sulle prestazioni delle energie rinnovabili in diverse condizioni ambientali. I dati raccolti contribuiscono sia alla ricerca accademica che alla definizione di politiche energetiche locali.
          </p>
        </>
      )}
    </div>
  );
}