import { FaRegStar, FaStar } from "react-icons/fa";
import '../Products/Product.css';
import React, { useState } from "react";


const Product = (props) => {
    const { category, name, price } = props;
    const [active, setActive] = useState(0);
    return (
        <div className="product">
            <p className='category'>{category}</p>
            <h6>{name}</h6>
            <div className="stars">
                {active >= 1 ? (
                <FaStar onClick={() => setActive(1)} />
                ) : (
                <FaRegStar onClick={() => setActive(1)} />
                )}
                {active >= 2 ? (
                <FaStar onClick={() => setActive(2)} />
                ) : (
                <FaRegStar onClick={() => setActive(2)} />
                )}
                {active >= 3 ? (
                <FaStar onClick={() => setActive(3)} />
                ) : (
                <FaRegStar onClick={() => setActive(3)} />
                )}
                {active >= 4 ? (
                <FaStar onClick={() => setActive(4)} />
                ) : (
                <FaRegStar onClick={() => setActive(4)} />
                )}
                {active >= 5 ? (
                <FaStar onClick={() => setActive(5)} />
                ) : (
                <FaRegStar onClick={() => setActive(5)} />
                )}
                </div>
            <p className='price'>{price}$</p>
        </div>
    )
}

export default Product;