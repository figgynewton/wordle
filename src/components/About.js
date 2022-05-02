import {Link} from "react-router-dom";

function About(){

    return(
        <div className="about">
            <nav>
            <Link to={"/"}>Home</Link>
            </nav>
                <div className="ab">
                    <p>Newt is a student at IUPUI, studying Computer Information & Technology
                concentrating in Web & Software Development. Hope you enjoy the game!</p>
                </div>
        </div>

    );
}
export default About;