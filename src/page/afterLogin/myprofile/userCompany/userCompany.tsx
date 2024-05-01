import {TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {AnchorTheme, BtnTheme} from "../../../../components/btnTheme";
import {CONNECTCOMPANY_FRAG} from "../../../../libs/fragments/fragments";
import {Query} from "../../../../libs/__generated__/graphql";
import {
  UserCompanyBody,
  UserCompanyBodyWrapper,
  UserCompanyCard,
  UserCompanyHeader,
} from "./userCompany.style";
import MyprofileLayout from "../../../../components/myProfile/myProfileLayout";
import UserCompanyBadge from "../../../../components/myProfile/userCompany/userComapnyBadge";
import UserCompanyCardInfo from "../../../../components/myProfile/userCompany/userCompanyInfo";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../../../hooks/storeHook";
import {saveCompanyName} from "../../../../redux/companyStateSlice";
const MY_COMPANY_QUERY = gql`
  query ownCompany {
    seeMyprofile {
      ownCompany {
        ...ConnectCompanyFrag
      }
      hasCompanyCount
    }
  }
  ${CONNECTCOMPANY_FRAG}
` as TypedDocumentNode<Query>;
const UserCompany = () => {
  const {data, loading} = useQuery(MY_COMPANY_QUERY);
  const userCompany = data?.seeMyprofile;
  const dispatch = useAppDispatch();
  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        <MyprofileLayout>
          <UserCompanyHeader>
            <h2>내가 보유하고 있는 회사</h2>
            <span>{userCompany?.hasCompanyCount}</span>
          </UserCompanyHeader>
          <UserCompanyBodyWrapper>
            <UserCompanyBody>
              {userCompany?.ownCompany?.map((company) => (
                <UserCompanyCard key={company?.id}>
                  <Link to={`/company/${company?.companyName}`}>
                    <h3
                      onClick={() =>
                        dispatch(saveCompanyName(company?.companyName))
                      }
                    >
                      {company && company?.companyName.length > 10
                        ? `${company?.companyName.slice(0, 10)}...`
                        : company?.companyName}
                    </h3>
                  </Link>
                  <UserCompanyCardInfo
                    keyword="계좌번호"
                    value={company?.companyInNout.accountNum ?? "미기입"}
                  />
                  <UserCompanyCardInfo
                    keyword="예산"
                    value={company?.companyInNout.budget}
                  />
                  <UserCompanyCardInfo
                    keyword="총자산"
                    value={company?.companyInNout.totalAssets}
                  />

                  <UserCompanyBadge
                    isOwned={company?.isOwned}
                    isManager={company?.isManager}
                  />
                </UserCompanyCard>
              ))}
            </UserCompanyBody>
            <BtnTheme text="더보기" width="80px" fontSize="16px" />
          </UserCompanyBodyWrapper>
          <AnchorTheme href="" text="회사생성" />
        </MyprofileLayout>
      )}
    </>
  );
};
export default UserCompany;
