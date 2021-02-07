// # PLUGINS IMPORTS //
import React, { ReactElement, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppLoading from 'expo-app-loading'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import * as Localization from 'expo-localization'
import { useTranslation } from 'react-i18next'

// # COMPONENTS IMPORTS //

// # EXTRA IMPORTS //
import { useThemeSelector } from '@mobile/redux'
import { config } from '@mobile/shared'

/////////////////////////////////////////////////////////////////////////////

interface IProps {
  fonts?: FontSource
  assets?: number[]
  children: ReactElement | ReactElement[]
}

export default function Preloader({ assets, fonts, children }: IProps) {
  const ready = useLoadAssets(assets || [], fonts || {})
  const { i18n } = useTranslation()
  const { setTheme } = useThemeSelector()

  useEffect(() => {
    const lang = Localization.locale.slice(0, 2)
    console.log(lang)
    i18n.changeLanguage(lang)

    const get = async () => {
      const theme = await AsyncStorage.getItem(config.localStorageKeys.theme)
      theme && setTheme(theme as any)
    }

    get()
  }, [])

  if (!ready) {
    return <AppLoading />
  }

  return <>{children}</>
}

export type FontSource = Parameters<typeof Font.loadAsync>[0]
const usePromiseAll = (
  promises: Promise<void | void[] | Asset[]>[],
  cb: () => void
) =>
  useEffect(() => {
    ;(async () => {
      await Promise.all(promises)
      cb()
    })()
  })

function useLoadAssets(assets: number[], fonts: FontSource): boolean {
  const [ready, setReady] = useState(false)
  usePromiseAll(
    [Font.loadAsync(fonts), ...assets.map((asset) => Asset.loadAsync(asset))],
    () => setReady(true)
  )
  return ready
}
