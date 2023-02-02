import React, { useContext } from 'react'
import styled from 'styled-components';
import { ProductContext } from '../../contexts/ProductContext'
import { getUniqueArrayItems } from '../../utils/array';
import ProductCategory from './ProductCategory';

const ProductContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: flex-start;
`;


const Home = () => {
  const {products} = useContext(ProductContext);
  console.log(products);

  const uniqCategories = getUniqueArrayItems(
    products.map((product) => product.type));

  const categories = uniqCategories.map(category => ({
    name: category, 
    image: products.find((product) => product.type === category).picUrl || "",}));

    console.log(categories);
  return (
    <Container>
      <ProductContainer>
        {categories.map((category) => {
          return <ProductCategory 
          key={category.name} 
          name={category.name} 
          image={category.image[0]} />
        })}
      </ProductContainer>
    </Container>
  );
};

export default Home;