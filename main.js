import { auth, provider, signInWithPopup, signOut, onAuthStateChanged } from './firebaseConfig.js';

function updateUI(user) {
    if (user) {
        document.getElementById("username").textContent = user.displayName;
        document.getElementById("user-photo").src = user.photoURL;
        document.getElementById("user-info").style.display = "block";
        document.getElementById("login-btn").style.display = "none";
        document.getElementById("logout-btn").style.display = "block";
    } else {
        document.getElementById("user-info").style.display = "none";
        document.getElementById("login-btn").style.display = "block";
        document.getElementById("logout-btn").style.display = "none";
    }
}

function signIn() {
    signInWithPopup(auth, provider).then((data) => {
        console.log(data.user);
        sessionStorage.setItem('user', JSON.stringify(data.user));
        updateUI(data.user);
    }).catch((error) => {
        console.log(error);
        alert('Authentication failed');
    });
}

function logout() {
    signOut(auth).then(() => {
        sessionStorage.removeItem('user');
        updateUI(null);
    }).catch((error) => {
        console.log(error);
        alert('Logout failed');
    });
}

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        sessionStorage.setItem('user', JSON.stringify(user));
    } else {
        sessionStorage.removeItem('user');
    }
    updateUI(user);
});

// Check session storage on page load
window.addEventListener('load', () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
        updateUI(user);
    }
});

document.getElementById("login-btn").addEventListener('click', signIn);
document.getElementById("logout-btn").addEventListener('click', logout);