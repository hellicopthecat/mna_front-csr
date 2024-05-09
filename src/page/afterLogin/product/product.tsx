import {Outlet} from "react-router-dom";
import ProductCard from "../../../components/home/product/productCard/productCard";
import ProductHeader from "../../../components/home/product/productHeader/productHeader";
import styled from "styled-components";

const ProductPageCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Product = () => {
  return (
    <ProductPageCont>
      <ProductHeader />
      <ProductCard />
      <Outlet />
    </ProductPageCont>
  );
};
export default Product;
