import "./App.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    let navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">

                <ul className="navbar-nav">
                    <li onClick={() => navigate("/normal-call")} className="nav-link">Norma Call</li>
                    <li onClick={() => navigate("/cached-call")} className="nav-link">Cached Call</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;