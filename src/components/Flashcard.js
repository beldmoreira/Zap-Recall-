import LogoMini from "./LogoMini";
import turn from '../assets/turn.png'
import React, { useState } from 'react';

export default function Flashcard() {
    const [side, setSide] = useState("front");
    const flashcards = [
        {level:1, question:"O que é JSX?", answer:"Uma extensão de linguagem do JavaScript"},
        {level:2, question:"O React é __", answer:"Uma biblioteca JavaScript para construção de interfaces"},
        {level:3, question:"Componentes devem iniciar com __", answer:"Letra maiúscula"},
        {level:4, question:"Podemos colocar __ dentro do JSX", answer:"Expressões"},
        {level:5, question:"O ReactDOM nos ajuda __", answer:"Interagindo com a DOM para colocar componentes React na mesma"},
        {level:6, question:"Usamos o npm para __", answer:"Gerenciar os pacotes necessários e suas dependências"},
        {level:7, question:"Usamos props para __", answer:"Passar diferentes informações para componentes"},
        {level:8, question:"Usamos estado (state) para __", answer:"Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ]

    if(side === "front"){
         return(
            <>
             <LogoMini/>
            <div data-identifier="flashcard" className="card-front">
                <div className="counter-font counter-position"> {`${flashcards[0].level}/8`} </div>
                <div className="questions">{flashcards[0].question} </div> 
                <div data-identifier="arrow">
                <img src={turn} className="turn" alt= "seta que vira a carta" onClick={() => setSide("behind")}/>
                </div>
            </div>
            </>
    );

    } else if (side === "behind"){
        return(
        <>
        <LogoMini/>
        <div data-identifier="flashcard" className="card-back">
            <p className="questions-behind"> {flashcards[0].question} </p>
            <p data-identifier="counter" className="counter-font counter-position"> {`${flashcards[0].level}/8`} </p>
            <div className="answers"> {flashcards[0].answer}</div>
            <div className="colored-buttons">
              <div className="feedback-flashcard black"> Aprendi{'\n'}agora </div>
              <div className="feedback-flashcard red">Não{'\n'}lembrei</div>
              <div className="feedback-flashcard green">Lembrei{'\n'}com{'\n'}esforço</div>
              <div className="feedback-flashcard yellow">Zap!</div>
            </div>
        </div>
        </>
    );
    }
}