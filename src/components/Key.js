import {useDispatch} from "react-redux";
import inputLetter from "../redux/actions/inputLetter";

function Key(props){

    const dispatch =useDispatch();

    return(
        <div className="key" onClick={()=>dispatch(inputLetter(props.vl))}>
            {props.vl}
        </div>
    )
}

export default Key;