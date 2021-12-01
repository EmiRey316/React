import firebase from "firebase/compat/app";
import "firebase/compat/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyATgAUkjs1io5gYLXhrdU5X4BoB6zBjE2A",
    authDomain: "react-coder-eb1ae.firebaseapp.com",
    projectId: "react-coder-eb1ae",
    storageBucket: "react-coder-eb1ae.appspot.com",
    messagingSenderId: "372853035265",
    appId: "1:372853035265:web:2e6abdd03c780a86b40b00"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}