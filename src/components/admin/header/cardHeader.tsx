'use client'
import Modal from "../modal/Modal";
import UserForm from "../form/user/UserForm";
import {useState} from "react";

export default function CardHeader( {cardTitle, cardBtnTxt }:{cardTitle:string, cardBtnTxt:string} ){
    const [modal, setModal] = useState(false);
    const openModal = (isOpen: boolean)=> {
        setModal( () => isOpen);
    }
    return (
        <>
        <div className="card-header">
            <h2>{cardTitle}</h2>
            <button className="bg-primary btn" onClick={() => openModal(true)}> Add {cardBtnTxt}</button>
        </div>
        {
            modal &&
            <Modal modalTitle="Add User" openModal={openModal} >
                <UserForm/>
            </Modal>
        }
        </>
)
}