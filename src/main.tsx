import React from "react";
import ReactDOM from "react-dom/client";
import {ApolloProvider} from "@apollo/client";
import client from "./libs/apollo-client.ts";
import {Provider} from "react-redux";

import App from "./App.tsx";
import store from "./store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
