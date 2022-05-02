import {Outlet, Link} from "react-router-dom";
import Help from "./components/Help";
import {useDispatch} from "react-redux";
import {toggleHelp} from "./redux/actions/toggleHelp";
import {useContext} from "react";
import {ThemeContext} from "./redux/actions/Theme";



function App() {

    const dispatch=useDispatch();
    const [{ theme}, toggleTheme] = useContext(ThemeContext);

    return (
        <div className="App" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <nav>
            <Link to={"/about"}>About</Link>
            </nav>
            <div className="hp" onClick={()=>dispatch(toggleHelp())}>
                <h3>?</h3>
            </div>
            <div className="th" onClick={()=>dispatch(toggleTheme())}>
                <h3>Change Theme</h3>
            </div>
            <Help/>
            <Outlet/>
        </div>
    );
}

export default App;