// src/pages/Footer.js
import { Facebook, Instagram } from 'lucide-react';

export default function Footer({ lang, t }) {
  return (
    <footer className="bg-blue-800 text-white text-sm mt-10">
      <div className="p-6 grid gap-6 md:grid-cols-3">
        <div>
          <h4 className="font-bold mb-2">
            {t[lang].address || (lang === 'en' ? 'Address' : 'Indirizzo')}
          </h4>
          <p>
            DPIA University of Udine, Via della Scienze 206<br />
            I-33100 Udine, Italy
          </p>
          <p className="mt-1">
            Email:{" "}
            <a
              href="mailto:lateris.udine@gmail.com"
              className="underline hover:text-blue-300"
            >
              lateris.udine@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-2">
            {t[lang].usefulLinks || (lang === 'en' ? 'Useful Links' : 'Link Utili')}
          </h4>
          <ul className="space-y-1">
            <li>
              <a
                href="https://www.uniud.it"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                University of Udine
              </a>
            </li>
            <li>
              <span className="text-gray-300">
                {lang === 'en' ? 'Department of Engineering (coming soon)' : 'Dipartimento di Ingegneria (in arrivo)'}
              </span>
            </li>
            <li>
              <span className="text-gray-300">
                {lang === 'en' ? 'Sustainable Energy Lab (coming soon)' : 'Laboratorio Energia Sostenibile (in arrivo)'}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">
            {t[lang].social || 'Social Media'}
          </h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Facebook className="h-4 w-4" />
              <a
                href="https://www.facebook.com/profile.php?id=61569703783123"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4" />
              <a
                href="https://www.instagram.com/lateris_re.lab?igsh=MXVsNWpkdHMzZHQ5dQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}