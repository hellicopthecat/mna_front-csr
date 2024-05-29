import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {Mutation} from "../../../../../libs/__generated__/graphql";
import {useParams} from "react-router-dom";
import {IParamID} from "../../../../../types/routerType";
import {useAppSelector} from "../../../../../hooks/storeHook";

const CONNECT_COMPANY_HOOK = gql`
  mutation connectCompany($companyId: Int!, $targetCompanyId: Int!) {
    connectCompany(companyId: $companyId, targetCompanyId: $targetCompanyId) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;

const useConnectCompanyMutate = () => {
  const param = useParams<keyof IParamID>();
  const {companyId: myCompanyId, companyName: myCompanyName} = useAppSelector(
    (state) => state.companyState
  );
  const [connectCompany, {loading, error}] = useMutation(CONNECT_COMPANY_HOOK);
  const handleConnectCompany = async () => {
    const ok = confirm("관심회사로 연결하시겠습니까?");
    if (ok)
      await connectCompany({
        variables: {
          companyId: Number(myCompanyId),
          targetCompanyId: Number(param.id),
        },
        update(cache, {data}) {
          if (data?.connectCompany.ok) {
            const modifyId = (id: string) => `Company:${id}`;
            cache.modify({
              id: modifyId(myCompanyId + ""),
              fields: {
                connectedCompany(prev, {readField}) {
                  const companyName = readField("companyName");
                  const newData = {
                    __typename: "Company",
                    id: myCompanyId + "",
                    companyName,
                    companyLogo: null,
                  };
                  return [...prev, newData];
                },
                connectedCompanyCount(prev) {
                  return prev + 1;
                },
              },
            });
            cache.modify({
              id: modifyId(param.id + ""),
              fields: {
                connectingCompany(prev) {
                  const newData = {
                    __typename: "Company",
                    id: param.id + "",
                    companyName: myCompanyName,
                    companyLogo: null,
                  };
                  return [...prev, newData];
                },
                connectingCompanyCount(prev) {
                  return prev + 1;
                },
              },
            });
          }
        },
      });
  };
  return {handleConnectCompany, loading, error};
};
export default useConnectCompanyMutate;
