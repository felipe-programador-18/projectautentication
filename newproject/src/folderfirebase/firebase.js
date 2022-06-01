import firebase from 'firebase/compat/app'
import 'firebase/compat/database' 
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDS2OM5CmZH2U7n6h93y3xy4QO1uP0PEzM",
    authDomain: "newautentication.firebaseapp.com",
    databaseURL: "https://newautentication-default-rtdb.firebaseio.com",
    projectId: "newautentication",
    storageBucket: "newautentication.appspot.com",
    messagingSenderId: "482079540788",
    appId: "1:482079540788:web:5f6de7ff63c3edf839ec61"
  };

firebase.initializeApp(firebaseConfig)

export default firebase
