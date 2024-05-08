import ProfileAside from "../../../../components/profileAside/ProfileAside";
import ProfileInfo from "../../../../components/ProfileInfo/ProfileInfo";

export default  function Profile(){
    return (
        <div className="flex justify-between">
            <div className="w-3/12">
                <ProfileAside />
            </div>
            <div className="w-8/12">
                    <ProfileInfo />
            </div>
        </div>
    );
}