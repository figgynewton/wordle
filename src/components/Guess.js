import GL from "./GL";
import {useSelector} from "react-redux";
import React from "react";

function Guess(props){
    let gl_eles = props.vl.map((itm, idx)=>
        <GL key={idx} vl={itm} gi={props.idx} left={(idx * 67) + 'px'}/>
    );

    const warning = useSelector(state=>state.warn);
    const try_cur = useSelector(state=>state.try);
    const press = useSelector(state=>state.press);

    const [wn, stWN]=React.useState("");

    React.useEffect(()=>{
        stWN("dull");
        if(try_cur===props.idx){
            if(warning&&try_cur===props.idx){

                stWN("warning");
                setTimeout(() => {
                    stWN("dull");
                }, 1000);

            }else{
                stWN("dull");
            }
        }

    }, [press, warning,try_cur,props.idx])

    return(
        <div className="guess" style={{top: props.top, animation: 'boxVibrate 0.3s 1'}}>
            {gl_eles}
        </div>
    )
}

export default Guess;