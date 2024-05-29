import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {Mutation} from "../../../../libs/__generated__/graphql";

const DELETE_COMPANY_MUTATE = gql`
  mutation deleteCompany($deleteCompanyId: Int) {
    deleteCompany(id: $deleteCompanyId) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
const useDeleteCompany = () => {
  const [deleteCompany, {loading, error}] = useMutation(DELETE_COMPANY_MUTATE);
  const handleDeleteCompany = async ({id}: {id: number}) => {
    const result = prompt(
      "삭제하게 되면 모든 데이터를 잃게 됩니다 그래도 삭제하시겠습니까? 삭제하시려면 '동의'를 입력하고 확인을 누르세요."
    );
    if (result === "동의") {
      await deleteCompany({
        variables: {deleteCompanyId: id},
        onCompleted(data) {
          if (!data.deleteCompany.ok) {
            alert(data.deleteCompany.errorMsg);
          }
        },
        update(cache, {data}) {
          if (data?.deleteCompany.ok) {
            cache.evict({id: `Company:${id}`});
            cache.gc();
          }
        },
      });
    }
  };
  return {handleDeleteCompany, loading, error};
};
export default useDeleteCompany;
