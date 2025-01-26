import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVaCl7kA40KXjZg7tmrY8WnleeRiBU3oY",
    authDomain: "oauth-75875.firebaseapp.com",
    projectId: "oauth-75875",
    storageBucket: "oauth-75875.firebasestorage.app",
    messagingSenderId: "883029181855",
    appId: "1:883029181855:web:b2e8f5687ebfb34e3ea9aa",
    measurementId: "G-6T5FQBJLKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut, onAuthStateChanged };