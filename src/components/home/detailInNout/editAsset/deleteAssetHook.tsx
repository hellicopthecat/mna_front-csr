import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {Mutation, Query} from "../../../../libs/__generated__/graphql";
import {useNavigate, useParams} from "react-router-dom";
import {IParamID} from "../../../../types/routerType";

const DELETE_ASSET_MUTATE = gql`
  mutation deleteEnl($enLId: String!) {
    deleteEnL(enLId: $enLId) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
const useDeleteAssetHook = () => {
  const navigate = useNavigate();
  const params = useParams<keyof IParamID>();
  const [deleteAssets, {loading}] = useMutation(DELETE_ASSET_MUTATE);
  const handleDeleteAssets = async ({
    enLId,
    inNoutId,
  }: {
    enLId: string;
    inNoutId: number;
  }) => {
    if (loading) {
      return;
    }
    const ok = confirm("삭제하시겠습니까?");
    if (ok) {
      await deleteAssets({
        variables: {enLId},
        onCompleted(data) {
          if (!data.deleteEnL.ok) {
            alert(data.deleteEnL.errorMsg);
            return;
          }
          if (data.deleteEnL.ok) {
            navigate(`/company/${params.id}/innout`);
          }
        },
        update(cache) {
          const id = `InNout:${inNoutId}`;
          cache.modify({
            id,
            fields: {
              totalAssetsDesc(prev, {readField}) {
                const updateCache = prev.filter(
                  (item: Query["seeEnL"]) =>
                    readField(`id`, item) !== Number(params.assetid)
                );
                return [...updateCache];
              },
            },
          });
        },
      });
    }
  };
  return {handleDeleteAssets};
};

export default useDeleteAssetHook;
