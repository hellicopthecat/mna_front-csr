import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {Mutation} from "../../../../libs/__generated__/graphql";
import {useNavigate, useParams} from "react-router-dom";
import {IParamID} from "../../../../types/routerType";
const REGISTER_WORKER_MUTATE = gql`
  mutation registWorker($username: String!, $registWorkerId: Int!) {
    registWorker(username: $username, id: $registWorkerId) {
      ok
      id
      subId
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
const useRegisterWorker = () => {
  //hook
  const navigate = useNavigate();
  const params = useParams<keyof IParamID>();
  const [registWorker, {loading, error}] = useMutation(REGISTER_WORKER_MUTATE);

  //fn
  const handleRegistWorker = async ({
    username,
    companyId,
  }: {
    username: string;
    companyId: number;
  }) => {
    await registWorker({
      variables: {username, registWorkerId: companyId},
      onCompleted({registWorker}) {
        if (!registWorker.ok) {
          alert(registWorker.errorMsg);
        }
        navigate(`/company/${params.id}/workers`);
      },
      update(cache, {data}) {
        if (data?.registWorker.ok) {
          const newDataObj = {
            __typename: "User",
            id: Number(data.registWorker.id),
            username: username,
            avatar: null,
            isOnVacation: false,
            vacation: {
              __typename: "Vacation",
              id: Number(data.registWorker.subId),
              createdAt: Date.now().toString(),
              updateAt: Date.now().toString(),
              joinCompanyDate: Date.now().toString(),
              annual: null,
              other: null,
              useAnnualVacation: null,
              restVacation: null,
            },
          };
          cache.modify({
            id: "ROOT_QUERY",
            fields: {
              seeCompanyWorker(prev) {
                return [...prev, newDataObj];
              },
            },
          });
        }
      },
    });
    console.log(error);
  };
  return {handleRegistWorker, loading, error};
};
export default useRegisterWorker;
