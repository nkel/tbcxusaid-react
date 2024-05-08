import "./BlogItem.css";
import Link from "next/link";
import Button from "../button/Button";
import IRecipes from "../../interfaces";

function BlogItem({ id, name, description , image } : IRecipes){
    return (

            <div className="blog-item" key={id}>
                <div className="blog-item--content">
                    <div className="blog-img">
                        <img src={image} alt=""/>
                    </div>
                    <div className="blog-info">
                        <header>
                            <h3>{name}</h3>
                        </header>
                        <div className="blog-desc"> {description} </div>
                        <Link href={`/blog/${id}`}>
                            <Button text="Read More" />
                        </Link>

                    </div>
                </div>
            </div>
        );
}
export default BlogItem;