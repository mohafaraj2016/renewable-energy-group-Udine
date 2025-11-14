import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from 'recharts';

export default function Data({ lang }) {
  const subsections = {
    'Linear Mirror Solar Concentrator': {
      color: 'bg-yellow-200 hover:bg-yellow-300',
      description: lang === 'en'
        ? 'This section contains data collected from experiments using the Linear Mirror Solar Concentrator system, focusing on solar radiation and temperature behavior under different configurations.'
        : 'Questa sezione contiene dati raccolti da esperimenti con il sistema Concentratore Solare a Specchio Lineare, focalizzati sulla radiazione solare e il comportamento della temperatura.',
      files: ['Data_Logging_Linear_Mirror.csv', 'Data_Logging_Linear_Mirror_31_07_25.csv', 'Data_Logging_Linear_Mirror_05_08_25.csv']
    },
    'Biomass Gasifier': {
      color: 'bg-green-200 hover:bg-green-300',
      description: lang === 'en'
        ? 'This section contains experimental data from the biomass gasification setup, capturing temperature profiles, gas composition, and reaction conditions.'
        : 'Questa sezione contiene dati sperimentali del sistema di gassificazione della biomassa, inclusi profili di temperatura, composizione dei gas e condizioni di reazione.',
      files: ['Biomass_Data_01.csv', 'Biomass_Data_02.csv']
    }
  };

  const [selectedSection, setSelectedSection] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewContent, setPreviewContent] = useState([]);
  const [csvData, setCsvData] = useState([]);
  const [xKey, setXKey] = useState('');
  const [yKey, setYKey] = useState('');
  const [yKey2, setYKey2] = useState('');

  const handlePreview = async (section, file) => {
    try {
      const encodedFile = encodeURIComponent(file);
      const sectionFolder = section.replace(/ /g, '_');
      const response = await fetch(`${process.env.PUBLIC_URL}/Data_folder/${sectionFolder}/${encodedFile}`);
      const text = await response.text();
      const lines = text.split('\n').filter(Boolean);
      setSelectedFile(file);
      setPreviewContent(lines.slice(0, 10));

      const [header, ...rows] = lines;
      const keys = header.split(',');
      const parsed = rows.map(row => {
        const values = row.split(',');
        return Object.fromEntries(keys.map((k, i) => [k.trim(), values[i]?.trim()]));
      });
      setCsvData(parsed);
      setXKey(keys[0].trim());
      setYKey(keys[1]?.trim() || '');
    } catch (error) {
      setPreviewContent(['Failed to load preview.']);
      setCsvData([]);
      console.error('Error loading file:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        {lang === 'en' ? 'Data Upload/Download' : 'Caricamento/Download Dati'}
      </h1>
      <p className="mb-6">
        {lang === 'en'
          ? 'Explore, preview, and visualize datasets from various renewable energy experiments.'
          : "Esplora, visualizza e analizza set di dati da vari esperimenti sull'energia rinnovabile."}
      </p>

      {/* Subsection buttons */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {Object.entries(subsections).map(([section, config]) => (
          <button
            key={section}
            onClick={() => {
              setSelectedSection(section);
              setSelectedFile(null);
              setPreviewContent([]);
              setCsvData([]);
            }}
            className={`p-4 rounded-md shadow-md w-full md:w-1/2 text-left font-semibold transition ${config.color} ${
              selectedSection === section ? 'ring-2 ring-offset-2 ring-blue-500' : ''
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Subsection description + file list */}
      {selectedSection && (
        <>
          <div className="mb-6 bg-gray-50 border-l-4 border-blue-400 p-4">
            <p className="text-gray-800">{subsections[selectedSection].description}</p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4">{lang === 'en' ? 'Available Files:' : 'File Disponibili:'}</h2>

            <ul className="space-y-2">
              {subsections[selectedSection].files.map((file) => (
                <li key={file} className="flex items-center space-x-4">
                  <a
                    href={`/Data_folder/${selectedSection.replace(/ /g, '_')}/${file}`}
                    download
                    className="text-blue-600 hover:underline"
                  >
                    {file}
                  </a>
                  <button
                    onClick={() => handlePreview(selectedSection, file)}
                    className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
                  >
                    {lang === 'en' ? 'Preview & Plot' : 'Anteprima e Grafico'}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* CSV preview table */}
      {selectedFile && (
        <div className="mt-6 border rounded p-4 bg-gray-50 overflow-x-auto">
          <h3 className="font-bold text-lg mb-4">
            {lang === 'en' ? 'Preview:' : 'Anteprima:'} {selectedFile}
          </h3>
          <table className="min-w-full text-sm text-left border">
            <thead>
              {previewContent.length > 0 && (
                <tr className="bg-gray-100">
                  {previewContent[0].split(',').map((header, idx) => (
                    <th key={idx} className="border px-2 py-1">{header.trim()}</th>
                  ))}
                </tr>
              )}
            </thead>
            <tbody>
              {previewContent.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.split(',').map((cell, cellIndex) => (
                    <td key={cellIndex} className="border px-2 py-1">{cell.trim()}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* CSV plot */}
      {csvData.length > 0 && (
        <div className="mt-6">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4">
            <label>
              X-axis:
              <select value={xKey} onChange={e => setXKey(e.target.value)} className="ml-2 p-1 border rounded">
                {Object.keys(csvData[0] || {}).map(key => (
                  <option key={key} value={key}>{key}</option>
                ))}
              </select>
            </label>

            <label>
              Y-axis 1:
              <select value={yKey} onChange={e => setYKey(e.target.value)} className="ml-2 p-1 border rounded">
                {Object.keys(csvData[0] || {}).map(key => (
                  <option key={key} value={key}>{key}</option>
                ))}
              </select>
            </label>

            <label>
              Y-axis 2:
              <select value={yKey2} onChange={e => setYKey2(e.target.value)} className="ml-2 p-1 border rounded">
                <option value="">None</option>
                {Object.keys(csvData[0] || {}).map(key => (
                  <option key={key} value={key}>{key}</option>
                ))}
              </select>
            </label>
          </div>

          <LineChart width={800} height={400} data={csvData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={yKey} stroke="#1976d2" dot={false} />
            {yKey2 && <Line type="monotone" dataKey={yKey2} stroke="#e91e63" dot={false} />}
          </LineChart>
        </div>
      )}
    </div>
  );
}