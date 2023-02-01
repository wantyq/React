import { useParams } from "react-router-dom"
import { ProductContext } from "../../../contexts/ProductContext";
import { useContext, useState } from "react";
import styled from "styled-components";
import { capitalizeFirstLetter } from "../../../utils/string"; 
import Select from "react-select";
import { screenSize } from "../../../consts/mediaQueries";
import { getUniqueArrayItems } from "../../../utils/array"
import { lightBorderColor } from "../../../consts/colors";

const ProductContainer = styled.div`
  display: grid;
  padding: 40px;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
`;

const ProductItem = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid ${lightBorderColor};
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }

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
  padding: 40px 40px 0px 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (min-width: ${screenSize.tablet}) and (max-width: ${screenSize.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${screenSize.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Filter = styled.div`
  margin-right: 24px;
`;

const Products = () => {
    const { category } = useParams();
    const { products } = useContext(ProductContext);
    const [selectedColors, setSelectedColors] = useState([]);

    console.log(products);
    const isCategory = (product) => product.type === category;
    const categoryProducts = products.filter(isCategory);
    console.log(categoryProducts);

    const colors = categoryProducts.map(product => product.color.toLowerCase());
    const uniqueColors = getUniqueArrayItems(colors);
    console.log(uniqueColors);
    const colorOptions = uniqueColors.map(color => ({
      value: color, 
      label: capitalizeFirstLetter(color),
    }));

    const selectedColorsArray = selectedColors.map(color => color.value);
    const filteredByColorProducts = categoryProducts.filter(product => 
      selectedColorsArray.includes(product.color.toLowerCase()));
    console.log(filteredByColorProducts);

    const filteredProducts = filteredByColorProducts.length 
    ? filteredByColorProducts 
    : categoryProducts;

  return (
    <div>
      <FiltersContainer>
        <Filter>
          <Select 
            isMulti 
            name="colors" 
            options={colorOptions} 
            value={selectedColors}
            onChange={setSelectedColors} />
        </Filter>
      </FiltersContainer>
      <ProductContainer>
        {filteredProducts.map(product => <ProductItem key={product.id}>
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