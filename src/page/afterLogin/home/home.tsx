import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import AfterLoginLayout from "../../../components/afterLoginLayout";
import {Query} from "../../../libs/__generated__/graphql";

import {
  HomeWrapper,
  CompanyInfoWrapper,
  CompanyInfoHeader,
  CompanyOwnerCont,
  CompanyInfoHeaderUp,
  CompanyInfoHeaderDown,
} from "./home.style";
import {COMPANY_INNOUT_FRAG} from "../../../libs/fragments/fragments";
import {useAppSelector} from "../../../hooks/storeHook";
import CompanyInNout from "../../../components/home/companyInNout";
import CompanyConnect, {
  ICompanyConnect,
} from "../../../components/home/companyConnect";
import {Avatar} from "../../../components/avatar";

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
        id
        username
        email
        phone
        avatar
      }
      companyOwner {
        id
        username
        email
        phone
        avatar
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
    }
  }
  ${COMPANY_INNOUT_FRAG}
` as DocumentNode | TypedDocumentNode<Query>;

const Home = () => {
  //redux
  const {companyName} = useAppSelector((state) => state.companyState);
  //gql
  const {data, loading, error, fetchMore} = useQuery(SEE_SELECTED_COMPANY, {
    variables: {companyName},
  });
  const C_DATA = data?.searchCompany;
  console.log(C_DATA);
  return (
    <AfterLoginLayout>
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
        <CompanyInfoWrapper>
          <h2>회계</h2>
          <CompanyInNout inNout={C_DATA?.companyInNout as object} />
        </CompanyInfoWrapper>
      </HomeWrapper>
    </AfterLoginLayout>
  );
};
export default Home;
