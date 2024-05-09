import {useParams} from "react-router-dom";
import {AnchorTheme} from "../../../btnTheme";
import styled from "styled-components";
const ProductHeaderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: 25px;
    font-weight: 600;
  }
`;
const ProductHeader = () => {
  const param = useParams();
  return (
    <ProductHeaderNav>
      <h2>제품</h2>
      <AnchorTheme
        href={`/company/${param.id}/product/createProduct`}
        text="제품생성"
        width="100px"
        height="30px"
      />
    </ProductHeaderNav>
  );
};
export default ProductHeader;
