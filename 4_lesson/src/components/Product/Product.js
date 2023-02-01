import React from 'react';
import PropTypes from "prop-types";
import Button from './Button/Button';
import './Product.css'
import { useState } from 'react';

const Product = ({ image, title, price, description, availability, category }) => {
    const [count, setCount] = useState(0);
    const checkCount = (count) => {
      if(count > availability){
        return "We don't have that many items in stock"
      } else if(count < 0){
        return "You can't add a negative number"
      }
    }

    const error = checkCount(count);

  return (
    <div className='productBlock'>
      <div className='left'><img src={image} alt='image' /></div>
      <div className='right'>
          <h2>{title}</h2>
          <h4>{price}$</h4>
          <p>{description}</p>
          <p><span style={{fontWeight: '700'}}>Availability:</span> <span style={{color: 'green'}}>{availability} in stock</span></p>
          <div className='count'>
              <button className='plusminus' onClick={() => setCount(count - 1)}>-</button>
              <p className='result'>{count}</p>
              <button className='plusminus' onClick={() => setCount(count + 1)}>+</button>
              <Button></Button>
              <p className='error'>{error}</p>
          </div>
          <p>Category: {category}</p>
      </div>
    </div>
  )
}

Product.propTypes = {
    price: PropTypes.number,
    availability: PropTypes.number
}

export default Product;