import ProfileAside from "../profileAside/ProfileAside";
import { Route, Routes} from "react-router-dom";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
function Profile(){
    return (
        <div className="flex justify-between">
            <div className="w-3/12">
                <ProfileAside />
            </div>
            <div className="w-8/12">
                <Routes>
                    <Route path="/" element={<ProfileInfo />}/>
                </Routes>
            </div>
        </div>
    );
}
export default  Profile;