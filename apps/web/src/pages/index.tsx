// PLUGINS IMPORTS //
import React, { useState, useEffect } from 'react'
import { useTranslation } from '../i18n'

// COMPONENTS IMPORTS //
import { firebase } from '../shared/config'
import { useThemeSelector } from '../state/app/app.hooks'

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

export default function Index() {
  const { selectedTheme, setTheme } = useThemeSelector()
  const { t } = useTranslation('common')
  const [idToken, setIdToken] = useState<string | null>(null)

  useEffect(() => {
    const auth = async () => {
      await firebase
        .auth()
        .signInWithEmailAndPassword('swift.uix@gmail.com', '123456')
      const token = await firebase.auth().currentUser.getIdToken()
      console.log(token)
      setIdToken(token)
    }

    auth()
  }, [])

  return (
    <div>
      <button
        onClick={() => setTheme(selectedTheme === 'dark' ? 'light' : 'dark')}
      >
        {t('firstName')}
      </button>
      {idToken}
    </div>
  )
}
