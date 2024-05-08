import IRecipes from "../../../../../interfaces";
import Image from "next/image";

export async function generateStaticParams(){
    const response = await fetch(`https://dummyjson.com/recipes`)
    const recipes = await response.json();

    const paths = recipes.recipes.map((recept: IRecipes) =>({
        params: {id: `/blog/${recept.id}`}
    }))
    return paths;

}

async function getBlog(id:number) {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    return await response.json();
}

async function BlogDetails({ params: { id } } : {params: {id: number}}){
    const blogItem = await getBlog(id);

    return (
        <>
            <div className="flex page-detail flex-col" key={blogItem.id}>
                <h2 className="font-bold text-3xl uppercase mb-12 text-bg-20 text-center dark:text-gray-f2">
                    {blogItem.name}
                </h2>
                <div className="h-[300px] overflow-hidden rounded-2xl w-full mb-10">
                    <Image
                        src={blogItem.image}
                        alt=""
                        width={500}
                        height={300}
                        className="w-full h-[300px] object-cover"
                    />
                </div>

                <div className="text-lg dark:text-w">
                    {blogItem.instructions}
                </div>
                <h3 className="font-bold uppercase mt-4 dark:text-gray-f2">Ingredientes</h3>
                <ul className="flex justify-start flex-wrap">
                    { blogItem.ingredients.map( ( item: string[] ) => <li className="btn bg-warning mr-3 mt-4 text-nowrap">{item}</li> ) }
                </ul>
            </div>
        </>
    )
        ;
}

export default BlogDetails;