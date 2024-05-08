import "./BlogItem.css";
import Button from "@/components/button/Button";
import Link from "next/link";

function BlogItem({ id, name, description , image }){
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