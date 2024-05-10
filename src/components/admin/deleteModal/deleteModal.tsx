import './DeleteModal.css';
import {deleteUser} from "../../../../api";

export default function DeleteModal({ userId, modalTxt, openModal }: {userId: number, modalTxt: string, openModal(isOpen: boolean):void}) {
    const delUser = (userId: number) => {
        deleteUser(userId).then();
        openModal(false);
    }
    return(
    <div className="modal-wrapper">
        <div className="modal sm">
            <div className="modal-head">
                <h3>მომხმარებლის წაშლა</h3>
                <button className="modal-close" onClick={() => openModal(false)}>
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.16998 14.83L14.83 9.17004" stroke="#292D32" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.83 14.83L9.16998 9.17004" stroke="#292D32" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                              stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className="modal-content">
                <div className="text-center">
                    {modalTxt}
                    <div className="flex justify-center items-center mt-8">
                        <button className='deleteBtn' onClick={()=>delUser(userId)}>Delete</button>
                        <button className='backBtn' onClick={() => openModal(false)}>Back</button>
                    </div>
                </div>


            </div>
        </div>
    </div>
    )
}