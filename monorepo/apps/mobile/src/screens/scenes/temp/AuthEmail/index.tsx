// # PLUGINS IMPORTS //
import React, { useState } from 'react'
import { View, TextInput, Button, Text } from 'react-native'

// # COMPONENTS IMPORTS //
import { firebase } from '../../../../shared/config'

// # EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

export default function EmailAuth() {
  const [value, setValue] = useState<string>('')
  const [isSent, setIsSent] = useState<boolean>(false)
  const [isVerified, setIsVerified] = useState<boolean | undefined>(false)

  function checkVerification() {
    firebase.auth().currentUser?.reload()
    setIsVerified(firebase.auth().currentUser?.emailVerified)
    console.log(firebase.auth().currentUser?.emailVerified)
  }

  async function handleSubmit() {
    await firebase
      .auth()
      .createUserWithEmailAndPassword('tap.kap.tap@gmail.com', '123456')

    await firebase.auth().currentUser?.sendEmailVerification()
    setIsSent(true)
    checkVerification()
  }
  return (
    <View>
      <TextInput />
      <Button title={'Send verification to email'} onPress={handleSubmit} />

      <Text>{isSent ? 'Sent' : 'not sent'}</Text>
      <Text>{isVerified ? 'Verified' : 'not verified'}</Text>

      <Button title={'Check verification'} onPress={checkVerification} />
    </View>
  )
}
