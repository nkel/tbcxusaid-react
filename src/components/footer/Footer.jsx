import './Footer.css';
import logo from "../../logo.svg";

function Footer(){
    return (
        <footer className="footer">
            <div className="container-center">
                <div className="footer-logo">
                    <img src={logo} alt=""/>
                    © All Right Reserved
                </div>
                <div className="footer-nav">
                    <ul>
                        <li><a href="">Terms & Conditions</a></li>
                        <li><a href="">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;