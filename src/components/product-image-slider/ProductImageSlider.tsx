'use client';

import "./ProductImageSlider.css";
import {useState} from "react";
function ProductImageSlider({images}: {images: string[] }) {

     const [bigImage, setBigImage] = useState(images[0]);
     const handleClick = (e: any ) => {
         setBigImage(prevState => prevState = e.target.src);
     }

    return (
    <div className="image-gallery">
        <div className="big-img">
            <img src={bigImage} alt=""/>
        </div>
        <div className="image-list">
            {
               images.map( (src,index) => (
                    <div className="image-list--item" key={index}>
                        <img src={src} alt="" onClick={handleClick}/>
                    </div>
                   )
               )
            }
        </div>
    </div>
    )
}

export default ProductImageSlider;