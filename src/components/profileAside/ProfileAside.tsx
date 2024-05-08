import "./ProfileAside.css";
import Link from "next/link";
function ProfileAside(){
    return (
        <div className="profile-aside" >
            <div className="profile-header">
                <div className="profile-cover">
                    <img src="https://covertimeline.com/app/template/587.jpg" alt="" />
                </div>
                <div className="profile-area">
                    <div className="profile-area--user_wrapper">
                        <div className="profile-area--user">
                            <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 24 24">
                                <g transform="translate(-141 -1738)">
                                    <g transform="translate(-974 1718)">
                                        <path d="M14.476,18h0c.02-.2.03-.4.03-.6A6.461,6.461,0,0,0,8,11a6.461,6.461,0,0,0-6.506,6.4c0,.2.01.4.029.6A12.782,12.782,0,0,1,0,16.972,7.758,7.758,0,0,1,1.5,12.8a8.021,8.021,0,0,1,3.459-2.692A5.466,5.466,0,0,1,2.41,5.5a5.591,5.591,0,0,1,11.18,0,5.466,5.466,0,0,1-2.546,4.609A8.021,8.021,0,0,1,14.5,12.8,7.756,7.756,0,0,1,16,16.972,12.931,12.931,0,0,1,14.478,18ZM8,1.481A4.056,4.056,0,0,0,3.915,5.5a4.085,4.085,0,0,0,8.17,0A4.056,4.056,0,0,0,8,1.481Z" transform="translate(1119 23)"/>
                                    </g>
                                    <rect width="24" height="24" transform="translate(141 1738)" fill="none"/>
                                </g>
                            </svg>
                        </div>
                        <button className="edit-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                                <path d="M15.081,24.61l1.975,1.924,3.8-3.932-1.975-1.923Z" transform="translate(-13.271 -18.301)" fill="#fff"/>
                                <path d="M3.783,73.117l-2.66-2.582L0,74.176Z" transform="translate(0 -64.176)" fill="#fff"/>
                                <path d="M0,100.869" transform="translate(0 -90.869)" fill="#01c26e"/>
                                <path d="M65.221,0,63.5,1.773l2.66,2.582,1.721-1.774Z" transform="translate(-57.881)" fill="#fff"/>
                            </svg>
                        </button>
                    </div>
                    <h3 className="profile-area--userName"> David agmashenebeli </h3>
                </div>
            </div>
            <nav className="profile-nav">
                <ul>
                    <li className="profile-nav--item">
                        <Link href="/profile">Profile Info</Link>
                        <Link href="/profile/change-password">Change Password</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default ProfileAside;