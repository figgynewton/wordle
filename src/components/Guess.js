import GL from "./GL";

function Guess(props){
    let gl_eles = props.vl.map((itm, idx)=>
        <GL key={idx} vl={itm}/>
    );

    return(
        <div className="guess">
            {gl_eles}
        </div>
    )
}

export default Guess;