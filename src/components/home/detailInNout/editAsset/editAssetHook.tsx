import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {IEditAssetProps} from "../../../../types/types";
import {Mutation} from "../../../../libs/__generated__/graphql";
import {useNavigate, useParams} from "react-router-dom";
import {IParamID} from "../../../../types/routerType";

const EDIT_ASSET_MUTATION = gql`
  mutation editEnL(
    $editEnLId: Int!
    $enLId: String!
    $enLName: String
    $enLType: String
    $enLDesc: String
    $current: Boolean
    $assests: Boolean
    $value: Int
  ) {
    editEnL(
      id: $editEnLId
      enLId: $enLId
      enLName: $enLName
      enLType: $enLType
      enLDesc: $enLDesc
      current: $current
      assests: $assests
      value: $value
    ) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
const useEditAssetMutate = () => {
  //hook
  const param = useParams<keyof IParamID>();
  const navigate = useNavigate();
  //gql mutate
  const [editAsset, {loading, error}] = useMutation(EDIT_ASSET_MUTATION);
  const handleEditAsset = async ({
    enlDescId,
    enLId,
    enLName,
    enLType,
    enLDesc,
    current,
    assests,
    value,
  }: IEditAssetProps) => {
    await editAsset({
      variables: {
        editEnLId: Number(param.id),
        enLId,
        enLName,
        enLType,
        enLDesc,
        current: current === "CURRENT" ? true : false,
        assests: assests === "ASSET" ? true : false,
        value: Number(value),
      },
      update(cache, {data}) {
        if (data?.editEnL.ok) {
          const id = `EquityLiabilities:${enlDescId}`;
          cache.modify({
            id,
            fields: {
              enLName() {
                return enLName;
              },
              enLType() {
                return enLType;
              },
              enLDesc() {
                return enLDesc;
              },
              current() {
                return current === "CURRENT" ? true : false;
              },
              assests() {
                return assests === "ASSET" ? true : false;
              },
              value() {
                return value;
              },
            },
          });
          navigate(`/company/${param.id}/innout`);
        }
      },
    });
  };
  return {handleEditAsset, loading, error};
};
export default useEditAssetMutate;
