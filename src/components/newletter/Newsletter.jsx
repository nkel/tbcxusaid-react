import './Newsletter.css';

function Newsletter(){
    return (
        <div className="newsletter">
            <h3>Newsletter</h3>
            <span> Stay uo tp date with our latest news</span>
            <form>
                <input type="text" placeholder="Your email address"/>
                <button> subscribe</button>
            </form>
        </div>
    );
}

export default Newsletter;
