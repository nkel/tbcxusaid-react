import './Product.css';
import Link from "next/link";
import {IProduct} from "../../interfaces";
import Image from "next/image";
function Product({id, price, thumbnail, title, description, stock }: IProduct){
    return (
        <div className="product-item" key={id}>
            <Link href={`/products/${id}`} >
            <div className="product-item--content">
                <div className="product-item--img">
                    <Image
                        src={thumbnail}
                        width={500}
                        height={300}
                        alt={title}
                        className="w-full h-[300px] object-cover"
                    />
                </div>
                <h3 className="product-item--title">{title}</h3>
                <div className="product-item--desc">{description}</div>
                <div className="flex justify-between items-center">
                    <span className="product-item--price"><small>₾</small>{price}</span>
                    <span className="product-item--stock text-gray-70">In Stock - <span className="text-primary">{stock}</span></span>
                </div>

                <button className="btn-add">
                    <span>Add To Cart</span>
                    <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.5 9.5L18.7896 6.89465C18.5157 5.89005 18.3787 5.38775 18.0978 5.00946C17.818 4.63273 17.4378 4.34234 17.0008 4.17152C16.5619 4 16.0413 4 15 4M4.5 9.5L5.2104 6.89465C5.48432 5.89005 5.62128 5.38775 5.90221 5.00946C6.18199 4.63273 6.56216 4.34234 6.99922 4.17152C7.43808 4 7.95872 4 9 4"
                            stroke="#fff" strokeWidth="1.5"/>
                        <path
                            d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4C15 4.55228 14.5523 5 14 5H10C9.44772 5 9 4.55228 9 4Z"
                            stroke="#fff" strokeWidth="1.5"/>
                        <path d="M8 13V17" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M16 13V17" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M12 13V17" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path
                            d="M3.864 16.4552C4.40967 18.6379 4.68251 19.7292 5.49629 20.3646C6.31008 21 7.435 21 9.68486 21H14.3155C16.5654 21 17.6903 21 18.5041 20.3646C19.3179 19.7292 19.5907 18.6379 20.1364 16.4552C20.9943 13.0234 21.4233 11.3075 20.5225 10.1538C19.6217 9 17.853 9 14.3155 9H9.68486C6.14745 9 4.37875 9 3.47791 10.1538C2.94912 10.831 2.87855 11.702 3.08398 13"
                            stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                </button>
            </div>
            </Link>
        </div>
    );
}

export default Product;