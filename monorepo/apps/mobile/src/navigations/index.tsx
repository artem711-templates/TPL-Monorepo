// # PLUGINS IMPORTS //
import React, { useEffect, useState } from 'react'
import { AppearanceProvider } from 'react-native-appearance'
import AsyncStorage from '@react-native-async-storage/async-storage'
import firebase from 'firebase'

// # COMPONENTS IMPORTS //
import BaseStack from './BaseStack.stack'
import AuthStack from './AuthStack.stack'

// # EXTRA IMPORTS //
import { config, utils as Utils } from '@mobile/shared'
import { createStackNavigator } from '@react-navigation/stack'
import { IRootStackParams } from './typings'

/////////////////////////////////////////////////////////////////////////////

const Stack = createStackNavigator<IRootStackParams>()
export default function Navigation() {
  const [isAuth, setIsAuth] = useState<boolean>(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const isUsed = await AsyncStorage.getItem(config.localStorageKeys.used)
        setIsAuth(!!isUsed)
      }
    })
  }, [])

  return (
    <AppearanceProvider>
      <Utils.Preloader assets={[]}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isAuth ? (
            <Stack.Screen name={'BaseStack'} component={BaseStack} />
          ) : (
            <Stack.Screen name={'AuthStack'} component={AuthStack} />
          )}
        </Stack.Navigator>
      </Utils.Preloader>
    </AppearanceProvider>
  )
}
