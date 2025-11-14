export default function About({ lang }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-4 text-center text-green-800">
        {lang === 'en'
          ? 'Welcome to Our Renewable Energy Initiative'
          : 'Benvenuti nella Nostra Iniziativa per l’Energia Rinnovabile'}
      </h1>

      {lang === 'en' ? (
        <>
          <p className="mb-6 text-justify">
            We are a research group dedicated to advancing sustainable energy solutions.
            Our focus is on integrating innovative technologies to create a carbon-neutral,
            zero-kilometer energy park at the University of Udine.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-green-700">Our Technologies</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              <strong>Linear Mirror Solar Concentrator</strong> – Captures abundant solar energy
              and converts it into high-temperature thermal power for biomass drying,
              greenhouse heating, and other local applications.
            </li>
            <li>
              <strong>High-Flow Biomass Gasifier</strong> – Converts locally sourced biomass
              into clean syngas for energy production while producing biochar for carbon sequestration.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3 text-green-700">How It Works</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              Biomass collected from the university garden is dried and roasted using a dedicated
              heat exchanger and dryer, powered by solar thermal energy.
            </li>
            <li>
              Solar heat and biomass syngas are combined to generate usable energy efficiently,
              creating a self-sustaining system.
            </li>
            <li>
              The system is powered by solar panels, emphasizing sustainability and independence
              from external energy sources.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3 text-green-700">Innovation & Monitoring</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              Both technologies are equipped with real-time sensors and motors for precise
              monitoring of temperature and system performance.
            </li>
            <li>
              Data is continuously collected and disseminated for academic research and to
              inform local energy policy.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3 text-green-700">Performance Highlights</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              <strong>Linear Mirror Solar Concentrator:</strong> 9 kW thermal power, 75% efficiency,
              producing approximately 30 tons/year of solar carbon.
            </li>
            <li>
              <strong>High-Flow Biomass Gasifier:</strong> ~50 kW power output from 5 liters of
              reaction volume, achieving 10 kW/l power density, capable of processing straw and
              unpelletized green waste, and supporting biochar and hydrogen-rich syngas production.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3 text-green-700">Our Team</h2>
          <p className="mb-6 text-justify">
            The group is coordinated by <strong>Prof. Marina Cobal</strong> and
            <strong> Prof. Hans Grassmann</strong>, with two PhD students working on interdisciplinary
            projects. Together, the team drives innovation, research, and practical implementation
            of these renewable energy technologies.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-green-700">Our Vision</h2>
          <p className="text-justify">
            Creating a future-ready, self-sustaining energy park that reduces carbon footprint,
            promotes research, supports local energy initiatives, and demonstrates the potential
            of integrated solar and biomass energy systems.
          </p>
        </>
      ) : (
        <>
          <p className="mb-6 text-justify">
            Siamo un gruppo di ricerca dedicato allo sviluppo di soluzioni energetiche sostenibili.
            Il nostro obiettivo è integrare tecnologie innovative per creare un parco energetico
            a chilometro zero e a impatto neutro di carbonio presso l’Università di Udine.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-green-700">Le Nostre Tecnologie</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              <strong>Concentratore Solare a Specchio Lineare</strong> – Cattura l’energia solare
              e la converte in potenza termica ad alta temperatura per l’essiccazione della biomassa,
              il riscaldamento delle serre e altre applicazioni locali.
            </li>
            <li>
              <strong>Gassificatore di Biomassa ad Alto Flusso</strong> – Converte biomassa locale
              in syngas pulito per la produzione di energia, producendo anche biochar per la
              cattura del carbonio.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3 text-green-700">Come Funziona</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              La biomassa raccolta dal giardino universitario viene essiccata e tostata tramite
              uno scambiatore di calore e un essiccatore dedicati, alimentati da energia solare termica.
            </li>
            <li>
              Il calore solare e il syngas derivato dalla biomassa vengono combinati per generare
              energia in modo efficiente, creando un sistema autosufficiente.
            </li>
            <li>
              Il sistema è alimentato da pannelli solari, sottolineando la sostenibilità e
              l’indipendenza dalle fonti energetiche esterne.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3 text-green-700">Innovazione e Monitoraggio</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              Entrambe le tecnologie sono dotate di sensori e motori in tempo reale per un
              monitoraggio preciso della temperatura e delle prestazioni del sistema.
            </li>
            <li>
              I dati vengono raccolti e analizzati continuamente per la ricerca accademica e
              per supportare le politiche energetiche locali.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3 text-green-700">Prestazioni</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              <strong>Concentratore Solare a Specchio Lineare:</strong> 9 kW di potenza termica,
              75% di efficienza, con una produzione di circa 30 tonnellate/anno di carbonio solare.
            </li>
            <li>
              <strong>Gassificatore di Biomassa ad Alto Flusso:</strong> ~50 kW di potenza da 5 litri
              di volume di reazione, densità di potenza di 10 kW/l, capace di trattare paglia e
              rifiuti verdi non pellettizzati, e di produrre biochar e syngas ricco di idrogeno.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3 text-green-700">Il Nostro Team</h2>
          <p className="mb-6 text-justify">
            Il gruppo è coordinato dalla <strong>Prof.ssa Marina Cobal</strong> e dal
            <strong> Prof. Hans Grassmann</strong>, con due dottorandi impegnati in progetti
            interdisciplinari. Insieme, il team guida l’innovazione, la ricerca e
            l’implementazione pratica di queste tecnologie per l’energia rinnovabile.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-green-700">La Nostra Visione</h2>
          <p className="text-justify">
            Creare un parco energetico autosufficiente e pronto per il futuro, capace di ridurre
            l’impronta di carbonio, promuovere la ricerca, sostenere le iniziative energetiche locali
            e dimostrare il potenziale dei sistemi integrati di energia solare e biomassa.
          </p>
        </>
      )}
    </div>
  );
}

    
