
import firebase from "firebase/compat/app";

import 'firebase/auth';
import 'firebase/database';


const firebaseConfig = {
    apiKey: import.meta.env.API_KEY,
    authDomain: import.meta.env.AUTH_DOMAIN,
    databaseURL: import.meta.env.DATABASE_URL,
    projectId: import.meta.env.PROJECT_ID,
    storageBucket: "leatmeask-react.appspot.com",
    messagingSenderId: "838536529981",
    appId: "1:838536529981:web:d37493cf05df2ab3940254"
};


firebase.initializeApp(firebaseConfig)


export const auth = firebase.auth();
export const database = firebase.database()