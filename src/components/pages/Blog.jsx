import blogItems from "../../fakeData/blog";
import BlogItem from "../blogItem/BlogItem";

function Blog(){
    return (
      <div className="blog-wrapper pt-12 pb-12">
          <h2 className="text-center text-2xl pb-10">Blog</h2>
          <div className="blog-list flex justify-start items-center flex-wrap">
              { blogItems.map((item) => <BlogItem id={item.id} title={item.title} image={item.image} description={item.description} created_at={item.created_at} /> )}
          </div>
      </div>
    );
}
export default Blog;
