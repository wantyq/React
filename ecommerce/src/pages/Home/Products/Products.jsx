import { useParams } from "react-router-dom"
import { ProductContext } from "../../../contexts/ProductContext";
import { useContext } from "react";
import styled from "styled-components";
import { capitalizeFirstLetter } from "../../../utils/string"; 
import Select from "react-select";

const ProductContainer = styled.div`
  display: grid;
  padding-left: 40px;
  padding-top: 40px;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
`;

const ProductItem = styled.div`
  margin: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #e7e3e1;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  img {
    flex-grow: 1;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductName = styled.p`
  /* margin: 0; */
`;

const ProductProperty = styled.p`
  margin-top: 0px;
  margin-bottom: 8;
  margin-left: 16px;
`;

const FiltersContainer = styled.div`
  padding: 50px;
  display: flex;
`;

const Filter = styled.div`
  width: 250px;
`;

const Products = () => {
    const {category} = useParams();
    const { products } = useContext(ProductContext)

    console.log(products);
    const isCategory = (product) => product.type === category;
    const categoryProducts = products.filter(isCategory);
    console.log(categoryProducts);
  return (
    <div>
      <FiltersContainer>
        <Filter>
          <Select isMulti name="colors" options={[]} />
        </Filter>
      </FiltersContainer>
      <ProductContainer>
        {categoryProducts.map(product => <ProductItem key={product.id}>
          <img src={product.picUrl[0]} alt={product.name} />
          <ProductProperty>{capitalizeFirstLetter(product.name.toLowerCase())}</ProductProperty>
          <ProductProperty>$ {product.price}</ProductProperty>
        </ProductItem>
        )}
      </ProductContainer>
    </div>
  )
}

export default Products