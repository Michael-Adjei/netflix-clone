import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBOJgGXR8vkC6Bu43Tnc30d-XB5rUuIjvA",
  authDomain: "netflix-clone-2a427.firebaseapp.com",
  projectId: "netflix-clone-2a427",
  storageBucket: "netflix-clone-2a427.appspot.com",
  messagingSenderId: "767276709266",
  appId: "1:767276709266:web:6008ca540885390bb4fd4b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;