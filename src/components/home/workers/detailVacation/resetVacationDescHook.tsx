import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {Mutation} from "../../../../libs/__generated__/graphql";
const RESET_VACATIONDESC_MUTATE = gql`
  mutation resetVacationDesc($resetVacationDescId: Int!) {
    resetVacationDesc(id: $resetVacationDescId) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
const useResetVacationDesc = () => {
  const [resetVacationDesc, {loading, error}] = useMutation(
    RESET_VACATIONDESC_MUTATE
  );
  const handleResetVacationDsec = async (id: number) => {
    const agree = prompt("정말로 삭제하시겠습니까?");
    if (agree === "동의") {
      await resetVacationDesc({
        variables: {
          resetVacationDescId: id,
        },
        update(cache, {data}) {
          if (data?.resetVacationDesc.ok) {
            cache.modify({
              id: `Vacation:${id}`,
              fields: {
                description() {
                  return;
                },
              },
            });
          }
        },
      });
    }
  };
  return {handleResetVacationDsec, loading, error};
};
export default useResetVacationDesc;
