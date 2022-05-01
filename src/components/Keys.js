import Key from "./Key";
import {Delete} from "../redux/actions/Delete";
import submitGuess from "../redux/actions/submitGuess";
import {useDispatch} from "react-redux";
import { FiDelete } from "react-icons/fi";

function Keys(){
    const keys = 'qwertyuiopasdfghjklzxcvbnm'.split("");
    const dispatch = useDispatch();

    let keys_ele = keys.map((itm, idx)=>
        <Key key={idx} vl={itm}/>
    )

    return(
        <div className="keys">
            {keys_ele}
            <button className={"key submit"} onClick={()=>dispatch(submitGuess())}>Enter</button>
            <button className={"key delete"} onClick={()=>dispatch(Delete())}><FiDelete/></button>
        </div>
    )
}

export default Keys;