import React from "react";
import ReactDOM from "react-dom/client";
import {ApolloProvider} from "@apollo/client";
import client from "./libs/apollo-client.ts";

import router from "./router.tsx";
import {RouterProvider} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
