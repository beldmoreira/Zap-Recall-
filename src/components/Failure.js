import sad from '../assets/sad.png';
import LogoMini from './LogoMini';

export default function Failure(){
    return(
        <>
        <LogoMini/>
        <div className="box">
        <p className="font">Putz.. </p>
        <img src={sad} alt= "emoji chorando"/>
        </div> 
        <div className="phrase">
        <p className = "lettering">Você esqueceu alguns flashcards..</p>
        </div>
        <div className= "phrase">
        <p className = "lettering">Não desanime! Na próxima você consegue!</p>
        </div>
        </>
        );
    }