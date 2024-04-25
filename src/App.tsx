import {ThemeProvider} from "styled-components";
import Layout from "./components/layout.tsx";
import GlobalStlye from "./libs/globalStyle.ts";
import {dark, light} from "./libs/theme.ts";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Preview from "./page/beforeLogin/preview/preview.tsx";
import Home from "./page/afterLogin/home/home.tsx";
import {useAppSelector} from "./hooks/storeHook.ts";
import {useEffect} from "react";
import Login from "./page/beforeLogin/login/login.tsx";
import Join from "./page/beforeLogin/join/join.tsx";

function App() {
  const token = useAppSelector((state) => state.token.token);
  useEffect(() => {}, [token]);
  return (
    <ThemeProvider theme={light}>
      <GlobalStlye />
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={!token ? <Preview /> : <Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
