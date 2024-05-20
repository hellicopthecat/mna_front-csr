import {gql, useMutation} from "@apollo/client";
import {useParams} from "react-router-dom";
import {ICreateVacation} from "../../../../../types/types";
import {IParamID} from "../../../../../types/routerType";

const CREATE_VACATION_HOOK = gql`
  mutation createVacation(
    $username: String!
    $companyName: String!
    $annual: Int
    $joinCompanyDate: String
  ) {
    createVacation(
      username: $username
      companyName: $companyName
      annual: $annual
      joinCompanyDate: $joinCompanyDate
    ) {
      ok
      errorMsg
    }
  }
`;
const useCreateVacation = () => {
  const param = useParams<keyof IParamID>();
  const [createVacation, {loading, error}] = useMutation(CREATE_VACATION_HOOK);
  const handleCreateVacation = async ({
    annual,
    joinCompanyDate,
  }: ICreateVacation) => {
    await createVacation({
      variables: {
        username: param.userID,
        companyName: param.id,
        annual,
        joinCompanyDate,
      },
    });
  };
  return {handleCreateVacation, loading, error};
};
export default useCreateVacation;
