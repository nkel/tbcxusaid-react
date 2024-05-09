"use client";
import './UserArea.css';
import {useState} from "react";
import Link from "next/link";
export default function UserArea({username, handleLogOut}:{username:string, handleLogOut():void}){
    const [active, setActive]= useState(false);
    const handleClick = ()=>{
        setActive(prevState => prevState=!prevState);
    }

    return (
        <div className="header-user_area">
            <div className="header-user_area--main">
                <div className="header-user_area--avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g transform="translate(-141 -1738)">
                            <g transform="translate(-974 1718)">
                                <path d="M14.476,18h0c.02-.2.03-.4.03-.6A6.461,6.461,0,0,0,8,11a6.461,6.461,0,0,0-6.506,6.4c0,.2.01.4.029.6A12.782,12.782,0,0,1,0,16.972,7.758,7.758,0,0,1,1.5,12.8a8.021,8.021,0,0,1,3.459-2.692A5.466,5.466,0,0,1,2.41,5.5a5.591,5.591,0,0,1,11.18,0,5.466,5.466,0,0,1-2.546,4.609A8.021,8.021,0,0,1,14.5,12.8,7.756,7.756,0,0,1,16,16.972,12.931,12.931,0,0,1,14.478,18ZM8,1.481A4.056,4.056,0,0,0,3.915,5.5a4.085,4.085,0,0,0,8.17,0A4.056,4.056,0,0,0,8,1.481Z" transform="translate(1119 23)"/>
                            </g>
                            <rect width="24" height="24" transform="translate(141 1738)" fill="none"/>
                        </g>
                    </svg>
                </div>
                <div className={`header-user_area--info_wrapper ${(active)?"active":""}`} onClick={handleClick}>
                <div className="header-user_area--info">{username}</div>
            </div>
        </div>
    <div className={`header-user_area--dropdown ${(active)?"active":""}`}>

    <ul>
        <li><Link href='/profile'>Profile Info</Link></li>
        <li>Change Password</li>
    </ul>
    <footer>

        <button className="logOut-btn" onClick={() => handleLogOut()}>
          <span className="logOut-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <g transform="translate(-0.208)">
              <rect width="20" height="20" transform="translate(0.208)" fill="none"/>
              <path d="M11.162,11.577v1.181A2.365,2.365,0,0,1,8.8,15.122H2.863A2.365,2.365,0,0,1,.5,12.759V2.363A2.365,2.365,0,0,1,2.863,0H8.8a2.365,2.365,0,0,1,2.363,2.363V3.544a.591.591,0,0,1-1.181,0V2.363A1.183,1.183,0,0,0,8.8,1.181H2.863A1.183,1.183,0,0,0,1.681,2.363v10.4A1.183,1.183,0,0,0,2.863,13.94H8.8a1.183,1.183,0,0,0,1.181-1.181V11.577a.591.591,0,0,1,1.181,0ZM15.19,6.546,13.867,5.223a.591.591,0,0,0-.835.835L13.972,7H6.88a.591.591,0,1,0,0,1.181h7.093l-.941.941a.591.591,0,1,0,.835.835L15.19,8.635A1.478,1.478,0,0,0,15.19,6.546Zm0,0" transform="translate(2.513 2.439)" fill="#fff" stroke="#fff" strokeWidth="0.5"/>
            </g>
          </svg></span>
            <span>Log Out</span>
        </button>
    </footer>
</div>
</div>
    )
}

