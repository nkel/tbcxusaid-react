import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Newsletter from "./components/newletter/Newsletter";
import articles from "./fakeData/articles";
import Article from "./components/article/Article";

function App() {
  return (
    <>
        <Header />
        <main className="container-center">
            <div className="article">
                <h2 className="article-title">News</h2>
                <div className="article-items">
                { articles.map(article => <Article img={article.img} title={article.title} desc={article.desc} />)}
                </div>
            </div>
        <Newsletter />
        </main>
        <Footer />
    </>
  );
}

export default App;
