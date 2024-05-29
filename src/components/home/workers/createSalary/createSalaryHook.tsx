import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {Mutation} from "../../../../libs/__generated__/graphql";
import {ICreateSalary} from "../../../../types/types";
import {useNavigate, useParams} from "react-router-dom";
import {IParamID} from "../../../../types/routerType";
const CREATE_SALARY_MUTATE = gql`
  mutation createSalary(
    $id: Int!
    $companyName: String!
    $familyCount: Int
    $preTaxMonthlySalary: Int
    $childCount: Int
  ) {
    createSalary(
      id: $id
      companyName: $companyName
      familyCount: $familyCount
      preTaxMonthlySalary: $preTaxMonthlySalary
      childCount: $childCount
    ) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
const useCreateSalary = () => {
  const navigate = useNavigate();
  const params = useParams<keyof IParamID>();
  const [createSalary, {loading, error}] = useMutation(CREATE_SALARY_MUTATE);
  const handleCreateSalary = async ({
    id,
    companyName,
    familyCount,
    preTaxMonthlySalary,
    childCount,
  }: ICreateSalary) => {
    await createSalary({
      variables: {
        id,
        companyName,
        familyCount,
        preTaxMonthlySalary,
        childCount,
      },
      onCompleted({createSalary}) {
        if (!createSalary.ok) {
          alert(createSalary.errorMsg);
        }
        navigate(`/company/${params.id}/workers`);
      },
      update(cache, {data}) {
        if (data?.createSalary.ok) {
          const salaryObj = {
            __typename: "Salary",
            id: "",
            createdAt: Date.now(),
            updateAt: Date.now(),
            familyCount,
            preTaxMonthlySalary,
            childCount,
          };
          cache.modify({
            id: "ROOT_QUERY",
            fields: {
              seeCompanyWorker(prev) {
                return [...prev, salaryObj];
              },
            },
          });
        }
      },
    });
  };
  return {handleCreateSalary, loading, error};
};
export default useCreateSalary;
