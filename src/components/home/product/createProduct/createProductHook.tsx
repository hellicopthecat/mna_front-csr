import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {ICreateProduct} from "../../../../types/types";
import {useNavigate, useParams} from "react-router-dom";
import {Mutation} from "../../../../libs/__generated__/graphql";
import {IParamID} from "../../../../types/routerType";
const CREATE_PRODUCT_MUTATE = gql`
  mutation createProduct(
    $itemProductId: String!
    $itemName: String!
    $createProductId: Int!
    $paymentsDone: TPaymentSwitch
    $itemModelName: String
    $itemPhoto: String
    $itemType: String
    $itemCount: Int
    $itemPrice: Int
    $itemDesc: String
    $incomeTrue: Boolean
    $paymentType: String
    $accountCode: String
    $businessDesc: String
  ) {
    createProduct(
      itemProductId: $itemProductId
      itemName: $itemName
      id: $createProductId
      paymentsDone: $paymentsDone
      itemModelName: $itemModelName
      itemPhoto: $itemPhoto
      itemType: $itemType
      itemCount: $itemCount
      itemPrice: $itemPrice
      itemDesc: $itemDesc
      incomeTrue: $incomeTrue
      paymentType: $paymentType
      accountCode: $accountCode
      businessDesc: $businessDesc
    ) {
      ok
      id
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;

const useCreateProductMutate = () => {
  const navigate = useNavigate();
  const params = useParams<keyof IParamID>();
  const [createProduct, {loading, error}] = useMutation(CREATE_PRODUCT_MUTATE);

  const handleCreateProduct = async ({
    id,
    itemProductId,
    itemName,
    itemModelName,
    itemType,
    itemCount,
    itemPrice,
    itemDesc,
    incomeTrue,
    paymentType,
    accountCode,
    businessDesc,
    paymentsDone,
  }: ICreateProduct) => {
    if (loading) {
      return null;
    }
    await createProduct({
      variables: {
        createProductId: id,
        itemProductId,
        itemName,
        itemModelName,
        itemType,
        itemCount: Number(itemCount),
        itemPrice: Number(itemPrice),
        itemDesc,
        incomeTrue: incomeTrue === "INCOME" ? true : false,
        paymentType,
        accountCode,
        businessDesc,
        paymentsDone,
      },
      update(cache, {data}) {
        if (data?.createProduct.ok) {
          const newObj = {
            __typename: "Product",
            id: `Product:${data.createProduct.id}`,
            itemName,
            itemCount,
            itemProductId,
            itemPrice,
            itemModelName,
            itemDesc,
            itemType,
          };
          cache.modify({
            id: `Company:${id}`,
            fields: {
              companyProduct(prev) {
                return [newObj, ...prev];
              },
            },
          });
        }
      },
      onCompleted({createProduct}) {
        if (!createProduct.ok) {
          alert(createProduct.errorMsg);
        }
        navigate(`/company/${params.id}/product`);
      },
    });
  };
  return {handleCreateProduct, loading, error};
};

export default useCreateProductMutate;
