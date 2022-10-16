import React from "react";
import './main.css'
import Image from "./image";
import ImgMain from "./mainImg";
import { useNavigate } from "react-router-dom";
export default function Main(){

  const nav = useNavigate()
    return (
        <div className="main">
            <div className="mainLeft">
              <Image src="https://cdn.w600.comps.canstockphoto.com/casino-icon-with-playing-cards-and-chips-clip-art-vector_csp30081369.jpg" /> 
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4j0QD99ckh0J2q3tx3_Vg1dTXVg57J-uKbk7hyaSCzDbtkHDxL0FRiHYcuxLz6-HB86I&usqp=CAU" /> 
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWyb_9TWC7UScoFqkIpb8RvNzU4dqdk_s-iZJyOjX1Vpfy7AIvqKYBcR9PSM2nPKfkiwE&usqp=CAU" /> 
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84lzzHWkd6YeqA6Bws5lKDlAVps3klicXFA&usqp=CAU" /> 
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84lzzHWkd6YeqA6Bws5lKDlAVps3klicXFA&usqp=CAU" /> 
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehrqY13TgI8TYTiv2EyhVbpACEuPoue2bnw&usqp=CAU" /> 
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeLQ9MOkDu3lI8C-L7gvv1PEZZwucgxRqP2w&usqp=CAU" /> 
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqtrwEzwgIV_6Wtxl7paoPbAGToRVEfsUhQ&usqp=CAU" />  
            </div>
            <div className="mainCenter">
              <ImgMain i='el'/>
            </div>
            <div className="mainRight">
              <Image nav={nav} src="https://cdn.w600.comps.canstockphoto.com/casino-icon-with-playing-cards-and-chips-clip-art-vector_csp30081369.jpg" /> 
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4j0QD99ckh0J2q3tx3_Vg1dTXVg57J-uKbk7hyaSCzDbtkHDxL0FRiHYcuxLz6-HB86I&usqp=CAU" /> 
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWyb_9TWC7UScoFqkIpb8RvNzU4dqdk_s-iZJyOjX1Vpfy7AIvqKYBcR9PSM2nPKfkiwE&usqp=CAU" /> 
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84lzzHWkd6YeqA6Bws5lKDlAVps3klicXFA&usqp=CAU" /> 
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84lzzHWkd6YeqA6Bws5lKDlAVps3klicXFA&usqp=CAU" /> 
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehrqY13TgI8TYTiv2EyhVbpACEuPoue2bnw&usqp=CAU" /> 
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeLQ9MOkDu3lI8C-L7gvv1PEZZwucgxRqP2w&usqp=CAU" /> 
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqtrwEzwgIV_6Wtxl7paoPbAGToRVEfsUhQ&usqp=CAU" />  
            </div>
        </div>
    )
}