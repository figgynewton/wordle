import {useDispatch, useSelector} from "react-redux";
import React from "react";
import inputLetter from "./redux/actions/inputLetter";
import {Delete} from "./redux/actions/Delete";
import submitGuess from "./redux/actions/submitGuess";
import newGame from "./redux/actions/newGame";
import Keys from "./components/Keys";
import Guesses from "./components/Guesses";

const enter_keys = ['Enter'];
const back_keys = ['Backspace', 8];

const useEventListener = (eventName, handler, element = window) => {
    const savedHandler = React.useRef();

    React.useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    React.useEffect(() => {
        const eventListener = (event) => savedHandler.current(event);
        element.addEventListener(eventName, eventListener);
        return () => {
            element.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element]);
}

function Main() {
    const dispatch = useDispatch();
    const win = useSelector(state => state.win);
    const end = useSelector(state => state.end);
    const answer = useSelector(state => state.answer);

    const handler = ({key}) => {
        if ('abcdefghijklmnopqrstuvwxyz'.split('').includes(key)) {
            dispatch(inputLetter(key))
        }
        else if (enter_keys.includes(key)) {
            dispatch(submitGuess())
        }
        else if (back_keys.includes(key)) {
            dispatch(Delete())
        }
    };

    useEventListener("keydown", handler);

    let color;

    if(win){
        color="green"
    }else{
        color="red";
    }

    const create_new_game=()=>{
        dispatch(newGame())
    }

        const current = new Date();
        const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

    return (
        <div className="contain">
            <h1>React Wordle</h1>
            <p>{date}</p>
            <Guesses/>
            <Keys/>
            {end && <div className="message">
                <div className="tab">
                    {win && <h1>You Won</h1>}
                    {end && !win ? <h1>Answer: {answer.join('')}</h1> : ""}
                    <h2 onClick={create_new_game}>Play Again</h2>
                </div>
            </div>}

        </div>
    )
}

export default Main;