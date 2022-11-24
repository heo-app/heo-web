import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { ArTranslations } from './chore/translations/ar';
import { EnTranslations } from './chore/translations/en';
import { FaTranslations } from './chore/translations/fa';
import { readFromLocalStorage } from './chore/helpers';
import { APP_LANGUAGE } from './chore/constants';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: EnTranslations,
  fa: FaTranslations,
  ar: ArTranslations,
};

const defaultLanguage = readFromLocalStorage<string>(APP_LANGUAGE) ?? 'en';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: defaultLanguage, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
