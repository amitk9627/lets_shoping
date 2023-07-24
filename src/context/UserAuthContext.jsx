import {createContext , useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
   GoogleAuthProvider,
    signInWithPopup,
    
} from "firebase/auth"
import {auth} from '../firebase'

const UserAuthContext=createContext();

export const UserAuthContextProvider=({children})=>{

    const [user,setUser]=useState("");

    const signUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut=()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    const googleSignIn=()=>{
        const googleAuthProvider=new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuthProvider);
    }

    return (
        <UserAuthContext.Provider value={{user,signUp,logIn,logOut,googleSignIn}}>{children}</UserAuthContext.Provider>
    );
}
export function useUserAuth(){
    return useContext(UserAuthContext);
}