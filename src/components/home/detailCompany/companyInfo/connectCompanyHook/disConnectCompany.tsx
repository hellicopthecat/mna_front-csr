import {useParams} from "react-router-dom";
import {IParamID} from "../../../../../types/routerType";
import {useAppSelector} from "../../../../../hooks/storeHook";
import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {Mutation} from "../../../../../libs/__generated__/graphql";
const DISCONNECT_COMPANY_HOOK = gql`
  mutation disConnectCompany($companyId: Int!, $targetCompanyId: Int!) {
    disconnectCompany(
      companyId: $companyId
      targetCompanyId: $targetCompanyId
    ) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
const useDisconnectCompanyMutate = () => {
  const param = useParams<keyof IParamID>();
  const {companyId: myCompanyId} = useAppSelector(
    (state) => state.companyState
  );
  const [disConnectCompany, {loading, error}] = useMutation(
    DISCONNECT_COMPANY_HOOK
  );
  const handleDisConnectCompany = async () => {
    const ok = confirm("거래처연결을 해지하시겠습니까?");
    if (ok) {
      await disConnectCompany({
        variables: {
          companyId: Number(myCompanyId),
          targetCompanyId: Number(param.id),
        },
        update(cache, {data}) {
          if (data?.disconnectCompany.ok) {
            type Titem = {id: number};
            const modifyId = (id: string) => `Company:${id}`;
            cache.modify({
              id: modifyId(myCompanyId + ""),
              fields: {
                connectedCompany(prev) {
                  const newData = prev.filter(
                    (item: Titem) => Number(item.id) === Number(param.id)
                  );
                  return [...newData];
                },
                connectedCompanyCount(prev) {
                  return prev - 1;
                },
              },
            });
            cache.modify({
              id: modifyId(param.id + ""),
              fields: {
                connectingCompany(prev) {
                  const newData = prev.filter(
                    (item: Titem) => Number(item.id) === Number(myCompanyId)
                  );
                  return [...newData];
                },
                connectingCompanyCount(prev) {
                  return prev - 1;
                },
              },
            });
          }
        },
      });
    }
  };
  return {handleDisConnectCompany, loading, error};
};
export default useDisconnectCompanyMutate;
