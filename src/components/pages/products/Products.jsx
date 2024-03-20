import "./Products.css";
import Search from "../../search/Search";
import products from "../../../fakeData/products";
import Product from "../../product/Product";
function Products(){
    return(
        <>
          <Search />
          <div className="products">
              <h2>Products</h2>
              <div className="product-list scrollable">
                  { products.map(product => <Product img={product.img} title={product.title} desc={product.desc} />)}
              </div>
          </div>
        </>
     );
}
export default Products;