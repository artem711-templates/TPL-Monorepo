// # PLUGINS IMPORTS //
import React, { useRef, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native'
import * as FirebaseRecaptcha from 'expo-firebase-recaptcha'

// # COMPONENTS IMPORTS //

// # EXTRA IMPORTS //
import firebase, {
  FIREBASE_CONFIG,
} from '../../../../shared/config/firebase.config'

/////////////////////////////////////////////////////////////////////////////

export default function AuthPhoneScreen() {
  const recaptchaVerifier = useRef<any>(null)
  const verificationCodeTextInput = useRef<any>(null)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [verificationId, setVerificationId] = useState('')
  const [verifyError, setVerifyError] = useState<{ message: '' }>()
  const [verifyInProgress, setVerifyInProgress] = useState(false)
  const [verificationCode, setVerificationCode] = useState('')
  const [confirmError, setConfirmError] = useState<{ message: '' }>()
  const [confirmInProgress, setConfirmInProgress] = useState(false)

  return (
    <View>
      <FirebaseRecaptcha.FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={FIREBASE_CONFIG}
      />
      <TextInput
        style={styles.textInput}
        autoCompleteType="tel"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        placeholder="+1 999 999 9999"
        editable={!verificationId}
        onChangeText={(phoneNumber: string) => setPhoneNumber(phoneNumber)}
      />
      <Button
        title={`${verificationId ? 'Resend' : 'Send'} Verification Code`}
        disabled={!phoneNumber}
        onPress={async () => {
          const phoneProvider = new firebase.auth.PhoneAuthProvider()
          try {
            setVerifyError(undefined)
            setVerifyInProgress(true)
            setVerificationId('')
            const verificationId = await phoneProvider.verifyPhoneNumber(
              phoneNumber,
              // @ts-ignore
              recaptchaVerifier.current
            )
            setVerifyInProgress(false)
            setVerificationId(verificationId)
            verificationCodeTextInput.current?.focus()
          } catch (err) {
            setVerifyError(err)
            setVerifyInProgress(false)
          }
        }}
      />
      {verifyError && (
        <Text style={styles.error}>{`Error: ${verifyError.message}`}</Text>
      )}
      {verifyInProgress && <ActivityIndicator style={styles.loader} />}
      {verificationId ? (
        <Text style={styles.success}>
          A verification code has been sent to your phone
        </Text>
      ) : undefined}
      <Text style={styles.text}>Enter verification code</Text>
      <TextInput
        ref={verificationCodeTextInput}
        style={styles.textInput}
        editable={!!verificationId}
        placeholder="123456"
        onChangeText={(verificationCode: string) =>
          setVerificationCode(verificationCode)
        }
      />
      <Button
        title="Confirm Verification Code"
        disabled={!verificationCode}
        onPress={async () => {
          try {
            setConfirmError(undefined)
            setConfirmInProgress(true)
            const credential = firebase.auth.PhoneAuthProvider.credential(
              verificationId,
              verificationCode
            )
            await firebase.auth().signInWithCredential(credential)
            setConfirmInProgress(false)
            setVerificationId('')
            setVerificationCode('')
            verificationCodeTextInput.current?.clear()
            Alert.alert('Phone authentication successful!')
          } catch (err) {
            setConfirmError(err)
            setConfirmInProgress(false)
          }
        }}
      />
      {confirmError && (
        <Text style={styles.error}>{`Error: ${confirmError.message}`}</Text>
      )}
      {confirmInProgress && <ActivityIndicator style={styles.loader} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    marginTop: 50,
  },
  title: {
    marginBottom: 2,
    fontSize: 29,
    fontWeight: 'bold',
  },
  subtitle: {
    marginBottom: 10,
    opacity: 0.35,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 30,
    marginBottom: 4,
  },
  textInput: {
    marginBottom: 8,
    fontSize: 17,
    fontWeight: 'bold',
  },
  error: {
    marginTop: 10,
    fontWeight: 'bold',
    color: 'red',
  },
  success: {
    marginTop: 10,
    fontWeight: 'bold',
    color: 'blue',
  },
  loader: {
    marginTop: 10,
  },
})
