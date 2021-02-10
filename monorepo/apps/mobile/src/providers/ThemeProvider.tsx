// # PLUGINS IMPORTS //
import React, {useEffect, useState} from 'react'
import {Appearance} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {
  DefaultTheme as IStyledComponentTheme,
  ThemeProvider as StyledComponentsThemeProvider,
} from 'styled-components/native'
import {useMediaQuery} from 'react-responsive'

// # COMPONENTS IMPORTS //
import {IThemeType} from '~/mobile/shared/theme/types'
import {createContext} from '~/mobile/shared/functions'
import {theme} from '~/mobile/shared/theme'

/////////////////////////////////////////////////////////////////////////////

interface IContext {
  selectedTheme: IThemeType
  setTheme: (theme: IThemeType) => void
}

const [useCtx, Provider] = createContext<IContext>()

interface IProps {
  children?: React.ReactElement
  initTheme?: IThemeType
}

function ThemeProvider(props: IProps): React.ReactElement {
  const isMobile = useMediaQuery({maxWidth: 767})
  const isTablet = useMediaQuery({minWidth: 767, maxWidth: 992})
  const isDesktop = useMediaQuery({minWidth: 992})

  const [selectedTheme, setSelectedTheme] = useState<IThemeType>(
    props.initTheme || 'light',
  )

  useEffect(() => {
    const listener = ({colorScheme}: any): void => {
      setSelectedTheme(colorScheme === 'light' ? 'light' : 'dark')
    }

    Appearance.addChangeListener(listener)
    return () => Appearance.removeChangeListener(listener)
  }, [])

  const setTheme = (theme: IThemeType): void => setSelectedTheme(theme)
  const media = {
    isMobile,
    isTablet,
    isDesktop,
  }

  const passTheme: IStyledComponentTheme = {...theme(selectedTheme), ...media}
  return (
    <Provider
      value={{
        selectedTheme,
        setTheme,
      }}>
      <StyledComponentsThemeProvider theme={passTheme}>
        <NavigationContainer
          // @ts-ignore
          theme={{colors: passTheme, dark: selectedTheme === 'dark'}}>
          {props.children}
        </NavigationContainer>
      </StyledComponentsThemeProvider>
    </Provider>
  )
}

export default {useTheme: useCtx, Provider: ThemeProvider}
