import firebase from 'firebase'

export const useAuth = () => {
  return { isAuth: firebase.auth().currentUser }
}
