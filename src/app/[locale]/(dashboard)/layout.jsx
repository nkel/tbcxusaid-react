import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {AUTH_COOKIE_KEY} from "../../../constants";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

export default function DashboardLayout({ children }) {
    const cookieStore = cookies();
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