import "./Article.css";
import Image from "next/image";
const imageLinks = ['https://cdn.dummyjson.com/product-images/1/1.jpg', "https://cdn.dummyjson.com/product-images/1/2.jpg", "https://cdn.dummyjson.com/product-images/1/3.jpg", "https://cdn.dummyjson.com/product-images/1/4.jpg"]
function Article({ id, title, desc }: {id: number, title: string, desc: string}){
    return (
        <div className="article-item" key={id}>
            <div className="article-item--content">
                <div className="article-item--img">
                    <Image
                        src={imageLinks[Math.floor(Math.random()*4)]}
                        alt={title }
                        width={180}
                        height={37}
                    />
                </div>
                <h3 className="article-item--title">{title}</h3>
                <div className="article-item--desc">{desc}</div>
            </div>
        </div>
    );
}

export default Article;