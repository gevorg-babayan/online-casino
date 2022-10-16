import React, { useEffect, useState } from "react";
import './main.css'
export default function Clock(){
    let [date, setState] = useState(new Date()) 
    useEffect(()=>{
        setInterval(()=>{
            date=new Date()
            setState(date)
        },1000)
        
    })
    
    return(
        <div className="clock">{date.toLocaleTimeString()}</div>
    )
}