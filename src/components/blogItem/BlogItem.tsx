import "./BlogItem.css";
import Link from "next/link";
import Button from "../button/Button";
import {IRecipes} from "../../interfaces";
import Image from "next/image";

function BlogItem({ id, name, instructions , image } : IRecipes){
    return (

            <div className="blog-item" key={id}>
                <div className="blog-item--content">
                    <div className="blog-img">
                        <Image
                            src={image}
                            alt=""
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="blog-info">
                        <header>
                            <h3>{name}</h3>
                        </header>
                        <div className="blog-desc"> {instructions} </div>
                        <Link href={`/blog/${id}`}>
                            <Button text="Read More" />
                        </Link>

                    </div>
                </div>
            </div>
        );
}
export default BlogItem;