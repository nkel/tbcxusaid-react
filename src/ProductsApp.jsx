import "./ProductsApp.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Search from "./components/search/Search";
import products from "./fakeData/products";
import Product from "./components/product/Product";
function ProductsApp(){
    return(
      <div className="productPage">
          <Header />
          <div className="content container-center">
              <Search />
              <div className="products">
                  <h2>Products</h2>
                  <div className="product-list scrollable">
                      { products.map(product => <Product img={product.img} title={product.title} desc={product.desc} />)}
                  </div>

              </div>
          </div>
          <Footer />
      </div>
    );
}
export default ProductsApp;