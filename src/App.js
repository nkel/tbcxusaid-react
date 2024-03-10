import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
        <div className="header">
          <div className="header-container container-center">
              <div className="header-logo">
                  <img src={logo} alt="logo" />
                  <h1>React App</h1>
              </div>
              <nav className="nav-menu menu">
                  <ul>
                      <li className="menu-item active"><a href=""> Home </a></li>
                      <li className="menu-item"><a href=""> About </a></li>
                      <li className="menu-item"><a href=""> products </a></li>
                      <li className="menu-item"><a href=""> News </a></li>
                      <li className="menu-item"><a href=""> Contact </a></li>
                  </ul>
              </nav>
              <div className="header-lang">
              <img src="assets/images/geo-flag.png" alt=""/>
              </div>
          </div>
      </div>
        <main className="container-center">
            <div className="news">
                <h2 className="news-title">News</h2>
                <div className="news-items">
                    <div className="news-item">
                        <div className="news-item--content">
                            <div className="news-item--img">
                                <img
                                    src="https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM="
                                    alt=""/>
                            </div>
                            <h3 className="news-item--title">news 1</h3>
                            <div className="news-item--desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                consectetur consequatur delectus dolor eum excepturi illo ipsum iste minus modi nesciunt
                                nisi nobis obcaecati quidem recusandae tempora, temporibus totam ut.
                            </div>
                        </div>
                    </div>
                    <div className="news-item">
                        <div className="news-item--content">
                            <div className="news-item--img">
                                <img
                                    src=" https://www.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg" alt=""/>
                            </div>
                            <h3 className="news-item--title">news 2</h3>
                            <div className="news-item--desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                consectetur consequatur delectus dolor eum excepturi illo ipsum iste minus modi nesciunt
                                nisi nobis obcaecati quidem recusandae tempora, temporibus totam ut.
                            </div>
                        </div>
                    </div>
                    <div className="news-item">
                        <div className="news-item--content">
                            <div className="news-item--img">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL4fdhN05GkLF6pj6O7cM5d-d1AKremGI8UkSimKKkLQ&s"
                                    alt=""/>
                            </div>
                            <h3 className="news-item--title">news 3</h3>
                            <div className="news-item--desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                consectetur consequatur delectus dolor eum excepturi illo ipsum iste minus modi nesciunt
                                nisi nobis obcaecati quidem recusandae tempora, temporibus totam ut.
                            </div>
                        </div>
                    </div>
                    <div className="news-item">
                    <div className="news-item--content">
                        <div className="news-item--img">
                            <img
                                src="https://media.gettyimages.com/id/1367702441/photo/breaking-news-logo-in-3d.jpg?s=612x612&w=gi&k=20&c=7yD5ivCZ_pTMjTIR1RV2R-puqiRze948ozE1WEC-eMM="
                                alt=""/>
                        </div>
                        <h3 className="news-item--title">news 4</h3>
                        <div className="news-item--desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                            consectetur consequatur delectus dolor eum excepturi illo ipsum iste minus modi nesciunt
                            nisi nobis obcaecati quidem recusandae tempora, temporibus totam ut.
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="newsletter">
                <h3>Newsletter</h3>
                <span> Stay uo tp date with our latest news</span>
                <form>
                    <input type="text" placeholder="Your email address"/>
                    <button> subscribe</button>
                </form>
            </div>
        </main>
        <footer className="footer">
            <div className="container-center">
                <div className="footer-logo">
                    <img src={logo} alt=""/>
                    © All Right Reserved
                </div>
                <div className="footer-nav">
                    <ul>
                        <li><a href="">Terms & Conditions</a></li>
                        <li><a href="">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
  );
}

export default App;
