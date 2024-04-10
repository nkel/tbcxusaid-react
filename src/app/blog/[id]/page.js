
async function getBlog(id) {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    return await response.json();
}

async function BlogDetails({ params: { id } }){
    const blogItem = await getBlog(id);

    return (
        <>
            <div className="flex page-detail flex-col">
                <h2 className="font-bold text-3xl uppercase mb-12 text-bg-20 text-center">
                    {blogItem.name}
                </h2>
                <div className="h-[300px] overflow-hidden rounded-2xl w-full mb-10">
                    <img src={blogItem.image} alt="" className="w-full h-[300px] object-cover"/>
                </div>

                <div className="text-lg">
                    {blogItem.instructions}
                </div>
                <h3 className="font-bold uppercase mt-4">Ingredientes</h3>
                <ul className="flex justify-start flex-wrap">
                    { blogItem.ingredients.map(item => <li className="btn bg-warning mr-3 mt-4 text-nowrap">{item}</li> ) }
                </ul>
            </div>
        </>
    )
        ;
}

export default BlogDetails;