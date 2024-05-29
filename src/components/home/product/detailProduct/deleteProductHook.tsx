import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {Mutation} from "../../../../libs/__generated__/graphql";
import {useNavigate} from "react-router-dom";
interface IDeleteProduct {
  productId: number;
  companyId: number;
}
const DELETE_PRODUCT_MUTATE = gql`
  mutation deleteProduct($companyId: Int!, $productId: Int!) {
    deleteProduct(companyId: $companyId, productId: $productId) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
const useDeleteProduct = () => {
  const navigate = useNavigate();
  const [deleteProduct, {loading, error}] = useMutation(DELETE_PRODUCT_MUTATE);
  const handleDeleteProduct = async ({
    productId,
    companyId,
  }: IDeleteProduct) => {
    await deleteProduct({
      variables: {companyId, productId},
      update(cache) {
        cache.evict({id: `Product:${productId}`});
        cache.gc();
      },
      onCompleted(data) {
        if (!data.deleteProduct.ok) {
          alert(data.deleteProduct.errorMsg);
        }
        navigate(`/company/${companyId}/product`);
      },
    });
  };
  return {handleDeleteProduct, loading, error};
};
export default useDeleteProduct;
