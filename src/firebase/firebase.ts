import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDdXnY8G8gjYPX6mb1eAifbdJO35UTQH6U",
  authDomain: "disney-plus-clone-37535.firebaseapp.com",
  projectId: "disney-plus-clone-37535",
  storageBucket: "disney-plus-clone-37535.appspot.com",
  messagingSenderId: "96678698900",
  appId: "1:96678698900:web:a6dc8009c8b466e0297981"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
