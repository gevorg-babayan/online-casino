import React, { useContext, useState, useEffect } from "react";
import {
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
import auth from "./components/firebaseconfig";
  const AuthContext = React.createContext()
  export function useAuth() {
   return useContext(AuthContext)
}


export function AuthProvider({ children }) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const unsubscribe =onAuthStateChanged(auth,(currentuser) => {
        setUser(currentuser);
        setLoading(false)
        })
        return unsubscribe
      },[]);
      const logout = async () => {
        await signOut(auth);
      };
      const value={
        user,
        logout,
        setLoading,
        loading
      }
      return (
        <AuthContext.Provider value={value}>
          {!loading && children}
        </AuthContext.Provider>
      )
}
