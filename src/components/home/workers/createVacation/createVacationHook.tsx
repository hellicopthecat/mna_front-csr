import {gql, useMutation} from "@apollo/client";
import {useParams} from "react-router-dom";
import {IParamID} from "../../../../types/routerType";
import {ICreateVacation} from "../../../../types/types";

const CREATE_VACATION_HOOK = gql`
  mutation createVacation(
    $createVacationId: Int!
    $username: String!
    $other: Int
    $joinCompanyDate: String
  ) {
    createVacation(
      id: $createVacationId
      username: $username
      other: $other
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
    other,
    joinCompanyDate,
  }: ICreateVacation) => {
    await createVacation({
      variables: {
        username: param.userID,
        createVacationId: Number(param.id),
        other,
        joinCompanyDate,
      },
    });
  };
  return {handleCreateVacation, loading, error};
};
export default useCreateVacation;
