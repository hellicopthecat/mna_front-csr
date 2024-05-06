import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {IEditInNoutProps} from "../../../../types/types";
import {Mutation} from "../../../../libs/__generated__/graphql";

const EDIT_INNOUT_MUTATE = gql`
  mutation editInNout(
    $companyName: String!
    $accountNum: String
    $accountName: String
    $accountDesc: String
  ) {
    editInNout(
      companyName: $companyName
      accountNum: $accountNum
      accountName: $accountName
      accountDesc: $accountDesc
    ) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
const useAccountInfoEditMutate = () => {
  const [editInNout, {loading}] = useMutation(EDIT_INNOUT_MUTATE);
  const handleEditInNout = async ({
    accountID,
    companyName,
    accountDesc,
    accountName,
    accountNum,
  }: IEditInNoutProps) => {
    if (loading) {
      return;
    }
    await editInNout({
      variables: {
        companyName,
        accountDesc,
        accountName,
        accountNum,
      },
      update(cache, result) {
        if (result.data?.editInNout.ok) {
          const id = `InNout:${accountID}`;
          cache.modify({
            id,
            fields: {
              accountDesc() {
                return accountDesc + "";
              },
              accountName() {
                return accountName + "";
              },
              accountNum() {
                return accountNum + "";
              },
            },
          });
        }
      },
    });
  };
  return {handleEditInNout};
};
export default useAccountInfoEditMutate;
