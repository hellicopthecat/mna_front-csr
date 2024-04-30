import {FetchResult, gql, useMutation} from "@apollo/client";
import {IEditUserInputProps} from "../../../../types/types";
import {useNavigate} from "react-router-dom";
import {Mutation} from "../../../../libs/__generated__/graphql";
import {urlName} from "../../../../libs/constants";

const EDIT_USER_MUTATION = gql`
  mutation EditUser(
    $password: String
    $firstName: String
    $lastName: String
    $avatar: String
    $phone: String
  ) {
    editUser(
      password: $password
      firstName: $firstName
      lastName: $lastName
      avatar: $avatar
      phone: $phone
    ) {
      errorMsg
      ok
    }
  }
`;

const useEditUser = () => {
  //hooks
  const navigate = useNavigate();
  //gql
  const [editUser, {loading}] = useMutation(EDIT_USER_MUTATION);
  //fn
  const handleEditUser = async ({
    password,
    firstName,
    lastName,
    phone,
    userId,
  }: IEditUserInputProps) => {
    if (loading) {
      return null;
    }
    const {data} = await editUser({
      variables: {
        password: password || null,
        firstName,
        lastName,
        phone,
      },
      update(cache, {data}: Omit<FetchResult<Mutation>, "context">) {
        if (data?.editUser.ok) {
          const id = `User:${userId}`;
          cache.modify({
            id,
            fields: {
              firstName() {
                return firstName + "";
              },
              lastName() {
                return lastName + "";
              },
              phone() {
                return phone + "";
              },
            },
          });
        }
      },
    });

    if (data.editUser.ok) {
      navigate(urlName.home);
    }
  };
  return {handleEditUser};
};
export default useEditUser;
