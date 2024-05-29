import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {IEditProduct} from "../../../../types/types";
import {Mutation, TPaymentSwitch} from "../../../../libs/__generated__/graphql";
import {useNavigate, useParams} from "react-router-dom";

const EDIT_PRODUCT_MUTATE = gql`
  mutation editProduct(
    $editProductId: Int!
    $itemProductId: String!
    $itemModelName: String
    $itemName: String
    $itemType: String
    $itemCount: Int
    $itemPrice: Int
    $itemDesc: String
    $incomeTrue: Boolean
    $paymentType: String
    $accountCode: String
    $businessDesc: String
    $paymentsDone: TPaymentSwitch
  ) {
    editProduct(
      id: $editProductId
      itemProductId: $itemProductId
      itemModelName: $itemModelName
      itemName: $itemName
      itemType: $itemType
      itemCount: $itemCount
      itemPrice: $itemPrice
      itemDesc: $itemDesc
      incomeTrue: $incomeTrue
      paymentType: $paymentType
      accountCode: $accountCode
      businessDesc: $businessDesc
      paymentsDone: $paymentsDone
    ) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
const useEditProduct = () => {
  //hook
  const navigate = useNavigate();
  const param = useParams();
  //gql Mutate
  const [editProduct, {error, loading}] = useMutation(EDIT_PRODUCT_MUTATE);
  //fn
  const handelEditProduct = async ({
    id,
    incomeExpendId,
    itemProductId,
    itemModelName,
    itemName,
    itemType,
    itemCount,
    itemPrice,
    itemDesc,
    incomeTrue,
    paymentType,
    accountCode,
    businessDesc,
    paymentsDone,
  }: IEditProduct) => {
    await editProduct({
      variables: {
        editProductId: Number(id),
        itemProductId,
        itemModelName,
        itemName,
        itemType,
        itemCount: Number(itemCount),
        itemPrice: Number(itemPrice),
        itemDesc,
        incomeTrue: incomeTrue === "income" ? true : false,
        paymentType,
        accountCode,
        businessDesc,
        paymentsDone,
      },
      update(cache, {data}) {
        if (data?.editProduct.ok) {
          cache.modify({
            id: `Product:${id}`,
            fields: {
              itemModelName() {
                return itemModelName + "";
              },
              itemName() {
                return itemName + "";
              },
              itemType() {
                return itemType + "";
              },
              itemCount() {
                return itemCount === 0 ? 1 : Number(itemCount);
              },
              itemPrice() {
                return Number(itemPrice);
              },
              itemDesc() {
                return itemDesc + "";
              },
            },
          });
          cache.modify({
            id: `IncomeExpend:${incomeExpendId}`,
            fields: {
              incomeTrue() {
                return incomeTrue === "income" ? true : false;
              },
              paymentType() {
                return paymentType + "";
              },
              accountCode() {
                return accountCode + "";
              },
              businessDesc() {
                return businessDesc + "";
              },
              paymentsDone() {
                return paymentsDone as TPaymentSwitch;
              },
            },
          });
        }
      },
      onCompleted(data) {
        if (!data.editProduct.ok) {
          alert(data.editProduct.errorMsg);
        }
        navigate(`/company/${param.id}/product`);
      },
    });
  };
  return {handelEditProduct, loading, error};
};
export default useEditProduct;
