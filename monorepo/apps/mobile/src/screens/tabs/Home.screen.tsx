// # PLUGINS IMPORTS //
import React from 'react'
import {useTranslation} from 'react-i18next'
import {SafeAreaView} from 'react-native-safe-area-context'

// # COMPONENTS IMPORTS //
import {CButton, Typography} from '~/mobile/components/atoms'
const {Paragraph} = Typography

// # EXTRA IMPORTS //
import {ThemeProvider} from '~/mobile/providers'

/////////////////////////////////////////////////////////////////////////////

export default function HomeScreen() {
  const {selectedTheme, setTheme} = ThemeProvider.useTheme()
  const {t} = useTranslation()

  return (
    <SafeAreaView>
      <Paragraph>{t('firstName')}</Paragraph>
      <CButton
        text={'Change theme'}
        onPress={() => setTheme(selectedTheme === 'dark' ? 'light' : 'dark')}
      />
    </SafeAreaView>
  )
}
