'use client'
import {useState} from "react";
import {BASE_URL} from "../../../../../api";
import {IUser} from "../../../../interfaces";

export default function UserForm({userData}: {userData?: IUser}){
    const [user, setUser] = useState((): IUser => {
        if(userData){
            return userData;
        }else{
            return {
                id: 0,
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        }
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }


    const addUser = async (formData: FormData)=> {
        const {name, email, password} = Object.fromEntries(formData);
        const response = await fetch(BASE_URL+'api/users/create-user', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
        });

    }
    const updateUser = async (formData: FormData)=> {
        const { name, userId} = Object.fromEntries(formData);
        const response = await fetch(BASE_URL+'api/users/update-user', {
            method: 'POST',
            body: JSON.stringify({ name, userId }),
        });
    }

    return (
        <form action={userData? updateUser : addUser }>
            <div className="input-field required">
                <label> Username </label>
                <input type="text" required value={user.name} onChange={handleChange} name='name'/>
            </div>
            <div className="input-field required">
                <label> Email </label>
                <input type="email" required value={user.email} onChange={handleChange} name='email' />
            </div>
            <div className="input-field required">
                <label> Password </label>
                <input type="password" required value={user.password} onChange={handleChange} name='password'/>
            </div>
            <div className="input-field required">
                <label> Confirm Password </label>
                <input type="password" required value={user.confirmPassword} onChange={handleChange} name='confirmPassword'/>
            </div>
            {userData && <input type="hidden" value={user.id} name='userId'/>}

            <button className='formSubmit' type='submit'>{userData?"Update User":"Add User"}</button>
        </form>
    )
}