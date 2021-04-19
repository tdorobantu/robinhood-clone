import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDkK9__5JetzVl-a2HtCCrggtpPQdeAOo0",
    authDomain: "robinhood-clone-fb47e.firebaseapp.com",
    projectId: "robinhood-clone-fb47e",
    storageBucket: "robinhood-clone-fb47e.appspot.com",
    messagingSenderId: "847887755911",
    appId: "1:847887755911:web:92b386803895fb88f4a622"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export { db }