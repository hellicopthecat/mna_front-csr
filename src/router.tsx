import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Login from "./page/beforeLogin/login/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {path: "login", element: <Login />},
  {path: "join", element: <Login />},
]);
export default router;
