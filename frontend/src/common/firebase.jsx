import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNG_QorimaHPHLPWTTbQ-6P2IdT8EZf54",
  authDomain: "blogging-website-202c6.firebaseapp.com",
  projectId: "blogging-website-202c6",
  storageBucket: "blogging-website-202c6.firebasestorage.app",
  messagingSenderId: "977559327282",
  appId: "1:977559327282:web:6a48a3d389524c870a622b",
  measurementId: "G-XL3JR78YJ7"
};
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;
    
    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((error) => {
        console.log(error);
    })
    
    return user;
}