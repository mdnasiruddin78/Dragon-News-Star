import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)

    const createNewUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
        })
        return()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        setUser,
        logOut,
        createNewUser,
        userLogin,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;