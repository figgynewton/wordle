import {useDispatch, useSelector} from "react-redux";
import {toggleHelp} from "../redux/actions/toggleHelp";
import {Style} from "../assets/Style";

function Help(){


    const toggle= useSelector(state=>state.help);
    const dispatch = useDispatch();

    let style;

    if(toggle){
        style={
            display:"flex"
        }
    }else{
        style={
            display:"none"
        }
    }

    return(
        <div className="help" style={style}>
            <div className="close" onClick={()=>dispatch(toggleHelp())}>X</div>
            <div className="help-wrap">
                <h3>How to play</h3>
                <p>Guess the word in six tries.</p>
                <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>
                <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
                <h3>Examples</h3>
                <div className="guess">
                    <div className="gl" style={Style.yes}>W</div>
                    <div className="gl">E</div>
                    <div className="gl">A</div>
                    <div className="gl">R</div>
                    <div className="gl">Y</div>
                </div>
                <p>The letter W is in the word and in the correct spot.</p>
                <div className="guess">
                    <div className="gl">P</div>
                    <div className="gl" style={Style.okay}>I</div>
                    <div className="gl">L</div>
                    <div className="gl">L</div>
                    <div className="gl">S</div>
                </div>
                <p>The letter I is in the word but in the wrong spot.</p>
                <div className="guess">
                    <div className="gl">V</div>
                    <div className="gl">A</div>
                    <div className="gl">G</div>
                    <div className="gl" style={Style.no}>U</div>
                    <div className="gl">E</div>
                </div>
                <p>The letter U is not in the word in any spot.</p>
            </div>

        </div>
    )
}

export default Help;