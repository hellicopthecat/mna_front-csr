import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {Mutation} from "../../../../../libs/__generated__/graphql";
import {useNavigate} from "react-router-dom";
import {urlName} from "../../../../../libs/constants";
import useUser from "../../../../../hooks/useUser";

const CREATE_COMPANY_MUTATE = gql`
  mutation createCompany($companyName: String!) {
    createCompany(companyName: $companyName) {
      ok
      id
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
const useCreateCompany = () => {
  const {data: userData} = useUser();
  const navigate = useNavigate();
  const [createCompany, {loading, error}] = useMutation(CREATE_COMPANY_MUTATE);
  const handleCreateCompany = async ({companyName}: {companyName: string}) => {
    await createCompany({
      variables: {
        companyName,
      },
      onCompleted(data) {
        if (!data.createCompany.ok) {
          alert(data.createCompany.errorMsg);
        }
        navigate(urlName.comapny);
      },
      update(cache, {data}) {
        const newObj = {
          __typename: "Company",
          id: data?.createCompany.id,
          createdAt: Date.now().toString(),
          updateAt: Date.now().toString(),
          companyLogo: null,
          companyName,
          isManager: true,
          isOwned: true,
        };
        if (data?.createCompany.ok) {
          cache.modify({
            id: `User:${userData?.seeMyprofile.id}`,
            fields: {
              ownCompany(prev) {
                return [...prev, newObj];
              },
            },
          });
        }
      },
    });
  };
  return {handleCreateCompany, loading, error};
};
export default useCreateCompany;
