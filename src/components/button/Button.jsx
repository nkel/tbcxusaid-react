import "./Button.css";
function Button({text, className = 'w-full'}){
    return <button className={`btn-primary ${ className }`}>{text}</button>;
}
export default Button;