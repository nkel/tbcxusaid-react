import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Products from "./components/pages/products/Products";
import Contact from "./components/pages/contact/Contact";

function App() {
  return (
      <div className="wrapper">
          <Header/>
          <main className="content container-center">
              <BrowserRouter>
                  <Routes>
                      <Route index element={<Home />}/>
                      <Route path="/" element={<Home />}/>
                      <Route path="/products" element={<Products />}/>
                      <Route path="/contact" element={<Contact />}/>
                  </Routes>
              </BrowserRouter>
          </main>
          <Footer/>
      </div>
);
}

export default App;
