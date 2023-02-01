import { useContext } from "react";
import { ProductContext } from "./contexts/ProductContext";
import { getUniqueArrayItems } from "./utils/array";
import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: space-between;
`; 

const ProductItem = styled.div`
  width: 24%;
  img {
    width: 100%;
    height: 100%;
  }
`;
 
const App = () => {
  const { products } = useContext(ProductContext);
  const uniqCategories = getUniqueArrayItems(
    products.map((product) => product.type)
  );
  const categories = uniqCategories.map((category) => ({
    category,
    image: products.find((product) => product.type === category).picUrl || "",
  }));
  console.log(categories);
  return <div>
    <ProductContainer>
      {categories.map(cateogry => <ProductItem key={cateogry.name}>{category.name}</ProductItem>)}
      <img src={JSON.parse(cateogry.image)[0]} alt={category.name}/>
    </ProductContainer>
  </div>;
};
 
export default App;
