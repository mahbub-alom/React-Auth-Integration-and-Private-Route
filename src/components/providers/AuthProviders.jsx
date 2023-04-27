import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProviders = ({ children }) => {
    const [user, SetUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state change', currentUser);
            SetUser(currentUser);
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const logOut = (() => {
        return signOut(auth)
    })

    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const authInfo = {
        createUser,
        logIn,
        user,
        logOut,
        loading,
        signInGoogle
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;