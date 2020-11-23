import firebase from 'firebase/app'
require('firebase/auth')
require('firebase/firestore')

const fauth = firebase.auth()
const fdatastore = firebase.firestore()

export const auth = {
  login: async (authData) => {
    return fauth
    .signInWithEmailAndPassword(authData.email, authData.pass)
  },

  register: async (regData) => {
    return fauth
    .createUserWithEmailAndPassword(regData.email, regData.password)
    .then(data => {
      data.user
      .updateProfile({
        displayName: regData.name,
      })
      .then(() => {})
    })
  },

  logout: async () => {
    return fauth
    .signOut()
  },
}

export const games = {
  getAll: async () => {
    return fdatastore
    .collection('games')
    .get()
  },
}
