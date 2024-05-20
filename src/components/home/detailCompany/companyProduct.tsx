import {Link, useNavigate} from "react-router-dom";
import styled from "styled-components";

export interface ICompanyProduct {
  companyName: string;
  companyProduct?: [
    {
      id: number;
      itemPhoto: string;
      itemName: string;
      itemCount: number;
      itemProductId: string;
      itemPrice: number;
      itemModelName: string;
      itemDesc: string;
      itemType: string;
    }
  ];
}
const CompanyProductCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ProductInfoHead = styled.div`
  display: flex;
  align-items: end;
  gap: 15px;
`;
const ProductInfoBody = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
`;
const ProductInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 15px;
  border: 1px solid ${(props) => props.theme.secondary};
  padding: 15px;
  border-radius: 10px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 10px;
    p:first-child {
      font-weight: 600;
    }
    p:last-child {
      text-align: right;
    }
  }
`;
const CompanyProduct = ({companyProduct, companyName}: ICompanyProduct) => {
  const navigate = useNavigate();
  return (
    <CompanyProductCont>
      <ProductInfoHead>
        <h2>상품</h2>
        <Link to={`/company/${companyName}/product`}>전체보기</Link>
      </ProductInfoHead>
      {companyProduct && companyProduct?.length < 1 ? (
        <ProductInfoBody>
          <h3>상품이 없습니다.</h3>
        </ProductInfoBody>
      ) : (
        <ProductInfoBody>
          {companyProduct?.map((item) => (
            <ProductInfoGrid
              key={item.id}
              onClick={() =>
                navigate(`/company/${companyName}/product/${item.id}`)
              }
            >
              <h3>{!item.itemModelName ? "미기입" : item.itemModelName}</h3>
              <div>
                <p>상품명</p>
                <p>{!item.itemName ? "미기입" : item.itemName}</p>
              </div>
              <div>
                <p>가격</p>
                <p>{!item.itemPrice ? 0 : item.itemPrice.toLocaleString()}</p>
              </div>
              <div>
                <p>상품수</p>
                <p>{!item.itemCount ? 0 : item.itemCount}</p>
              </div>
            </ProductInfoGrid>
          ))}
        </ProductInfoBody>
      )}
    </CompanyProductCont>
  );
};
export default CompanyProduct;
