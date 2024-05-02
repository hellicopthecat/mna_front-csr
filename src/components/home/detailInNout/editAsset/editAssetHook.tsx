import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {IEditAssetProps} from "../../../../types/types";
import {Mutation} from "../../../../libs/__generated__/graphql";
import {useNavigate} from "react-router-dom";

const EDIT_ASSET_MUTATION = gql`
  mutation editEnL(
    $companyName: String!
    $enLId: String!
    $enLName: String
    $enLType: String
    $enLDesc: String
    $current: Boolean
    $assests: Boolean
    $value: Int
  ) {
    editEnL(
      companyName: $companyName
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
  const navigate = useNavigate();
  const [editAsset, {loading, error}] = useMutation(EDIT_ASSET_MUTATION);
  const handleEditAsset = async ({
    companyName,
    inNoutId,
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
        companyName,
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
          const id = `EquityLiabilities:${inNoutId}`;
          cache.modify({
            id,
            fields: {
              enLId() {
                return enLId;
              },
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
          navigate(`/company/${companyName}/innout`);
        }
      },
    });
  };

  return {handleEditAsset, loading, error};
};
export default useEditAssetMutate;
