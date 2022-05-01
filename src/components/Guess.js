import GL from "./GL";
import React from "react";
import {useEffect, useState} from "react";

function Guess(props) {
    let gl_eles = props.vl.map((itm, idx) =>
        <GL key={idx} vl={itm} gi={props.idx}/>
    );

        const [state, setState] = useState("text-black border-2 border-gray-300 dark:bg-zinc-800 dark:text-white rounded");

        useEffect(() => {
            setTimeout(() => {
                if (props.state === "C")
                    setState("bg-correct text-white");
                if (props.state === "E")
                    setState("bg-exist text-white");
                if (props.state === "N")
                    setState("bg-wrong text-white dark:bg-gray-600");
            }, 125 * props.pos);
        }, [props.state]);

        return (
            <div
                className={
                    "h-12 w-12 sm:w-14 sm:h-14 grid place-items-center p-0 m-0 font-bold text-2xl rounded-sm " + state
                }
            >
            <div className={"guess"} style={{top: props.top, animation: 'boxVibrate 0.3s 1'}}>
                {gl_eles}{props.vl}
            </div>
            </div>
        )
    }

export default Guess;