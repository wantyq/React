import React from 'react';
import PropTypes from "prop-types";
import { useState } from 'react';

const Product = ({ image, title, price, description, availability, category }) => {
    const [count, setCount] = useState(0);
  return (
    <div className='productBlock'>
        <img src={image} alt='image' />
        <h2>{title}</h2>
        <h4>{price}</h4>
        <p>{description}</p>
        <p>Availability: {availability}</p>
        <div>
            <button onClick={() => setCount(count - 1)}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <p>Category: {category}</p>
    </div>
  )
}

Product.propTypes = {
    price: PropTypes.number,
    availability: PropTypes.number
}

export default Product;