import React, { useEffect, useState } from "react";
import { useAuth } from "../context";
import { db } from "./firebaseconfig";
import {
    doc,
    getDoc,
  } from "firebase/firestore"
export function Hero(){
const {user,logout} = useAuth()
const [username,setusername]=useState('')    
useEffect(()=>{
 const docref =  doc(db,"userinformation",user.uid)
 getDoc(docref)
 .then((data)=>{
    console.log(data.data())
    setusername(data.data().username)
 })  
},[user])

return (
    <div className="hero">
        <div>{username}</div>
        <button onClick={()=>{
            logout()
        }}>Log out</button>
    </div>
)
}