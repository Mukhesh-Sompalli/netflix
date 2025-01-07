import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAZLbV0Wph8dtGP4kXUd4Ktwq_QjmqOciI",
    authDomain: "netflix-clone-58351.firebaseapp.com",
    projectId: "netflix-clone-58351",
    storageBucket: "netflix-clone-58351.firebasestorage.app",
    messagingSenderId: "497065417385",
    appId: "1:497065417385:web:10362ea0d7c993b18527b8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
        console.log("User signed up successfully:", user);
    } catch (error) {
        console.error("Error during signup:", error.message);
        alert(error.message);
    }
};

const login = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in successfully:", res.user);
        return res;
    } catch (error) {
        console.error("Error during login:", error.message);
        alert(error.message);
    }
};

const logout = async () => {
    try {
        await signOut(auth);
        console.log("User signed out successfully");
    } catch (error) {
        console.error("Error during logout:", error.message);
        alert("Error signing out: " + error.message);
    }
};

export { auth, db, login, signup, logout }; 