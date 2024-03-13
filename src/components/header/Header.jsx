import menu from "../../fakeData/menu";
import logo from "../../logo.svg";
import './Header.css';
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
                        { menu.map((item, index)=> <li className={ index===0 ? "menu-item active" : "menu-item"}><a href={item.href}>{item.name}</a></li> )}
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