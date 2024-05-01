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
import Myprofile from "./page/afterLogin/myprofile/myprofile.tsx";
import UserProfileInfo from "./page/afterLogin/myprofile/userInfo/userInfo.tsx";
import EditUser from "./page/afterLogin/myprofile/editUser/editUser.tsx";
import UserCompany from "./page/afterLogin/myprofile/userCompany/userCompany.tsx";
import UserManageCompany from "./page/afterLogin/myprofile/userCompany/userManageCompany.tsx";
import DetailCompany from "./page/afterLogin/home/detailCompany/detailCompany.tsx";
import DetailInNout from "./page/afterLogin/home/detailInNout/detailInNout.tsx";

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
              element={!token ? <Preview /> : <Myprofile />}
            >
              <Route path={urlName.home} element={<UserProfileInfo />} />
              <Route path={urlName.editUser} element={<EditUser />} />
              <Route path={urlName.comapny} element={<UserCompany />} />
              <Route path={urlName.manage} element={<UserManageCompany />} />
            </Route>
            <Route path={urlName.login} element={<Login />} />
            <Route path={urlName.join} element={<Join />} />
            <Route path={urlName.detailCompany} element={<Home />}>
              <Route path={urlName.detailCompany} element={<DetailCompany />} />
              <Route path={urlName.companyInNout} element={<DetailInNout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
