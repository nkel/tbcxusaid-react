import menu from "../../fakeData/menu";
import logo from "../../logo.svg";
import './Header.css';
import {Link} from "react-router-dom";
function Header(){
    return (
        <div className="header">
            <div className="header-container container-center">
                <div className="header-logo">
                    <img src={logo} alt="logo"/>
                    <h1>React App</h1>
                </div>
                <nav className="nav-menu menu">
                    <ul>
                        { menu.map(item=>
                            <li className={ window.location.pathname===item.href ? "menu-item active" : "menu-item"} key={item.id}>
                                <Link to={item.href} ac>{item.name}</Link>
                            </li>
                        )}
                    </ul>
                </nav>
                <div className="header-lang">
                    <img src="assets/images/geo-flag.png" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Header;