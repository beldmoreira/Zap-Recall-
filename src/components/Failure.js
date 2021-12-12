import sad from '../assets/sad.png';
import LogoMini from './LogoMini';

export default function Failure(){
    return(
        <>
        <LogoMini/>
        <div className="box">
        <p className="font">Putz.. </p>
        <img src={sad} alt= "emoji chorando"/>
        <p className = "lettering">Você esqueceu alguns flashcards..Não desanime! Na próxima você consegue!</p>
        </div> 
        </>
        );
    }