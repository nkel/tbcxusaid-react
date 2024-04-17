import "./pageDetail.css";
import Stars from "@/components/stars/Stars";
import ProductImageSlider from "@/components/product-image-slider/ProductImageSlider";
async function getProduct(id) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    return await response.json();
}

async function ProductDetails({ params: { id } }){
    const product = await getProduct(id);

    return (
        <>
            <div className="flex justify-between items-start product-detail">
                <div className="w-4/12">
                   <ProductImageSlider images={product.images}/>
                </div>
                <div className="w-8/12">
                    <div className="page-detail--info">
                        <h2 className="title">
                            {product.title}
                            <Stars rating={product.rating}/>
                        </h2>
                        <div className="description">
                            {product.description}
                        </div>
                        <div className="prices">
                            <span> Product Price - <span className="btn bg-primary">{product.price} ₾</span></span>
                            <span> In-Stock <span className="btn bg-warning"> {product.stock} Item </span> </span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="font-bold mt-4"> Category - <span
                                className="btn bg-bg-20 mr-4">  {product.category}</span>
                            </span>
                            <span className="font-bold"> Brand - <span
                                className="btn bg-error mr-4"> {product.brand}</span></span>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
        ;
}

export default ProductDetails;