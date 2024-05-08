import './login.css';
import {login} from "../actions";
import LoginForm from "../../../components/login-form/LoginForm";
import {cookies} from "next/headers";
import {AUTH_COOKIE_KEY} from "../../../constants";
import {redirect} from "next/navigation";

export default function Login(){
    const cookieStore = cookies();
    if(cookieStore.get(AUTH_COOKIE_KEY) !== undefined) {
      redirect("/");
    }
    const handleLogin = async (username:string, password:string)=> {
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