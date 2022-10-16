import React from "react";
import "./casino.css";
import { useAuth } from "../context";
import { useState, useEffect } from "react";
import {
    doc,
    getDoc,
  } from "firebase/firestore";
import { db } from "./firebaseconfig";
import { useNavigate } from "react-router-dom";


export default function CasinoGame(){
    const {user,logout} = useAuth()

    const navGame = useNavigate()
    const [username,setusername]=useState('');  
    const [balance,setbalance]=useState('')
    useEffect(()=>{
        const docref =  doc(db,"userinformation",user.uid)
        getDoc(docref)
        .then((data)=>{
           console.log(data.data())
           setusername(data.data().username)
           setbalance(data.data().balance)
        },[])  
       },[user])
    return (
        <>
        <div className="casino">
          <div className="for-title">
            <p>Welcome {username}<span>Balance : {balance} ֏</span></p>
            <h1>CASINO</h1>
            <div className="btn-wrapper">
            <button className="btn" onClick={()=>{
              navGame("/gamehistory")
            }}> Game History</button>
            <button className="btn" onClick={()=>{
                logout()
            }}>Log out</button>
            </div>
          </div>
          <div className="game-container">
            <div className="first-game-container">
              <div className="first-game"></div>
              <div className="play-game-wrapper"><button onClick = {() => navGame("/juicyfruits")} className="play-game">Play Juicy Fruits</button></div>
            </div>
            <div className="second-game-container">
                <div className="second-game"></div>
                <div className="play-game-wrapper"><button onClick = {() => navGame("/funkmaster")} className="play-game2">Play Funk Master</button></div>
            </div>
            <div className="thirth-game-container">
                <div className="thirth-game"></div>
                <div className="play-game-wrapper"><button onClick = {() => navGame("/yumyum")} className="play-game3">Play YumYum</button></div>
            </div>
          </div>
        </div>
        </>
    )
}