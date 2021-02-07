// # PLUGINS IMPORTS
import NextI18Next from 'next-i18next'

// # COMPONENTS IMPORTS
import languages from '@lib/translator'

////////////////////////////////////////////////////////////////////////////////

const translator = new NextI18Next({
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  cleanCode: true,
  otherLanguages: Object.keys(languages).map((key) => key),
  fallbackLng: 'en',
  defaultLanguage: 'en',
  localePath: './libs/translator/src',
})

export const useTranslation = translator.useTranslation
export const i18n = translator.i18n
export default translator
