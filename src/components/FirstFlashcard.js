export default function Flashcard({questoes, }){
    return(
        <>
        <img src ={`public/assets/img/logo-mini.png`}/>
        <div card data-identifier="flashcard" class="flashcard">
        <span class="content font">{questoes} </span>
        <img src={`public/assets/img/turn.png`}/>
        </div> 
        </>
    );
    

}