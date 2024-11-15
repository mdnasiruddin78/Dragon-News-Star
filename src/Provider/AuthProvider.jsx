import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loding,setLoding] = useState(true)

    const createNewUser = (email,password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin = (email,password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        setLoding(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoding(false)
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
        loding,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;