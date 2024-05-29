import {ThemeProvider} from "styled-components";
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
import DetailEveryInNout from "./page/afterLogin/detailEveryInNout/detailEveryInNout.tsx";
import EditAsset from "./components/home/detailInNout/editAsset/editAsset.tsx";
import CreateAssets from "./components/home/detailInNout/createAssets/createAssets.tsx";
import Product from "./page/afterLogin/product/product.tsx";
import CreateProduct from "./components/home/product/createProduct/createProduct.tsx";
import DetailProduct from "./components/home/product/detailProduct/detailProduct.tsx";
import CompanyWorkers from "./components/home/workers/companyWorkers.tsx";
import CreateVacation from "./components/home/workers/createVacation/createVacation.tsx";
import RegisterWorker from "./components/home/workers/registerWorker/registerWorker.tsx";
import CreateSalary from "./components/home/workers/createSalary/createSalary.tsx";
import DetailVacation from "./components/home/workers/detailVacation/detailVacation.tsx";
import DetailSalary from "./components/home/workers/detailSalary/detailSalary.tsx";
import UsingVacation from "./components/home/workers/usingVacation/usingVacation.tsx";
import CreateCompany from "./page/afterLogin/myprofile/userCompany/createCompany/createCompany.tsx";
import SearchCompany from "./page/afterLogin/searchCompany/searchCompany.tsx";

function App() {
  const {token} = useAppSelector((state) => state.token);
  const {theme} = useAppSelector((state) => state.theme);
  return (
    <ThemeProvider theme={!theme ? light : dark}>
      <GlobalStlye />
      <BrowserRouter>
        <Routes>
          <Route
            path={urlName.home}
            element={!token ? <Preview /> : <Myprofile />}
          >
            <Route path={urlName.home} element={<UserProfileInfo />} />
            <Route path={urlName.editUser} element={<EditUser />} />
            <Route path={urlName.comapny} element={<UserCompany />} />
            <Route path={urlName.createCompany} element={<CreateCompany />} />
            <Route path={urlName.manage} element={<UserManageCompany />} />
          </Route>

          <Route path={urlName.login} element={<Login />} />
          <Route path={urlName.join} element={<Join />} />

          <Route path={urlName.detailCompany} element={<Home />}>
            <Route path={urlName.detailCompany} element={<DetailCompany />} />
            <Route path={urlName.searchCompany} element={<SearchCompany />} />
            <Route path={urlName.companyInNout} element={<DetailEveryInNout />}>
              <Route path={urlName.editInNout} element={<EditAsset />} />
              <Route path={urlName.createAssets} element={<CreateAssets />} />
            </Route>
            <Route path={urlName.product} element={<Product />}>
              <Route path={urlName.createProduct} element={<CreateProduct />} />
              <Route path={urlName.detailProduct} element={<DetailProduct />} />
            </Route>
            <Route path={urlName.companyWokers} element={<CompanyWorkers />}>
              <Route path={urlName.registWorker} element={<RegisterWorker />} />
              <Route
                path={urlName.createVacation}
                element={<CreateVacation />}
              />
              <Route path={urlName.createSalary} element={<CreateSalary />} />
              <Route path={urlName.detailSalary} element={<DetailSalary />} />
              <Route
                path={urlName.detailVacation}
                element={<DetailVacation />}
              />
              <Route path={urlName.usingVacation} element={<UsingVacation />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
