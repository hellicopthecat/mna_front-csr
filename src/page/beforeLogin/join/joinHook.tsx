import {
  DocumentNode,
  MutationFunctionOptions,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {IJoinFormProps} from "../../../types/types";
import {Mutation} from "../../../libs/__generated__/graphql";
import {useNavigate} from "react-router-dom";

const JOINUSER_MUTATE = gql`
  mutation Mutation(
    $username: String!
    $email: String!
    $password: String!
    $phone: String
    $firstName: String
    $lastName: String
  ) {
    createUser(
      username: $username
      email: $email
      password: $password
      phone: $phone
      firstName: $firstName
      lastName: $lastName
    ) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
//custom hook
const useJoinUser = () => {
  //hooks
  const navigate = useNavigate();
  //onComplete
  const onCompleted = (
    data: Mutation,
    result: MutationFunctionOptions | undefined
  ) => {
    const {ok, errorMsg} = data.createUser;
    if (!ok) {
      alert(errorMsg);
      return null;
    }
    navigate("/login", {
      state: {
        username: result?.variables?.username,
        password: result?.variables?.password,
      },
    });
  };
  //mutate
  const [createAccout, {loading}] = useMutation(JOINUSER_MUTATE, {onCompleted});
  const handleCreateAccout = async ({
    username,
    email,
    password,
    phone,
    firstName,
    lastName,
  }: IJoinFormProps) => {
    if (loading) {
      return null;
    }
    await createAccout({
      variables: {
        username,
        email,
        password,
        phone,
        firstName,
        lastName,
      },
    });
  };
  return {handleCreateAccout};
};
export default useJoinUser;
