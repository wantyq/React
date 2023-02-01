import React, { useState, useEffect } from 'react';
import axios from 'axios';
import xml2js from 'xml2js';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${process.env.REACT_APP_PROXY_URL}https://devinera.com/wp-content/uploads/woo-product-feed-pro/xml/SQlxGOe9FEwXekgPiVviPDWrD7vcZjRA.xml`);
      const xml = res.data;
      const parseString = xml2js.parseString;
      parseString(xml, (err, result) => {
        if (err) console.error(err);
        setProducts(result.products.product.map(p => p.title[0]));
      });
    };
    fetchData();
  }, []);

  return (
    <ul>
      {products.map(product => (
        <li key={product}>{product}</li>
      ))}
    </ul>
  );
}

export default App;
