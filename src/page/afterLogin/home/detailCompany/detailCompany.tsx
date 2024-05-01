import {DocumentNode, TypedDocumentNode, useQuery, gql} from "@apollo/client";
import {useAppSelector} from "../../../../hooks/storeHook";
import {Query} from "../../../../libs/__generated__/graphql";
import {
  CompanyInfoHeader,
  CompanyInfoHeaderDown,
  CompanyInfoHeaderUp,
  CompanyInfoWrapper,
  CompanyOwnerCont,
  HomeWrapper,
} from "./detail.style";
import {Avatar} from "../../../../components/avatar";
import CompanyInNout from "../../../../components/home/detailCompany/companyInNout";
import CompanyProduct, {
  ICompanyProduct,
} from "../../../../components/home/detailCompany/companyProduct";
import CompanyConnect, {
  ICompanyConnect,
} from "../../../../components/home/detailCompany/companyConnect";
import {PRODUCT_FRAG} from "../../../../libs/fragments/productFrag";
import {USER_FRAG} from "../../../../libs/fragments/userFrag";
import {COMPANY_INNOUT_FRAG} from "../../../../libs/fragments/inNoutFrag";
const SEE_SELECTED_COMPANY = gql`
  query searchCompany($companyName: String!) {
    searchCompany(companyName: $companyName) {
      id
      createdAt
      updateAt
      companyLogo
      companyName
      isManager
      isOwned
      companyManager {
        ...UserFrag
      }
      companyOwner {
        ...UserFrag
      }
      connectedCompany {
        id
        companyName
        companyLogo
      }
      connectedCompanyCount
      connectingCompany {
        id
        companyName
        companyLogo
      }
      connectingCompanyCount
      companyInNout {
        ...CompanyInNoutFrag
      }
      companyProduct {
        ...ProductFrag
      }
    }
  }
  ${USER_FRAG}
  ${COMPANY_INNOUT_FRAG}
  ${PRODUCT_FRAG}
` as DocumentNode | TypedDocumentNode<Query>;

const DetailCompany = () => {
  //redux
  const {companyName} = useAppSelector((state) => state.companyState);
  //gql
  const {data, error} = useQuery(SEE_SELECTED_COMPANY, {
    variables: {companyName},
  });
  const C_DATA = data?.searchCompany;
  console.log(C_DATA);
  console.log(error);
  return (
    <HomeWrapper>
      <CompanyInfoHeader>
        <CompanyInfoHeaderUp>
          <p>회사명</p>
          <h2>{C_DATA?.companyName}</h2>
        </CompanyInfoHeaderUp>
        <CompanyInfoHeaderDown>
          {C_DATA?.isOwned && <p>보유</p>}
          {C_DATA?.isManager && <p>관리자</p>}
        </CompanyInfoHeaderDown>
        <CompanyOwnerCont>
          <div>
            <Avatar width="20px" height="20px" />
            <span>{C_DATA?.companyOwner.username}</span>
          </div>
          <span>|</span>
          <div>
            <span>E-MAIL</span>
            <span>{C_DATA?.companyOwner.email}</span>
          </div>
          <span>|</span>
          <div>
            <span>PHONE</span>
            <span>{C_DATA?.companyOwner.phone}</span>
          </div>
        </CompanyOwnerCont>
      </CompanyInfoHeader>

      <CompanyInfoWrapper>
        <CompanyInNout inNout={C_DATA?.companyInNout as object} />
      </CompanyInfoWrapper>
      <CompanyInfoWrapper>
        <CompanyProduct
          companyProduct={
            C_DATA?.companyProduct as ICompanyProduct["companyProduct"]
          }
        />
      </CompanyInfoWrapper>
      <CompanyInfoWrapper>
        <CompanyConnect
          title="발주처"
          count={C_DATA?.connectedCompanyCount as number}
          connect={C_DATA?.connectedCompany as ICompanyConnect["connect"]}
        />
        <CompanyConnect
          title="거래처"
          count={C_DATA?.connectingCompanyCount as number}
          connect={C_DATA?.connectingCompany as ICompanyConnect["connect"]}
        />
      </CompanyInfoWrapper>
    </HomeWrapper>
  );
};
export default DetailCompany;
