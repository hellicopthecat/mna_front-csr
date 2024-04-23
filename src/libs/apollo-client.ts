import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {TOKEN} from "./constants";

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_LOCAL_GRAPHQL,
});
const authLink = setContext((_, {headers}) => {
  const token = sessionStorage.getItem(TOKEN);
  return {
    headers: {
      ...headers,
      token,
    },
  };
});

const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default client;
