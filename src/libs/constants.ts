export const TOKEN = "TOKEN";
export const THEME = "THEME";
export const COMPANY_NAME = "COMPANY_NAME";
export const COMPANY_ID = "COMPANY_ID";

export const urlName = {
  home: "/",
  login: "/login",
  join: "/join",
  editUser: "/:id/edit",
  comapny: "/mycompany",
  createCompany: "/create-company",
  manage: "/mymanage",
  detailCompany: "/company/:id",
  companyInNout: "/company/:id/innout",
  createAssets: "/company/:id/innout/:inoutid/createAssets",
  editInNout: "/company/:id/innout/:inoutid/:assetid",
  product: "/company/:id/product",
  createProduct: "/company/:id/product/createProduct",
  detailProduct: "/company/:id/product/:productID",
  companyWokers: "/company/:id/workers",
  registWorker: "/company/:id/workers/regist-worker",
  createVacation: "/company/:id/workers/:userID/create-vacation",
  createSalary: "/company/:id/workers/:userID/create-salary",
  detailSalary: "/company/:id/workers/:userID/detail-salary/:salaryID",
  detailVacation: "/company/:id/workers/:userID/detail-vacation/:vacationID",
  usingVacation:
    "/company/:id/workers/:userID/detail-vacation/:vacationID/use-vacation",
  searchCompany: "/company/:id/search-company",
};
