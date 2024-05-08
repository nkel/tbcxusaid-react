import menu from "../../fakeData/menu";
import './Header.css';
import Image from "next/image";
import Link from "next/link";
import UserArea from "../../components/header/UserArea";
import {logOut} from "../../app/[locale]/actions";
import {cookies} from "next/headers";
import {AUTH_COOKIE_USERNAME} from "../../constants";
import DarkModeSwitcher from "../../components/header/DarkModeSwitcher";


function Header(){
    const cookieStore = cookies();
    // @ts-ignore
    const username = JSON.parse(cookieStore.get(AUTH_COOKIE_USERNAME).value);
    const handleLogOut = async ()=>{
        "use server"
        await logOut();
    }

    return (
        <div className="header">
            <div className="header-container container-center">
                <div className="header-logo">
                    <Image
                        src="/logo.svg"
                        alt="Next.js Logo"
                        width={180}
                        height={37}
                    />
                    <h1>React App</h1>
                </div>
                <nav className="nav-menu menu">
                    <ul>
                        {menu.map(item =>
                            <li className="menu-item" key={item.id}>
                                <Link href={item.href}>{item.name}</Link>
                            </li>
                        )}
                    </ul>
                </nav>
                <div className="header-lang">
                    <Image
                        src="/assets/images/geo-flag.png"
                        alt="Next.js Logo"
                        width={20}
                        height={20}
                    />
                </div>
                <DarkModeSwitcher />
                <UserArea username={username} handleLogOut={handleLogOut}/>
            </div>
        </div>
    );
}

export default Header;