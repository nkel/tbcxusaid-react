import './Footer.css';
import Image from "next/image";

function Footer(){
    return (
        <footer className="footer">
            <div className="container-center">
                <div className="footer-logo">
                    <Image
                        src="/logo.svg"
                        alt=""
                        width={180}
                        height={37}
                    />
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