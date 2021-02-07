// # PLUGINS IMPORTS //
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native'

// # COMPONENTS IMPORTS //

// # EXTRA IMPORTS //
import { IBaseStackParams, IBottomTabsParams } from '../../navigations/typings'

/////////////////////////////////////////////////////////////////////////////

type ProfileScreenNavigationProp = CompositeNavigationProp<
  MaterialBottomTabNavigationProp<IBottomTabsParams, 'ProfileScreen'>,
  StackNavigationProp<IBaseStackParams, 'RootScreen'>
>

export default function ProfileScreen() {
  const navigation = useNavigation<ProfileScreenNavigationProp>()

  return <SafeAreaView></SafeAreaView>
}

const styles = StyleSheet.create({})
