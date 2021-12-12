import party from '../assets/party.png';
import LogoMini from '../components/LogoMini.js'

export default function Success (){
    return(
        <>
    <LogoMini/>
        <div className="box">
        <p className="font">PARABÉNS!</p>
        <img src={party} alt= "emoji comemorando"/>
        <p className="lettering">Você não esqueceu de nenhum flashcard!</p>
        </div>
        </>
    );
  
}