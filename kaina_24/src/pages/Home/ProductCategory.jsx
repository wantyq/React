import styled from "styled-components";
import { useNavigate, generatePath } from "react-router";
import { PRODUCT_LIST_PATH } from "../../routes/const";

const ProductCategory = ({ name, image }) => {
    const navigate = useNavigate();
    const productPath = generatePath(PRODUCT_LIST_PATH, {category: name});
    return (
        <div>
            <div>{name}</div>
            <div>{image}</div>
        </div>
    )
}

export default ProductCategory;