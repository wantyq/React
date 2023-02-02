import axios from "axios";
import { createContext, useState, useEffect } from "react";

const ProductContext = createContext();

const transformData = (products) => {
    return products.map((product) => ({
      ...product, image: "product.image", 
      name: "name", 
    }));
  };

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
         .get(`http://localhost:8080/api/xml-data`)
         .then((response) => {
            const transformedData = transformData(response.data.products.product);
            setProducts(transformedData);
            setIsLoading(false);
         })
         .catch((error) => {
            console.error("Products:", error);
         });
    }, []);

    return (
        <ProductContext.Provider value={{ products, isLoading }}>
          {children}
        </ProductContext.Provider>
      )
    }
    
    export { ProductContext, ProductProvider };