// # PLUGINS IMPORTS //
import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

// # COMPONENTS IMPORTS //

// # EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface IProps {
  text: string
  onPress?: () => void
}

export default function AuthStack(props: IProps) {
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={props.onPress}
    ></TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {},
})
