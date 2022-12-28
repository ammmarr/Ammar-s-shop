import {initializeApp} from "firebase/app"
import  { getAuth } from "firebase/auth"


const app = initializeApp({
    apiKey: "AIzaSyC2nvM9kMkjTZjqARXFVbpJDDzHPDtsZAg",
    authDomain: "ecomm-dev-3f85e.firebaseapp.com",
    projectId: "ecomm-dev-3f85e",
    storageBucket: "ecomm-dev-3f85e.appspot.com",
    messagingSenderId: "1036082883245",
    appId: "1:1036082883245:web:d2bca0ff3d026dd028b424"
  })


export const auth = getAuth(app)
export default app