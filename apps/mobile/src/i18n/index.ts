import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import languages from '@lib/translator'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: languages.en,
      },
      ru: {
        translation: languages.ru,
      },
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
// console.log(
//   ...Object.keys(languages).map((key) =>
//     Object.keys(languages[key]).map((lang) => ({ [key]: languages[key][lang] }))
//   )
// )
console.log(
  Object.keys(languages).map((key) => ({
    [key]: { translation: languages[key] },
  }))
)
