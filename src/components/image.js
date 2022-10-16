import React from "react";
import './main.css'
export default function Image(prop){
    return(
        <div className="headerIcon">
         <img src={prop.src} onClick={()=>prop.nav('/juicyfruits')} className="img1"></img>
        </div>
    )
}

function Name(props){
    return (<>
    <p className="name-username">{props.username}</p>
    <p  className="balance">Balance:{props.balance} ֏</p>
    </>)
} 
export {Name}