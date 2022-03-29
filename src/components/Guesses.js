import React from "react";
import Guess from "./Guess";
import {useSelector} from "react-redux";

function Guesses(){

    const guesses = useSelector(state=>state.guesses);
    const change = useSelector(state=>state.change);
    const [gs, setGS]= React.useState(guesses);

    React.useEffect(()=>{
        setGS(guesses)
    },[change, guesses])

    let g_eles = gs.map((itm, idx)=>
        <Guess key={idx} vl={itm}/>
    )

    return(
        <div className="guesses">
            {g_eles}
        </div>
    )
}

export default Guesses;