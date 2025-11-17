import {TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {BtnTheme} from "../../../../components/btnTheme";
import {CONNECTCOMPANY_FRAG} from "../../../../libs/fragments/fragments";
import {Query} from "../../../../libs/__generated__/graphql";
import {
  UserCompanyBody,
  UserCompanyBodyWrapper,
  UserCompanyCard,
  UserCompanyHeader,
} from "./userCompany.style";
import MyprofileLayout from "../../../../components/myProfile/myProfileLayout";
import UserCompanyCardInfo from "../../../../components/myProfile/userCompany/userCompanyInfo";
import UserCompanyBadge from "../../../../components/myProfile/userCompany/userComapnyBadge";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../../../hooks/storeHook";
import {saveCompanyName} from "../../../../redux/companyStateSlice";
const MY_COMPANY_QUERY = gql`
  query manageCompany {
    seeMyprofile {
      manageCompany {
        ...ConnectCompanyFrag
      }
      manageCompanyCount
    }
  }
  ${CONNECTCOMPANY_FRAG}
` as TypedDocumentNode<Query>;
const UserManageCompany = () => {
  //redux
  const dispatch = useAppDispatch();
  //gql
  const {data, loading} = useQuery(MY_COMPANY_QUERY);
  const userCompany = data?.seeMyprofile;

  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        <MyprofileLayout>
          <UserCompanyHeader>
            <h2>내가 관리하는 회사</h2>
            <span>({userCompany?.manageCompanyCount} 개)</span>
          </UserCompanyHeader>
          <UserCompanyBodyWrapper>
            <UserCompanyBody>
              {userCompany?.manageCompany?.map((company) => (
                <UserCompanyCard key={company?.id}>
                  <Link to={`/company/${company?.id}`}>
                    <h3 onClick={() => dispatch(saveCompanyName(company?.id))}>
                      {company && company?.companyName.length > 10
                        ? `${company?.companyName.slice(0, 10)}...`
                        : company?.companyName}
                    </h3>
                  </Link>
                  <UserCompanyCardInfo
                    keyword="계좌번호"
                    value={company?.inNout.accountNum ?? "미기입"}
                  />
                  <UserCompanyCardInfo
                    keyword="예산"
                    value={company?.inNout.budget}
                  />
                  <UserCompanyCardInfo
                    keyword="총자산"
                    value={company?.inNout.totalAssets}
                  />

                  <UserCompanyBadge
                    isOwned={company?.isOwned}
                    isManager={company?.isManager}
                  />
                </UserCompanyCard>
              ))}
            </UserCompanyBody>
            {userCompany?.manageCompany &&
              userCompany.manageCompany.length > 7 && (
                <BtnTheme text="더보기" width="80px" fontSize="16px" center />
              )}
          </UserCompanyBodyWrapper>
        </MyprofileLayout>
      )}
    </>
  );
};
export default UserManageCompany;
