import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
//create context & export 
export const AuthContext = createContext();
//create auth 
const auth = getAuth(app);
const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, SetLoading] = useState(true)
    //create user
    const createUser = (email, password)=>{
        SetLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //Login
    const logIn = (email , password)=>{
        SetLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    //LogOUt
    const logOut = ()=>{
        SetLoading(true)
        return signOut(auth);
    }
    //auth state change 
    useEffect(()=>{
        const unsubsrcibe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            console.log(currentUser);
            SetLoading(false);
        })
        return () =>{
            unsubsrcibe();
        }
    },[])
    const authInfo = { user, loading, createUser, logIn, logOut };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;