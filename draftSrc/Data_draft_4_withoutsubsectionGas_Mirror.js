// src/pages/Data.js
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
      description: lang === 'en'
        ? 'Data collected from experiments using the Linear Mirror Solar Concentrator.'
        : 'Dati raccolti da esperimenti con il Concentratore Solare a Specchio Lineare.',
      files: ['Data_Logging_Linear_Mirror.csv', 'Data_Logging_Linear_Mirror_31_07_25.csv', 'Data_Logging_Linear_Mirror_05_08_25.csv'],
    },
    'Biomass Gasifier': {
      description: lang === 'en'
        ? 'Data collected from biomass gasification experiments.'
        : 'Dati raccolti da esperimenti di gassificazione della biomassa.',
      files: ['Biomass_Data_01.csv', 'Biomass_Data_02.csv']
    }
  };

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
      <p className="mb-4">
        {lang === 'en'
          ? 'Explore, preview, and visualize datasets from various renewable energy experiments.'
          : "Esplora, visualizza e analizza set di dati da vari esperimenti sull'energia rinnovabile."}
      </p>

      {Object.entries(subsections).map(([section, { description, files }]) => (
        <div key={section} className="mb-10">
          <h2 className="text-xl font-semibold mb-2">{section}</h2>
          <p className="mb-2 text-gray-700">{description}</p>

          <ul className="space-y-1">
            {files.map((file) => (
              <li key={file} className="flex items-center space-x-4">
                <a
                  href={`/Data_folder/${section.replace(/ /g, '_')}/${file}`}
                  download
                  className="text-blue-600 hover:underline"
                >
                  {file}
                </a>
                <button
                  onClick={() => handlePreview(section, file)}
                  className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
                >
                  {lang === 'en' ? 'Preview & Plot' : 'Anteprima e Grafico'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}

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

          {csvData.length > 0 && (
            <div className="mt-6">
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4">
                <label>
                  X-axis:
                  <select
                    value={xKey}
                    onChange={(e) => setXKey(e.target.value)}
                    className="ml-2 p-1 border rounded"
                  >
                    {Object.keys(csvData[0] || {}).map((key) => (
                      <option key={key} value={key}>{key}</option>
                    ))}
                  </select>
                </label>

                <label>
                  Y-axis 1:
                  <select
                    value={yKey}
                    onChange={(e) => setYKey(e.target.value)}
                    className="ml-2 p-1 border rounded"
                  >
                    {Object.keys(csvData[0] || {}).map((key) => (
                      <option key={key} value={key}>{key}</option>
                    ))}
                  </select>
                </label>

                <label>
                  Y-axis 2:
                  <select
                    value={yKey2}
                    onChange={(e) => setYKey2(e.target.value)}
                    className="ml-2 p-1 border rounded"
                  >
                    <option value="">None</option>
                    {Object.keys(csvData[0] || {}).map((key) => (
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
      )}
    </div>
  );
}