import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pl',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      pl: {
        translation: {
          "bio": "Mam 20 lat i interesuje się tworzeniem stron oraz aplikacji internetowych Aktualnie rozwijam swoje umiejętności w framework'u REACT. Pragnę się ciągle rozwijać i poznawać nowe technologie."
        }
      },
      en: {
        translation: {
          "bio": "I'm 20 years old and interested in creating websites and web applications. I'm currently developing my skills in the REACT framework. I want to constantly develop myself and learn new technologies.",
        }
      }
    }
  });

export default i18n;
