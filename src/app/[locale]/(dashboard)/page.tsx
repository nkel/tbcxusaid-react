
import Article from "../../../components/article/Article";
import Newsletter from "../../../components/newletter/Newsletter";
import {IArticle} from "../../../interfaces";
import {Fragment} from "react";

async function getArticle() {
    const response = await fetch("https://dummyjson.com/posts?limit=32");
    const data = await response.json()
    return data.posts;
}
export default async  function Home() {
  const article = await getArticle();
  return (
      <Fragment key='homePage'>
      <div className="mt-12">
          <Newsletter />
      </div>
        <div className="article mt-3 mb-3">
          <h2 className="article-title mb-4 mt-10 text-3xl dark:text-w">News</h2>
          <div className="article-items">
            { article.map( (article: IArticle) => <Article id={article.id} title={article.title} desc={article.body} key={article.id}/>)}
          </div>
        </div>

      </Fragment>
  );
}
