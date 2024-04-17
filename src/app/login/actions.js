import {cookies} from "next/headers";
import {AUTH_COOKIE_KEY} from "@/constants";
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
         cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user) );
         redirect("/")
     }
}

export function logOut(){
    if(cookieStore.get(AUTH_COOKIE_KEY)){
        cookieStore.delete(AUTH_COOKIE_KEY);
        redirect("/login")
    }
}