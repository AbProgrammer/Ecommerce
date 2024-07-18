
import React, { createContext,useContext, useState, useEffect } from 'react';
import { auth } from '../../Firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "firebase/auth";


const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [loading, setLoading] = useState(true);

 async function signup(email, password) {

    try{
        await createUserWithEmailAndPassword(auth,email,password);
        alert("Signed Up Successfully!");
       }
   
       catch(error){
         alert ("Error while Signing Up: " + error.message);
       }

  }

  async function login(email, password) {
    try{
        await signInWithEmailAndPassword(auth,email,password)
        alert("SignedIn Successfully!");
    
    
        }
        catch(error){
         alert("Error Signing In!: " + error.message);
        }
  }

  async function logout() {
    try{
        await auth.signOut();
        setAuthenticatedUser(null);
        alert("Are you sure? Please press ok if you are sure.")
        }
        catch(error){
           alert(error);
        }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setAuthenticatedUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    authenticatedUser,
    signup,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
