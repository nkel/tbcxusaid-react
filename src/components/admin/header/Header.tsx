import menu from "../../../fakeData/admin/menu";
import './Header.css';
import Image from "next/image";
import Link from "next/link";


function Header(){
    return (
        <div className="header">
            <div className="header-container container-center">
                <div className="header-logo">
                    <h1>ReactApp - Admin</h1>
                </div>
                <nav className="nav-menu menu">
                    <ul>
                        {menu.map(item =>
                            <li className="menu-item" key={item.id}>
                                <Link href={`admin/${item.href}`}>{item.name}</Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;