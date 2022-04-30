import GL from "./GL";

function Guess(props){
    let gl_eles = props.vl.map((itm, idx)=>
        <GL key={idx} vl={itm} left={(idx * 67) + 'px'}/>
    );

    return(
        <div className="guess" style={{top: props.top, animation: 'boxVibrate 0.3s 1'}}>
            {gl_eles}
        </div>
    )
}

export default Guess;