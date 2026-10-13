import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js';
import {getFirestore,doc,getDoc,setDoc,collection,onSnapshot,query,orderBy,limit,Timestamp,serverTimestamp} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';
import {getAuth,signInWithEmailAndPassword,onAuthStateChanged,signOut} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
// Pega aquí la configuración de tu app web (Firebase Console > Configuración del proyecto > Tus apps)
const cfg={apiKey:'AIzaSyCNVS6NcDZFXo3DTJ8BZD88STtOqOZ8tSo',authDomain:'gymcontrol-demo.firebaseapp.com',projectId:'gymcontrol-demo',appId:'1:776076203987:web:a5d14a24ec2d76f0a98126'};
const app=initializeApp(cfg);
export const db=getFirestore(app),auth=getAuth(app);
export {doc,getDoc,setDoc,collection,onSnapshot,query,orderBy,limit,Timestamp,serverTimestamp,signInWithEmailAndPassword,onAuthStateChanged,signOut};
