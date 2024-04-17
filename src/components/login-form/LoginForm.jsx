'use client';
import {useState} from "react";

export default function LoginForm({handleLogin}){
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    return (
        <div className="login-form">
            <div className="input-field mb-6 ">
                <input type="text" placeholder="User Name" className="w-full bg-w bg-opacity-50 p-4" value={username} onChange={(e)=> setUsername(e.target.value)}/>
            </div>
            <div className="mb-1.5">
                <div className="input-field mb-6 bg-w bg-opacity-50">
                    <input type="password" placeholder="password" className="w-full bg-opacity-0 p-4"  value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </div>
            </div>
            <a className="text-primary">Forget password?</a>

            <span className="loginError mt-3 mb-3"></span>

            <button onClick={() => handleLogin(username, password)}
                    className="bg-primary text-w w-full rounded-sm h-[40px] flex justify-center items-center mt-8 mb-4">Log
                In
            </button>
            <div className="flex justify-center"><a href="" className="text-primary">Registration</a></div>

        </div>
    )
}