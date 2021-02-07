// PLUGINS IMPORTS //
import React from 'react'
import { useTranslation } from '../i18n'

// COMPONENTS IMPORTS //
import { useThemeSelector } from '../state/app/app.hooks'

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

export default function Index() {
  const { selectedTheme, setTheme } = useThemeSelector()
  const { t } = useTranslation('common')

  return (
    <div>
      <button
        onClick={() => setTheme(selectedTheme === 'dark' ? 'light' : 'dark')}
      >
        {t('firstName')}
      </button>
    </div>
  )
}
