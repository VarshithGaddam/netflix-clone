import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDfsYKH52k2mC9I-yEbAdNRcXXLNHt38aQ",
  authDomain: "netflix-clone-4a1bb.firebaseapp.com",
  projectId: "netflix-clone-4a1bb",
  storageBucket: "netflix-clone-4a1bb.firebasestorage.app",
  messagingSenderId: "4905155655",
  appId: "G-M6ZDPMNHR0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };