import sad from 'src/assets/sad.png';

export default function Failure(){
    return(
        <div className="box">
        <p className="font">Putz.. </p>
        <img src={sad} alt= "emoji chorando"/>
        <p className="lettering">Você esqueceu alguns flashcards.. Não desanime! Na próxima você consegue!</p>
        );
        </div>   
    );
}