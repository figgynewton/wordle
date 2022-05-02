import {Outlet, Link} from "react-router-dom";
import Help from "./components/Help";
import {useDispatch} from "react-redux";
import {toggleHelp} from "./redux/actions/toggleHelp";



function App() {

    const dispatch=useDispatch();

    return (
        <div className="App">
            <nav>
            <Link to={"/about"}>About</Link>
            </nav>
            <div className="hp" onClick={()=>dispatch(toggleHelp())}>
                <h3>?</h3>
            </div>
            <Help/>
            <Outlet/>
        </div>
    );
}

export default App;