import party from 'src/assets/party.png';

export default function Success (){
    return(
    <div className="box">
    <p className="font">PARABÉNS!</p>
    <img src={party} alt= "emoji comemorando"/>
    <p className="lettering">Você não esqueceu de nenhum flashcard!</p>
    );
    </div>
}