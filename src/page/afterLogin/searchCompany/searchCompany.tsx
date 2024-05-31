import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {Query} from "../../../libs/__generated__/graphql";
import {useAppSelector} from "../../../hooks/storeHook";
import {
  SearchCompanyCont,
  SearchResultCard,
  SearchResultCont,
} from "./searchCompany.style";
import {Link} from "react-router-dom";
import {Avatar} from "../../../components/avatar";

const SEARCH_COMPANY_QUERY = gql`
  query searchByCompanyName($companyName: String!) {
    searchByCompanyName(companyName: $companyName) {
      id
      companyName
    }
  }
` as DocumentNode | TypedDocumentNode<Query>;
const SearchCompany = () => {
  const {searchCompanyName} = useAppSelector((state) => state.searchCompany);
  const {data} = useQuery(SEARCH_COMPANY_QUERY, {
    variables: {companyName: searchCompanyName},
  });

  return (
    <SearchCompanyCont>
      <h3>검색결과</h3>
      {!searchCompanyName && <p>검색어를 입력해주세요</p>}
      {searchCompanyName && data?.searchByCompanyName?.length === 0 ? (
        <p>검색결과없음</p>
      ) : (
        <SearchResultCont>
          {data?.searchByCompanyName?.map((item) => (
            <Link to={`/company/${item?.id}`} key={item?.id}>
              <SearchResultCard>
                <Avatar width="50px" height="50px" />
                <p>{item?.companyName}</p>
              </SearchResultCard>
            </Link>
          ))}
        </SearchResultCont>
      )}
    </SearchCompanyCont>
  );
};
export default SearchCompany;
