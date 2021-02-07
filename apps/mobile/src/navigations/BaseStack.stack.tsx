// # PLUGINS IMPORTS //
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// # COMPONENTS IMPORTS //
import BottomTabNavigator from './BottomTabs.navigator'

// # EXTRA IMPORTS //
import { IBaseStackParams } from './typings'

/////////////////////////////////////////////////////////////////////////////

const Stack = createStackNavigator<IBaseStackParams>()
export default function BaseStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'RootScreen'}
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
