'use client'
import Modal from "../../modal/Modal";
import UserForm from "./UserForm";
import {useState} from "react";
import {IUser} from "../../../../interfaces";

export default function EditBtn({user}: {user: IUser}){
    const [modal, setModal] = useState(false);
    const openModal = (isOpen: boolean)=> {
        setModal( () => isOpen);
    }
    return (
        <>
        <button onClick={() => openModal(true)}>
            <svg fill="#000000" width="15px" height="15px" viewBox="0 0 16 16"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.8 2.2a2.51 2.51 0 0 0-3.54 0l-6.9 6.91-1.76 3.62a1.26 1.26 0 0 0 1.12 1.8 1.23 1.23 0 0 0 .55-.13l3.62-1.76 6-6 .83-.82.06-.06a2.52 2.52 0 0 0 .02-3.56zm-.89.89a1.25 1.25 0 0 1 0 1.77l-1.77-1.77a1.24 1.24 0 0 1 .86-.37 1.22 1.22 0 0 1 .91.37zM2.73 13.27 4.29 10 6 11.71zm4.16-2.4L5.13 9.11 10.26 4 12 5.74z"/>
            </svg>
        </button>
        {
            modal &&
            <Modal modalTitle="Edit User" openModal={openModal} >
                <UserForm userData={user}/>
            </Modal>
        }
        </>
    )
}