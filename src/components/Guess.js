import GL from "./GL";
import React from "react";

function Guess(props) {
    let gl_eles = props.vl.map((itm, idx) =>
        <GL key={idx} vl={itm} gi={props.idx}/>
    );

        return (
            <div className={"guess"} style={{top: props.top, animation: 'boxVibrate 0.3s 1'}}>
                {gl_eles}
            </div>
        )
    }

export default Guess;