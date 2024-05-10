import "./Modal.css"
import { ReactElement} from "react";
export default function  Modal({modalTitle, children, openModal }: {modalTitle: string, children: ReactElement, openModal(isOpen: boolean):void }){
    return (
        <div className="modal-wrapper">
            <div className="modal">
                <div className="modal-head">
                    <h3>{modalTitle}</h3>
                    <button className="modal-close" onClick={()=>openModal(false)}>
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
                    {children}
                </div>
            </div>
        </div>
    )
}