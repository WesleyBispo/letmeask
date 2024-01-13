import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDCAKxQ1tpMRmK_U4p61N2_ofwjgHMTpGc",
    authDomain: "leatmeask-react.firebaseapp.com",
    databaseURL: "https://leatmeask-react-default-rtdb.firebaseio.com",
    projectId: "leatmeask-react",
    storageBucket: "leatmeask-react.appspot.com",
    messagingSenderId: "838536529981",
    appId: "1:838536529981:web:d37493cf05df2ab3940254"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const database = firebase.database()


export { firebase, auth, database };