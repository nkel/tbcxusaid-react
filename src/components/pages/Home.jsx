import articles from "../../fakeData/articles";
import Article from "../article/Article";
import Newsletter from "../newletter/Newsletter";

function Home(){
    return (
                <>
                <div className="article mt-3 mb-3">
                    <h2 className="article-title mb-4 text-3xl">News</h2>
                    <div className="article-items">
                        { articles.map(article => <Article img={article.img} title={article.title} desc={article.desc} />)}
                    </div>
                </div>
                <Newsletter />
                </>
    );
}
export default Home;