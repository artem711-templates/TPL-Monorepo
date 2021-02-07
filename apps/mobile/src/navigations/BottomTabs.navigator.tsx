// # PLUGINS IMPORTS //
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

// # COMPONENTS IMPORTS //
import * as TabScreens from '../screens/tabs'

// # EXTRA IMPORTS //
import { Ionicons } from '@expo/vector-icons'
import { IBottomTabsParams } from './typings'

/////////////////////////////////////////////////////////////////////////////

const Tab = createMaterialBottomTabNavigator<IBottomTabsParams>()
export default function BottomTabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={TabScreens.HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons size={23} name="home" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={TabScreens.ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons size={23} name="home" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
