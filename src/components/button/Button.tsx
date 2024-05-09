import "./Button.css";
function Button({text, className = 'w-full'}:{text: string, className: string}){
    return <button className={`btn-primary ${ className }`}>{text}</button>;
}
export default Button;