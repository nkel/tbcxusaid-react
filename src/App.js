import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Products from "./components/pages/Products";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import Profile from "./components/pages/Profile";

function App() {
  return (
      <BrowserRouter>
      <div className="wrapper">
          <Header/>
          <main className="content container-center">

                  <Routes>
                      <Route index element={<Home />}/>
                      <Route path="/" element={<Home />}/>
                      <Route path="/products" element={<Products />}/>
                      <Route path="/Blog" element={<Blog />}/>
                      <Route path="/contact" element={<Contact />}/>
                      <Route path="/profile" element={<Profile />}/>
                  </Routes>
          </main>
          <Footer/>
      </div>
    </BrowserRouter>
);
}

export default App;
