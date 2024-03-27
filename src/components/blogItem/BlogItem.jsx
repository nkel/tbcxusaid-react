import "./BlogItem.css";
import Button from "../button/Button";
function BlogItem({ id, title, description , image, created_at }){
    return (

            <div className="blog-item" key={id}>
                <div className="blog-item--content">
                    <div className="blog-img">
                        <img src={image} alt=""/>
                    </div>
                    <div className="blog-info">
                        <header>
                            <h3>{title}</h3>
                            <time>{(new Date(created_at)).toLocaleDateString()}</time>
                        </header>
                        <div className="blog-desc"> {description} </div>
                        <div className="btn">
                            <Button text="სრულად" />
                        </div>
                    </div>
                </div>
            </div>
        );
}
export default BlogItem;