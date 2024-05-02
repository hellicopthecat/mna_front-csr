import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {useAppDispatch, useAppSelector} from "./storeHook";
import {useEffect} from "react";
import {removeToken} from "../redux/tokenSlice";
import {useNavigate} from "react-router-dom";
import {Query} from "../libs/__generated__/graphql";
import {urlName} from "../libs/constants";

const IS_ME_QUERY = gql`
  query SeeMyprofile {
    seeMyprofile {
      id
      createdAt
      updateAt
      username
      email
      firstName
      lastName
      phone
    }
  }
` as DocumentNode | TypedDocumentNode<Query>;
const useUser = () => {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.token.token);
  const dispatch = useAppDispatch();
  const {data, error, loading} = useQuery(IS_ME_QUERY, {skip: !token});
  useEffect(() => {
    if (!data && !token) {
      dispatch(removeToken());
      navigate(urlName.login);
    }
  }, [data, error, loading, dispatch, navigate, token]);
  return {data, error, loading};
};
export default useUser;
