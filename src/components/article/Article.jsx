import "./Article.css";
function Article({ img, title, desc }){
    return (
        <div className="article-item">
            <div className="article-item--content">
                <div className="article-item--img">
                    <img
                        src={img.src}
                        alt={img.alt }/>
                </div>
                <h3 className="article-item--title">{title}</h3>
                <div className="article-item--desc">{desc}</div>
            </div>
        </div>
    );
}

export default Article;