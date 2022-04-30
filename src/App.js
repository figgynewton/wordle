import Keys from "./components/Keys";
import Guesses from "./components/Guesses";
import Help from "./components/Help";
import {ToggleHelp} from "./redux/actions/ToggleHelp";
import {useDispatch} from "react-redux";
import {Outlet} from "react-router-dom";

function App() {

  const dispatch=useDispatch();
  return (
    <div className="App">
      <div className="hp" onClick={()=>dispatch(ToggleHelp())}>
        <h3>?</h3>
      </div>
      <Help/>
      <Outlet/>
      {<Guesses/>}
      {<Keys/>}
    </div>
  );
}

export default App;