import Button from "../button/Button";

function ProfileInfo() {
    return (
        <div className="contactForm flex flex-col items-stretch justify-stretch w-7/12">
            <label className="mb-2">First Name</label>
            <input type="text" value="David"
                   className="bg-w pt-2 pb-2 mb-5 border-gray-97 border border-opacity-30 rounded-md pl-4 pr-4"/>
            <label className="mb-2">Last Name</label>
            <input type="text" value="Agmashenebeli"
                   className="bg-w pt-2 pb-2 mb-5 border-gray-97 border border-opacity-30 rounded-md pl-4 pr-4"/>
            <label className="mb-2">Password</label>
            <input type="password" className="bg-w pt-2 pb-2 mb-5 border-gray-97 border border-opacity-30 rounded-md pl-4 pr-4"/>
            <label className="mb-2">Comfirm Password</label>
            <input type="password" className="bg-w pt-2 pb-2 mb-5 border-gray-97 border border-opacity-30 rounded-md pl-4 pr-4"/>
            <Button text='Save' className="w-3/12 mt-4"/>
        </div>
    );
}

export default ProfileInfo;