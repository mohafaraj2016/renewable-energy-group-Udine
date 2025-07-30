// src/pages/Data.js
import { useState } from 'react';

export default function Data({ lang }) {
  const sections = {
    /*'Solar Radiation': ['solar_2023.csv', 'solar_2024.csv'],*/
    /*'Temperature': ['temp_jan.csv', 'temp_feb.csv'],*/
    'Solar Radiation': ['Data Logging_Linear_Mirror.csv'],
    'Temperature': ['Data Logging_Linear_Mirror.csv'],    
    // Add more sections as needed
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewContent, setPreviewContent] = useState('');


  const handlePreview = async (section, file) => {
    try {
      const encodedFile = encodeURIComponent(file);
      const sectionFolder = section.replace(/ /g, '_');
      const response = await fetch(`${process.env.PUBLIC_URL}/Data_folder/${sectionFolder}/${encodedFile}`);
      const text = await response.text();
      const lines = text.split('\n').filter(Boolean).slice(0, 10); // first 10 lines
      setSelectedFile(file);
      setPreviewContent(lines);
    } catch (error) {
      setPreviewContent(['Failed to load preview.']);
      console.error('Error loading file:', error);
    }
  };

  const handleUpload = (event, section) => {
    const file = event.target.files[0];
    if (file) {
      alert(`${file.name} selected for upload in ${section}. Note: Actual upload handling requires a backend.`);
      // Optionally add logic to show file name in UI
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        {lang === 'en' ? 'Data Upload/Download' : 'Caricamento/Download Dati'}
      </h1>
      <p className="mb-4">
        {lang === 'en'
          ? 'Download, preview, and upload data in CSV format.'
          : 'Scarica, visualizza e carica dati in formato CSV.'}
      </p>

      {Object.entries(sections).map(([section, files]) => (
        <div key={section} className="mb-10">
          <h2 className="text-xl font-semibold mb-2">{section}</h2>

          <input/*
            type="file"
            accept=".csv"
            onChange={(e) => handleUpload(e, section)}
            className="mb-4 block"
            */
          />

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
                  {lang === 'en' ? 'Preview' : 'Anteprima'}
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
        </div>
      )}      

    </div>
  );
}