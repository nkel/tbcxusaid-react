import './Newsletter.css';
import Button from "../button/Button";

function Newsletter(){
    return (
        <div className="newsletter">
            <h3>Newsletter</h3>
            <span> Stay uo tp date with our latest news</span>
            <form>
                <input type="text" placeholder="Your email address"/>
                <Button text='Subscribe' className="w-2/12"/>
            </form>
        </div>
    );
}

export default Newsletter;
