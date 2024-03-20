import "./Home.css";
import articles from "../../../fakeData/articles";
import Article from "../../article/Article";
import Newsletter from "../../newletter/Newsletter";
import Header from "../../header/Header";

function Home(){
    return (
                <>
                <div className="article">
                    <h2 className="article-title">News</h2>
                    <div className="article-items">
                        { articles.map(article => <Article img={article.img} title={article.title} desc={article.desc} />)}
                    </div>
                </div>
                <Newsletter />
                </>
    );
}
export default Home;