import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";

import {ILoginFormProps} from "../../../types/types";
import {Mutation} from "../../../libs/__generated__/graphql";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setToken} from "../../../redux/tokenSlice";

const LOGIN_MUTAION = gql`
  mutation loginUser($password: String!, $email: String, $username: String) {
    loginUser(password: $password, email: $email, username: $username) {
      token
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;

const useLoginMutate = () => {
  //hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //state

  const onCompleted = (data: Mutation) => {
    const {token, ok, errorMsg} = data.loginUser;
    if (!ok) {
      alert(errorMsg);
      return null;
    }
    if (ok) {
      dispatch(setToken(token));
      navigate("/");
    }
  };
  const [loginUser, {loading}] = useMutation(LOGIN_MUTAION, {
    onCompleted,
  });

  const handleLogin = async ({username, email, password}: ILoginFormProps) => {
    if (loading) {
      return;
    }
    if (username) {
      await loginUser({
        variables: {
          username,
          password,
        },
      });
    }
    if (email) {
      await loginUser({
        variables: {
          email,
          password,
        },
      });
    }
  };

  return {handleLogin};
};
export default useLoginMutate;
