import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAYIzezVO_0w0Dl9iCTW4Jkdf5KBxDKh7A',
  authDomain: 'clone-slack-yt-a942b.firebaseapp.com',
  projectId: 'clone-slack-yt-a942b',
  storageBucket: 'clone-slack-yt-a942b.appspot.com',

  messagingSenderId: '55839659037',
  appId: '1:55839659037:web:b369aedcf4579a56dce2f4',
  measurementId: 'G-GYKC1T0R0K'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const firebaseTime = firebase.firestore.FieldValue.serverTimestamp()

export { db, auth, provider, firebaseTime }
