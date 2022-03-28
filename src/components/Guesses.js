import Guess from "./Guess";
import {useSelector} from "react-redux";

function Guesses(){

    const guesses = useSelector(state=>state.guesses);


    let g_eles = guesses.map((itm, idx)=>
        <Guess key={idx} vl={itm}/>
    )

    return(
        <div className="guesses">
            {g_eles}
        </div>
    )
}

export default Guesses;