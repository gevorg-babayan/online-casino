import React, { useEffect, useState } from "react";
import './main.css';
export default function ImgMain(prop){
    
    let arr = ["https://img.freepik.com/premium-photo/online-casino-3d-realistic-slot-machine-with-casino-roulette-black-background-gambling-concept_550395-470.jpg?w=2000" , 
"https://as1.ftcdn.net/v2/jpg/04/48/49/68/1000_F_448496854_KU9p7dkQqqceZm7sMG9a7gWxi3Q3JLky.jpg","https://cdn.suwalls.com/wallpapers/typography/casino-10767-1920x1200.jpg", "https://wallpaperaccess.com/full/2031847.jpg","https://wallpaperaccess.com/full/6465631.jpg","https://wallpaperaccess.com/full/6465628.jpg"]
    let [imgSrc,setState]=useState(arr)
    let [i,setStateI]=useState(0)
    useEffect(()=>{
        setInterval(()=>{
                    if(i<arr.length-1){
                        i++
                    }else{
                        i=0
                    }
                    setStateI(i)
                },2500)

    })    
    return (
        <div className="contMainImj">
            <img src={imgSrc[i]} className='mainImg'></img>
        </div>
    )
}
