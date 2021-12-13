import Success from "./Success";
import Failure from "./Failure";

export default function ScreenTries (){
    const[tries,setTries]=useState("success")
    if (tries === "success"){
      return(
      <Success/>
    );
  } else if (tries === "failure"){
    return(
    <Failure/>
  );
  }
  }