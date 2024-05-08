
import BlogItem from "../../../../components/blogItem/BlogItem";
import {IRecipes} from "../../../../interfaces";

async function getBlog() {
    const response = await fetch("https://dummyjson.com/recipes");
    return await response.json();
}

export default async function Blog(){

    const blog = await getBlog();

    return (
        <div className="blog-wrapper pt-12 pb-12">
            <h2 className="text-center text-2xl pb-10 dark:text-w">Blog</h2>
            <div className="blog-list flex justify-start items-center flex-wrap">
                { blog.recipes.map((item: IRecipes) => <BlogItem id={item.id} name={item.name} image={item.image} instructions={item.instructions} /> )}
            </div>
        </div>
    );
}