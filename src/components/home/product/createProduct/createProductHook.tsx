import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
  useQuery,
} from "@apollo/client";
import {ICreateProduct} from "../../../../types/types";
import {useNavigate, useParams} from "react-router-dom";
import {Mutation, Query} from "../../../../libs/__generated__/graphql";
import {PRODUCT_FRAG} from "../../../../libs/fragments/productFrag";
const CREATE_PRODUCT_MUTATE = gql`
  mutation Mutation(
    $itemProductId: String!
    $itemName: String!
    $companyName: String!
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
      companyName: $companyName
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
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
const DETAIL_PRODUCT = gql`
  query CompanyInNout($companyName: String!) {
    searchCompany(companyName: $companyName) {
      id
      companyProduct {
        ...ProductFrag
      }
    }
  }
  ${PRODUCT_FRAG}
` as DocumentNode | TypedDocumentNode<Query>;
const useCreateProductMutate = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [createProduct, {loading, error}] = useMutation(CREATE_PRODUCT_MUTATE);
  const {data: QueryData} = useQuery(DETAIL_PRODUCT, {
    variables: {companyName: params.id},
  });
  const handleCreateProduct = async ({
    companyName,
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
        companyName,
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
            id: "NEW",
            itemName,
            itemCount,
            itemProductId,
            itemPrice,
            itemModelName,
            itemDesc,
            itemType,
          };
          cache.modify({
            id: `Company:${QueryData?.searchCompany.id}`,
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
          return null;
        }
        navigate(`/company/${params.id}/product`);
      },
    });
  };
  return {handleCreateProduct, loading, error};
};

export default useCreateProductMutate;
