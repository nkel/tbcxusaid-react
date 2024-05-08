import {cookies} from "next/headers";
import {AUTH_COOKIE_KEY, AUTH_COOKIE_USERNAME} from "../../constants";
import {redirect} from "next/navigation";

export async function login(username, password){
    const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username,
            password,
        })
    })
     const user = await response.json();

     const cookieStore = cookies();
     if(!user.message){
         cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user.token) );
         cookieStore.set(AUTH_COOKIE_USERNAME, JSON.stringify(`${user.firstName}  ${user.lastName}`) );
         redirect("/")
     }
}

export async function logOut(){
    const cookieStore = cookies();
    if(cookieStore.get(AUTH_COOKIE_KEY)){
        cookieStore.delete(AUTH_COOKIE_KEY);
        redirect("/login", "replace")
    }
}