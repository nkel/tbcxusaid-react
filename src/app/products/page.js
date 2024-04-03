"use client";

import { useState } from "react";
import products from "@/fakeData/products";
import Button from "@/components/button/Button";
import Product from "@/components/product/Product";

function getProductList(productList = products){
    return productList.map(product => <Product id={product.id} price={product.price} image={product.image} title={product.title} description={product.description} color={product.color}/>);
}
export default  function Products(){
    const [productList, setProductList] = useState(getProductList);
    const [productQuantity, setProductQuantity] = useState(products.length);
    const colorObj =  Object.groupBy(products, ({color}) => color);
    const changeProductList = (filteredProducts) => {
        const filteredList = getProductList(filteredProducts);
        setProductList(filteredList);
        setProductQuantity(filteredProducts.length);
    }
    const handlerChange = e => {
        const filteredProducts = products.filter(product => product.price > e.target.min && product.price < e.target.max)
        changeProductList(filteredProducts);
    }
    const handlerClick = color => {
        const filteredProducts = products.filter(product => product.color === color)
        changeProductList(filteredProducts);
    }
    const handlerClickResetFilter = () => {
        changeProductList(products);
    }

    const debounce = (fn, delay = 1000) => {
        let timerId = null;
        return (...args) => {
            clearTimeout(timerId);
            timerId = setTimeout(() => fn(...args), delay);
        };
    };
    const handlerChangeSearch = debounce( (e) => {
        const filteredProducts = products.filter(product =>  product.title.toLowerCase().search(e.target.value.toLowerCase()) > -1 )
        changeProductList(filteredProducts);
    }, 1200 );

    return (
        <>
            <div className="flex justify-between items-start">
                <div className="w-3/12">
                    <div className="productFilter">
                        <h2 className="text-2xl mb-4">Filter Product</h2>
                        <div className="filter-item mb-8">
                            <h3 className="mb-2">By price</h3>
                            <div className="flex justify-start items-center">
                                <input type="radio" name="price" defaultChecked min="0" max="Infinity"
                                       onChange={handlerChange}/>
                                <label className="ml-4"> All </label>
                            </div>
                            <div className="flex justify-start items-center">
                                <input type="radio" name="price" min="0" max="20" onChange={handlerChange}/>
                                <label className="ml-4"> 0 - 20 </label>
                            </div>
                            <div className="flex justify-start items-center">
                                <input type="radio" name="price" min="21" max="50" onChange={handlerChange}/>
                                <label className="ml-4"> 21 - 50 </label>
                            </div>
                            <div className="flex justify-start items-center">
                                <input type="radio" name="price" min="51" max="70" onChange={handlerChange}/>
                                <label className="ml-4"> 51 - 70 </label>
                            </div>
                            <div className="flex justify-start items-center">
                                <input type="radio" name="price" min="71" max="Infinity" onChange={handlerChange}/>
                                <label className="ml-4"> 71+ </label>
                            </div>
                        </div>
                        <div className="filter-item">
                            <h3 className="mb-2">By Product Color</h3>
                            <div className="flex justify-between items-center flex-wrap">
                                { Object.keys(colorObj).map(key =>  <button style={{backgroundColor: key}} onClick={() => handlerClick(key)} className="flex w-5 h-5 mr-1 border"></button>) }
                            </div>
                        </div>
                        <div className="mt-10" onClick={handlerClickResetFilter}>
                            <Button text="Reset" />
                        </div>
                    </div>
                </div>
                <div className="w-8/12">
                    <div className="search bg-w pt-2 pb-2 mt-5 border-gray-97 border-opacity-30 rounded-md pl-4 pr-4">
                        <input type="text" placeholder="Search Product " className="w-10/12 pr-4" onChange={handlerChangeSearch}/>
                        <Button text='Search' className="w-2/12"/>
                    </div>

                    <div className="products pt-12 pb-12">
                        <header className="flex justify-between items-center">
                            <h2 className="text-center text-2xl pb-4">Products</h2>
                            <span
                                className="text-md bg-warning rounded-md flex justify-center items-center pl-4 pr-4 text-w">{productQuantity} - Items</span>
                        </header>

                        <div
                            className="product-list scrollable -ml-3 -mr-3 flex justify-start flex-wrap h-450 overflow-y-scroll">
                            {productList}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}