import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import {cookies} from "next/headers";
import {AUTH_COOKIE_KEY} from "@/constants";
import {redirect} from "next/navigation";

export default function DashboardLayout({ children }) {
    const cookieStore = cookies();
    console.log(cookieStore.get(AUTH_COOKIE_KEY));
    if(cookieStore.get(AUTH_COOKIE_KEY) === undefined) {
      redirect("/login");
    }

    return (
        <div className="wrapper">
            <Header/>
            <main className="content container-center">
                {children}
            </main>
            <Footer/>
        </div>
    );
}