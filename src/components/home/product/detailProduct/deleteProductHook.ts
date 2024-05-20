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
  companyName: string;
}
const DELETE_PRODUCT_MUTATE = gql`
  mutation deleteProduct($companyName: String!, $deleteProductId: Int!) {
    deleteProduct(companyName: $companyName, id: $deleteProductId) {
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
    companyName,
  }: IDeleteProduct) => {
    await deleteProduct({
      variables: {deleteProductId: productId, companyName},
      update(cache) {
        cache.evict({id: `Product:${productId}`});
        cache.gc();
      },
      onCompleted(data) {
        if (!data.deleteProduct.ok) {
          alert(data.deleteProduct.errorMsg);
        }
        navigate(`/company/${companyName}/product`);
      },
    });
  };
  return {handleDeleteProduct, loading, error};
};
export default useDeleteProduct;
