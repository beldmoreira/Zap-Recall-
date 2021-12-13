import logo from '../assets/logo.png';
import next from '../assets/next.png';
import React, { useState } from 'react';
import Flashcard from './Flashcard';


export default function PageHome(){
const [Screen, setScreen]= useState('home');
      
if(Screen === "home"){
    return (
        <>
        <div className="container">
        <img src = {logo} alt= "logo do jogo"/>
        <div>
        <button data-identifier="start-zap-recall" className="button tipografia" onClick={() => setScreen("flashcard")}>Praticar React</button>
        <img src = {next} className = "next" alt = "seta para continuar a jogar"/>
        </div>
        </div>
        </>
        );
} else if(Screen === "flashcard"){
    return(
    <Flashcard/>
     );
 }
}