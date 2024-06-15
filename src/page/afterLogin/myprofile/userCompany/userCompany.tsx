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
import {urlName} from "../../../../libs/constants";
import useDeleteCompany from "./deleteCompanyHook";
import {useAppDispatch} from "../../../../hooks/storeHook";
import {saveCompanyName} from "../../../../redux/companyStateSlice";
const MY_COMPANY_QUERY = gql`
  query ownCompany {
    seeMyprofile {
      id
      ownCompany {
        ...ConnectCompanyFrag
      }
      hasCompanyCount
    }
  }
  ${CONNECTCOMPANY_FRAG}
` as TypedDocumentNode<Query>;
const UserCompany = () => {
  //gql
  const {data, loading} = useQuery(MY_COMPANY_QUERY);
  const userCompany = data?.seeMyprofile;
  const {handleDeleteCompany} = useDeleteCompany();
  //redux
  const dispatch = useAppDispatch();

  //fn
  const deleteCompany = (id: number) => {
    handleDeleteCompany({id});
  };

  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        <MyprofileLayout>
          <UserCompanyHeader>
            <h2>내가 보유한 회사</h2>
            <span>
              (
              {!userCompany?.hasCompanyCount ? 0 : userCompany?.hasCompanyCount}{" "}
              개)
            </span>
          </UserCompanyHeader>
          <UserCompanyBodyWrapper>
            <UserCompanyBody>
              {userCompany?.ownCompany?.map((company) => (
                <UserCompanyCard key={company?.id}>
                  <Link to={`/company/${company?.id}`}>
                    <h3
                      onClick={() =>
                        dispatch(
                          saveCompanyName({
                            id: company?.id,
                            name: company?.companyName,
                          })
                        )
                      }
                    >
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
                  <BtnTheme
                    text="회사삭제"
                    width="60px"
                    height="30px"
                    fontSize="13px"
                    center
                    handleClick={() => deleteCompany(Number(company?.id))}
                  />
                  <UserCompanyBadge
                    isOwned={company?.isOwned}
                    isManager={company?.isManager}
                  />
                </UserCompanyCard>
              ))}
            </UserCompanyBody>
            {userCompany?.ownCompany && userCompany?.ownCompany?.length > 7 && (
              <BtnTheme text="더보기" width="80px" fontSize="16px" center />
            )}
          </UserCompanyBodyWrapper>
          <AnchorTheme href={urlName.createCompany} text="회사생성" center />
        </MyprofileLayout>
      )}
    </>
  );
};
export default UserCompany;
