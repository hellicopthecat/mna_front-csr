import {Link} from "react-router-dom";
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
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ProductInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid ${(props) => props.theme.secondary};
  padding: 15px;
  border-radius: 10px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
  h3 {
    grid-column: span 4;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  div {
    display: flex;
    gap: 10px;
    p:first-child {
      font-weight: 600;
    }
  }
`;
const CompanyProduct = ({companyProduct, companyName}: ICompanyProduct) => {
  return (
    <CompanyProductCont>
      <ProductInfoHead>
        <h2>상품</h2>
        <Link to={`/company/${companyName}/product`}>
          전체보기 ({companyProduct?.length})
        </Link>
      </ProductInfoHead>
      {companyProduct && companyProduct?.length < 1 ? (
        <ProductInfoBody>
          <h3>상품이 없습니다.</h3>
        </ProductInfoBody>
      ) : (
        <ProductInfoBody>
          {companyProduct?.map((item) => (
            <ProductInfoGrid key={item.id}>
              <h3>{item.itemName}</h3>
              <div>
                <p>가격</p>
                <p>{item.itemPrice}</p>
              </div>
              <div>
                <p>모델명</p>
                <p>{item.itemModelName}</p>
              </div>
              <div>
                <p>모델 ID</p>
                <p>{item.itemProductId}</p>
              </div>
              <div>
                <p>상품수</p>
                <p>{!item.itemCount ? "0" : item.itemCount}</p>
              </div>
            </ProductInfoGrid>
          ))}
        </ProductInfoBody>
      )}
    </CompanyProductCont>
  );
};
export default CompanyProduct;
