import firebase from 'firebase'
import '@firebase/auth'

export const FIREBASE_CONFIG: any = {
  apiKey: 'AIzaSyDpHfBcWFl4zm7GFwiqpbrBqb6qtJcjns8',
  authDomain: 'investment-club-europe-c318c.firebaseapp.com',
  projectId: 'investment-club-europe-c318c',
  storageBucket: 'investment-club-europe-c318c.appspot.com',
  messagingSenderId: '380264038838',
  appId: '1:380264038838:web:f106c76e3f2ab7367d8117',
  measurementId: 'G-SN3W73D02M',
}

try {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(FIREBASE_CONFIG)
    console.log('inited')
  }
} catch (e) {
  console.log(e)
}
export default firebase
