import React from "react";
import './falsepath.css';
import { useNavigate } from "react-router-dom";
export function FalsePath(){
    let navigate = useNavigate()
    const refreshpage = ()=>{
        window.location.reload()
    }
return(
    <div className="container-for-border">
        <div className="main-info-with-border">
            <div className="for-icon">
            <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
            </div>
            <h1 className="first-text">This site can not be reached</h1>
            <div className="second-text">Check if there is typo?</div>
            <div className="for-btns">
                <button className="btn1" onClick={()=>{
                    navigate(-1)
                }}>Go Back</button>
                <button className="btn2" onClick={refreshpage}>Reload</button>
            </div>
        </div>
    </div>
)
}