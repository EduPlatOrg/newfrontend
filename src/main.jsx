import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './i18n';
import i18next from 'i18next';
import { getBrowserLocales } from './utils/locales';

var lang = getBrowserLocales();
console.log('LENGUAJE NAVEGADOR DETECTADO:', lang);

if (!i18next.isInitialized) {
  i18next
    .init({
      lng: lang,
      fallbackLng: 'en-EN',
      debug: false,
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    })
    .then(() => {
      root.render(<App />);
    })
    .catch((error) => {
      root.render(
        <React.StrictMode>
          <p>ERROR DE LENGUAJE</p>
          {error.message}
        </React.StrictMode>
      );
    });
} else {
  if (i18next.language !== lang) {
    i18next.changeLanguage(lang);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
