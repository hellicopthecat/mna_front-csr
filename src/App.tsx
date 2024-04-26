import {ThemeProvider} from "styled-components";
import Layout from "./components/layout.tsx";
import GlobalStlye from "./libs/globalStyle.ts";
import {dark, light} from "./libs/theme.ts";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Preview from "./page/beforeLogin/preview/preview.tsx";
import Home from "./page/afterLogin/home/home.tsx";

import Login from "./page/beforeLogin/login/login.tsx";
import Join from "./page/beforeLogin/join/join.tsx";
import {useAppSelector} from "./hooks/storeHook.ts";
import {urlName} from "./libs/constants.ts";

function App() {
  const {token} = useAppSelector((state) => state.token);
  const {theme} = useAppSelector((state) => state.theme);
  return (
    <ThemeProvider theme={!theme ? light : dark}>
      <GlobalStlye />
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route
              path={urlName.home}
              element={!token ? <Preview /> : <Home />}
            />
            <Route path={urlName.login} element={<Login />} />
            <Route path={urlName.join} element={<Join />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
