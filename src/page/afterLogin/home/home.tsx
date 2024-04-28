import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import AfterLoginLayout from "../../../components/afterLoginLayout";
import {Query} from "../../../libs/__generated__/graphql";
import {
  CONNECTCOMPANY_FRAG,
  MY_VACATION_FRAG,
} from "../../../libs/fragments/fragments";
import {CompanyCardCont, HomeWrapper, CompanyWrapper} from "./home.style";
import CompanyCard from "../../../components/home/companyCard";

const SEE_MY_PROFILE = gql`
  query seeMyprofile {
    seeMyprofile {
      id
      createdAt
      updateAt
      username
      email
      firstName
      lastName
      phone
      ownCompany {
        ...ConnectCompanyFrag
      }
      hasCompanyCount
      manageCompany {
        ...ConnectCompanyFrag
      }
      manageCompanyCount
      vacation {
        ...MyVacationFrag
      }
    }
  }
  ${CONNECTCOMPANY_FRAG}
  ${MY_VACATION_FRAG}
` as DocumentNode | TypedDocumentNode<Query>;

const Home = () => {
  const {data, error, fetchMore} = useQuery(SEE_MY_PROFILE);
  const userData = data?.seeMyprofile;

  return (
    <AfterLoginLayout>
      <HomeWrapper>
        <CompanyWrapper>
          <h2>내가 보유한 회사</h2>
          <CompanyCardCont>
            {userData?.ownCompany?.map((company) => (
              <CompanyCard
                key={company?.id}
                companyId={company?.id + ""}
                companyName={company?.companyName + ""}
                connectedCount={company?.connectedCompanyCount as number}
                connectingCount={company?.connectingCompanyCount as number}
                isManaged={company?.isManager as boolean}
                isOwned={company?.isOwned as boolean}
              />
            ))}
          </CompanyCardCont>
        </CompanyWrapper>
        <CompanyWrapper>
          <h2>내가 관리하는 회사</h2>
          <CompanyCardCont>
            {userData?.manageCompany?.map((managed) => (
              <CompanyCard
                key={managed?.id}
                companyId={managed?.id + ""}
                companyName={managed?.companyName + ""}
                connectedCount={managed?.connectedCompanyCount as number}
                connectingCount={managed?.connectingCompanyCount as number}
                isManaged={managed?.isManager as boolean}
                isOwned={managed?.isOwned as boolean}
              />
            ))}
          </CompanyCardCont>
        </CompanyWrapper>
      </HomeWrapper>
    </AfterLoginLayout>
  );
};
export default Home;
