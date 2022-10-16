import React, { useState, useEffect } from "react";
import './main.css'
export default function Title(){
    let style=['title','style1']
    let [i,setStateI]=useState(0)
    useEffect(()=>{
        setInterval(()=>{
                    if(i<style.length-1){
                        i++
                    }else{
                        i=0
                    }
                    setStateI(i)
                },1000)

    }) 
    return (
        <div className={style[i]}>
            <div>C</div>
            <div>A</div>
            <div>S</div>
            <div>I</div>
            <div>N</div>
            <div>O</div>
        </div>
    )
}