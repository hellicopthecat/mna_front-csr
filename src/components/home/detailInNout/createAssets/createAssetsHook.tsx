import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {Mutation} from "../../../../libs/__generated__/graphql";
import {ICreateAssetProps} from "../../../../types/types";
import {useNavigate, useParams} from "react-router-dom";

const CREATE_ASSETS_MUTATION = gql`
  mutation CreateEnL(
    $companyName: String!
    $enLId: String!
    $enLName: String!
    $enLType: String!
    $current: Boolean!
    $assests: Boolean!
    $value: Int!
    $enLDesc: String
  ) {
    createEnL(
      companyName: $companyName
      enLId: $enLId
      enLName: $enLName
      enLType: $enLType
      current: $current
      assests: $assests
      value: $value
      enLDesc: $enLDesc
    ) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
const useCreateAssetsMutate = () => {
  // hook
  const navigate = useNavigate();
  const params = useParams();
  // mutate gql
  const [createAssets, {loading, error}] = useMutation(CREATE_ASSETS_MUTATION);
  const handleCreateAssets = async ({
    companyName,
    enLId,
    enLName,
    enLType,
    current,
    assests,
    value,
    enLDesc,
  }: ICreateAssetProps) => {
    if (loading) {
      return null;
    }
    await createAssets({
      variables: {
        companyName,
        enLId,
        enLName,
        enLType,
        current: current === "CURRENT" ? true : false,
        assests: assests === "ASSET" ? true : false,
        value: Number(value),
        enLDesc,
      },
      update(cache, {data}) {
        if (data?.createEnL.ok) {
          const newDataList = {
            __typename: "EquityLiabilities",
            id: `new`,
            value: Number(value),
            assests: current === "CURRENT" ? true : false,
            current: assests === "ASSET" ? true : false,
            enLDesc,
            enLId,
            enLName,
            enLType,
          };
          cache.modify({
            id: `InNout:${params.inoutid}`,
            fields: {
              totalAssetsDesc(prev) {
                return [newDataList, ...prev];
              },
            },
          });
        }
      },
      onCompleted(data) {
        const {ok, errorMsg} = data.createEnL;
        if (!ok) {
          alert(errorMsg);
        }
        if (ok) {
          navigate(`/company/${companyName}/innout`);
        }
      },
    });
  };
  return {handleCreateAssets, loading, error};
};

export default useCreateAssetsMutate;
