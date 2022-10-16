import React from "react";
import './aboutus.css'
import { useAuth } from "../context";
import { useState, useEffect } from "react";
import {
    doc,
    getDoc,
  } from "firebase/firestore";
  import { db } from "./firebaseconfig";
export function  AboutUs(){
    let {user,logout} = useAuth()
    const [username,setusername]=useState('')   
    useEffect(()=>{
        const docref =  doc(db,"userinformation",user.uid)
        getDoc(docref)
        .then((data)=>{
           console.log(data.data())
           setusername(data.data().username)
        },[])  
       },[user])
    return (
    <>
        <div className="aboutus-caontainer-wrapper">
        <div className="logout-wrapper">
            <p>Welcome {username}</p>
            <button className="log-out" onClick={()=>{
                logout()
            }}>Log out</button>
            
           </div>
           <div className="aboutus-container">
           <div className="heading-wrapper">
           <h1 className="Heading">About us</h1>
           <div className="for-bord"></div>
           </div>
            <div className="comp-inf-essay">
            <p className="left-part">
            Our casino is a leading provider delivering iGaming software, solutions,
            content and services for casino, sports betting, payments, and affiliate/agent management
            to Tier-1 operators as well as to newer brands.The platform is highly modular, scalable, and compliant, 
            allowing operators to choose the optimal solution depending on their needs and existing in-house technology and capabilities.
            our casino empowers clients to unleash bold ideas and deliver outstanding player experiences in regulated markets.
            our casino is an active member of the Armenian Lottery Association.</p>
            <div className="right-part"></div>
            </div>
            <h1 className="leaders">The Leadership</h1>
            <div className="Second-for-bord"></div>
            <p className="slogan">If your actions inspire others to dream more, learn more, do more and become more, you are a leader.</p>
            <div className="chiefs">
                <div className="first-chief">
                    <div className="first-chief-img"></div>
                    <p className="name">Hrant Aghayan</p>
                    <div className="bord-name"></div>
                    <p className="optional-text">Chief executive officer & Co-founder, software engineer,Member of the board.</p>
                </div>
                <div className="second-chief">
                    <div className="second-chief-img"></div>
                    <p className="name">Gevorg Babayan</p>
                    <div className="bord-name"></div>
                    <p className="optional-text">Chief executive officer & Co-founder, software engineer,Member of the board.</p>
                </div>
                <div className="thirth-chief">
                <div className="thirth-chief-img"></div>
                    <p className="name">Harutyun Haxverdyan</p>
                    <div className="bord-name"></div>
                    <p className="optional-text">Chief executive officer & Co-founder, software engineer,Member of the board.</p>
                </div>
            </div>
            </div>  
        </div>
        <div className="long-bord"></div>
        <div className="footer">
            <div className="footer-left">Contact Us</div>
            <div className="footer-center">
             <p className="footer-email">
                <a href="https://workspace.google.com/intl/en/products/gmail/?utm_source=google&utm_medium=cpc&utm_campaign=emea-emeaot-all-en-dr-bkws-all-lv-trial-p-t4-1011339&utm_content=text-ad-none-none-DEV_c-CRE_564209186606-ADGP_Desk%2BTab%20%7C%20BKWS%20-%20PHR%20%7C%20Txt%20~%20Gmail%20~%20General-KWID_43700067034745211-kwd-318461586-userloc_9070054&utm_term=KW_gmail-ST_gmail&gclid=Cj0KCQjw4omaBhDqARIsADXULuVD3KgxooJ6MkOaWs95UjXB-rcPOCY46g2RL0DrQ30yMW-tuHvAEKUaAl69EALw_wcB&gclsrc=aw.ds" target="_blank">Casino@gmail.com</a>
                </p>
            </div>
            <div className="footer-right">
                <a className="Fasebook">
                <i className="fa-brands fa-facebook"></i>
                </a>
                <a className="Gmail">
                <i className="fa-regular fa-envelope"></i>
                </a>
            </div>
        </div>
    </>
    )
}