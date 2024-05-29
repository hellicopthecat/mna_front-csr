import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {Query} from "../../../../libs/__generated__/graphql";
import {PRODUCT_FRAG} from "../../../../libs/fragments/productFrag";
import {Link, useParams} from "react-router-dom";
import {
  ProductCardCont,
  ProductCardInfo,
  ProductCardLeft,
  ProductCardRight,
  ProductCardWrapper,
} from "./productCard.style";
import {Avatar} from "../../../avatar";
import {IParamID} from "../../../../types/routerType";

const DETAIL_PRODUCT = gql`
  query searchCompanyProduct($searchCompanyId: Int!) {
    searchCompany(id: $searchCompanyId) {
      companyProduct {
        ...ProductFrag
      }
    }
  }
  ${PRODUCT_FRAG}
` as DocumentNode | TypedDocumentNode<Query>;
const ProductCard = () => {
  const param = useParams<keyof IParamID>();
  const {data, loading} = useQuery(DETAIL_PRODUCT, {
    variables: {searchCompanyId: Number(param.id)},
  });
  const PRODUCT = data?.searchCompany?.companyProduct;
  if (loading) {
    return <div>loading</div>;
  }
  return (
    <ProductCardWrapper>
      {PRODUCT?.map((item, index) => (
        <Link to={`${item?.id}`} key={index}>
          <ProductCardCont>
            <ProductCardLeft>
              <Avatar width="100%" height="200px" radius="0" />
            </ProductCardLeft>
            <ProductCardRight>
              <ProductCardInfo>
                <p>제품고유ID : {item?.id}</p>
                <p>
                  {item && item?.itemProductId.length > 8
                    ? ` ${item?.itemProductId.substring(0, 8)}...`
                    : item?.itemProductId}
                </p>
              </ProductCardInfo>
              <ProductCardInfo>
                <p>제품명</p>
                <p>{item?.itemName}</p>
              </ProductCardInfo>
              <ProductCardInfo>
                <p>제품모델명</p>
                <p>{item?.itemModelName}</p>
              </ProductCardInfo>
            </ProductCardRight>
          </ProductCardCont>
        </Link>
      ))}
    </ProductCardWrapper>
  );
};
export default ProductCard;
