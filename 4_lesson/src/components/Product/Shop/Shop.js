import React from 'react'
import './Shop.css';
import { products } from "./const";
import { useState } from 'react';


const Shop = () => {

  const removeElement = (id) => {
    let item = document.getElementById(id);
    const findProduct = products.find(product => product.index === id);
    const index = products.indexOf(findProduct);
    products.splice(index, 1);
    item.remove();
  }

  return (
    <div className='container'>
        {products.map(product =>  <div className='product' id={product.index}>
            <img src={product.image} />
            <p>{product.title}</p>
            <p className='price'>${product.price}</p>
            <button className='deleteBtn' onClick={() => removeElement(product.index)}>Delete</button>
        </div>)}
    </div>
  )
}

export default Shop