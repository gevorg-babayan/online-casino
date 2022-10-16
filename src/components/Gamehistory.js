import React from "react";
import "./Gamehistory.css";
import { useAuth } from "../context";
import { useState, useEffect } from "react";
import {
    doc,
    getDoc,
  } from "firebase/firestore";
import { db } from "./firebaseconfig";
import { useNavigate } from "react-router-dom";

export default function Gamehistory(){
    const[gamehistory,setgamehistory] = useState('')
    const {user,logout} = useAuth();
    const [username,setusername]=useState('');  
    const [balance,setbalance]=useState('')
   const navigate = useNavigate()
    let table
    useEffect(()=>{
        debugger
        const docref =  doc(db,"userinformation",user.uid)
        getDoc(docref)
        .then((data)=>{
        setusername(data.data().username)
        setbalance(data.data().balance)
        setgamehistory(data.data().gameHistory)
        })  
       },[user])
  
    // let arr = []
       
   if(Array.isArray(gamehistory)){

  table = gamehistory.reverse().map((el)=>{
        return (
                          <tr  className="trHover">
                          <td key={Math.random()}>{el.Date}</td>
                          <td key={Math.random()}>{el.Bet}</td>
                          <td key={Math.random()}>{el.Win}</td>
                          <td key={Math.random()}>{el.AfterBalance}</td>
                          <td key={Math.random()}>{el.Game}</td>
                          </tr>

        )
      })
   }
    return (
      <div className="table-container">
      
       {typeof gamehistory==='string'?<div className="loader-wrapper"><div className="loader"></div></div>:gamehistory.length===0?<div className="empty">You don't have game history yet, first you need to play one of our games <button className="go-casino" onClick={()=>{navigate("/casino")}}>Go to Casino</button></div>:
         <>
         <div className="game-history-info-wrapper">
         <div className="username-balance-wrapper">
          <p className="username-gamehistory">{username}</p>
          <p className="username-gamehistory">Balance: {balance} ֏</p>
         </div>
         <div className="game-hisory-btn-wrapper">
         <button className="g-btn" onClick={()=>{
            navigate("/")
          }}>Home</button>
          <button className="g-btn" onClick={()=>{
            navigate("/Casino")
          }}>Casino</button>
          <button className="g-btn"  onClick={()=>{
            logout()
          }}>Log out</button>
         </div>
      </div>
      <table key = {Math.random()}>
      <thead  key={Math.random()}>
        
                    <tr key={Math.random()} className="heading">
                        
                          <th  key={Math.random()}>Date</th>
                          <th  key={Math.random()}>Bet</th>
                          <th  key={Math.random()}>Win</th>
                          <th  key={Math.random()}>After Balance</th>
                          <th  key={Math.random()}>Game</th>
                        
                    </tr>
                </thead>
                <tbody key = {Math.random()}>
               {table}
                </tbody>
                </table>
         </>}
      </div>
    )
}