import {DocumentNode, TypedDocumentNode, useQuery, gql} from "@apollo/client";
import {Query} from "../../../../libs/__generated__/graphql";
import {CompanyInfoWrapper, HomeWrapper} from "./detailCompany.style";
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
import WorkersPage from "../../workers/workers";
import {IWorkersProps} from "../../../../types/types";
import {COMPANY_ADRESS_FRAG} from "../../../../libs/fragments/companyAdressFrag";
import CompanyInfo, {
  ICompanyInfo,
} from "../../../../components/home/detailCompany/companyInfo/companyInfo";
import {useParams} from "react-router-dom";
import {IParamID} from "../../../../types/routerType";
const SEE_SELECTED_COMPANY = gql`
  query searchCompany($searchCompanyId: Int!) {
    searchCompany(id: $searchCompanyId) {
      id
      createdAt
      updateAt
      companyLogo
      companyName
      isManager
      isOwned
      companyAdress {
        ...CompanyAdressFrag
      }
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
      inNout {
        ...CompanyInNoutFrag
      }
      companyProduct {
        ...ProductFrag
      }
      companyWorker {
        ...UserFrag
      }
    }
  }
  ${COMPANY_ADRESS_FRAG}
  ${USER_FRAG}
  ${COMPANY_INNOUT_FRAG}
  ${PRODUCT_FRAG}
` as DocumentNode | TypedDocumentNode<Query>;

const DetailCompany = () => {
  const param = useParams<keyof IParamID>();
  //gql
  const {data, loading} = useQuery(SEE_SELECTED_COMPANY, {
    variables: {searchCompanyId: Number(param.id)},
  });
  const C_DATA = data?.searchCompany;

  if (!C_DATA) {
    return (
      <div>
        <p>회사가 존재하지 않습니다.</p>
      </div>
    );
  }
  return (
    <HomeWrapper>
      {loading ? (
        <div>loading..</div>
      ) : (
        <>
          <CompanyInfo
            companyName={C_DATA?.companyName as string}
            username={C_DATA?.companyOwner.username as string}
            email={C_DATA?.companyOwner.email as string}
            phone={C_DATA?.companyOwner.phone as string}
            isOwned={C_DATA?.isOwned as boolean}
            isManager={C_DATA?.isManager as boolean}
            companyAdress={
              C_DATA?.companyAdress as ICompanyInfo["companyAdress"]
            }
            connectedCompany={
              C_DATA?.connectedCompany as ICompanyInfo["connectedCompany"]
            }
            connectingCompany={
              C_DATA?.connectingCompany as ICompanyInfo["connectingCompany"]
            }
          />

          <CompanyInfoWrapper>
            <CompanyInNout inNout={C_DATA?.inNout as object} />
          </CompanyInfoWrapper>

          <CompanyInfoWrapper>
            <WorkersPage
              worker={C_DATA?.companyWorker as IWorkersProps["worker"]}
            />
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
        </>
      )}
    </HomeWrapper>
  );
};
export default DetailCompany;
