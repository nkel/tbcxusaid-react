import './login.css';
import {login} from "@/app/login/actions";
import LoginForm from "@/components/login-form/LoginForm";

export default function Login(){
    const handleLogin = async (username, password)=> {
        'use server';
        await login(username, password);
    }
    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className="login">
                    <div className="login-title">Log In</div>
                    <LoginForm handleLogin={handleLogin}/>
                </div>
            </div>


            <div className="login-info">
                <div className="login-info--container">
                    <div className="login-suggest">
                        <span>React Course</span>
                        <h2>TBC x USAID</h2>
                    </div>

                    <span className="login-info--details">© Created By Nikoloz EL</span>
                </div>

            </div>

        </div>
    );
}