import Search from "../search/Search";
import products from "../../fakeData/products";
import Product from "../product/Product";
function Products(){
    return(
        <>
          <Search />
          <div className="products pt-12 pb-12">
              <h2 className="text-center text-2xl pb-4">Products</h2>
              <div className="product-list scrollable -ml-3 -mr-3 flex justify-start flex-wrap h-450 overflow-y-scroll">
                  { products.map(product => <Product img={product.img} title={product.title} desc={product.desc} />)}
              </div>
          </div>
        </>
     );
}
export default Products;