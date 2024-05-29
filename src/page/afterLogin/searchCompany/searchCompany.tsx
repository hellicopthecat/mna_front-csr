import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {Query} from "../../../libs/__generated__/graphql";
import {useAppSelector} from "../../../hooks/storeHook";

const SEARCH_COMPANY_QUERY = gql`
  query searchByCompanyName($companyName: String!) {
    searchByCompanyName(companyName: $companyName) {
      id
      companyName
    }
  }
` as DocumentNode | TypedDocumentNode<Query>;
const SearchCompany = () => {
  const {searchCompanyName} = useAppSelector(
    (state) => state.searchCompanyName
  );
  const {data} = useQuery(SEARCH_COMPANY_QUERY, {
    variables: {companyName: searchCompanyName},
  });
  console.log("redux searchCom", searchCompanyName);

  return (
    <div>
      <p>search page</p>
      <p>{data?.searchByCompanyName?.map((item) => item?.companyName)}</p>
    </div>
  );
};
export default SearchCompany;
