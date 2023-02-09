// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  onSnapshot,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAVjG0QMALDZGVKb_IRzymM_59CySZ0-Sc',
  authDomain: 'pdf-file-ready.firebaseapp.com',
  projectId: 'pdf-file-ready',
  storageBucket: 'pdf-file-ready.appspot.com',
  messagingSenderId: '97340585423',
  appId: '1:97340585423:web:34d1334721ea6cf30eceba',
  measurementId: 'G-HGP7NG4GDD',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const Collection = collection;
export const GetDocs = getDocs;
export const OnSnapshot = onSnapshot;
export const Query = query;
