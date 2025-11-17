## Install React / Typescript / apollo-client / graphql / framer-motion / react-router-dom / react-hook-form / styled-components

```
mna_front-csr
├─ .DS_Store
├─ .eslintrc.cjs
├─ README.md
├─ codegen.ts
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
├─ src
│  ├─ App.tsx
│  ├─ assets
│  ├─ components
│  │  ├─ auth
│  │  │  └─ authInput.tsx
│  │  ├─ avatar.tsx
│  │  ├─ body
│  │  │  ├─ footer
│  │  │  │  └─ footer.tsx
│  │  │  ├─ header
│  │  │  │  ├─ header.style.ts
│  │  │  │  ├─ header.tsx
│  │  │  │  └─ headerSearch
│  │  │  │     └─ headerSearch.tsx
│  │  │  └─ nav
│  │  │     └─ nav.tsx
│  │  ├─ btnTheme.tsx
│  │  ├─ container.tsx
│  │  ├─ home
│  │  │  ├─ detailCompany
│  │  │  │  ├─ companyConnect.tsx
│  │  │  │  ├─ companyInfo
│  │  │  │  │  ├─ companyInfo.style.ts
│  │  │  │  │  ├─ companyInfo.tsx
│  │  │  │  │  ├─ connectCompanyHook
│  │  │  │  │  │  ├─ connectCompanyHook.tsx
│  │  │  │  │  │  └─ disConnectCompany.tsx
│  │  │  │  │  └─ editCompanyAdress
│  │  │  │  │     └─ editCompanyAdressHook.tsx
│  │  │  │  └─ companyProduct.tsx
│  │  │  ├─ product
│  │  │  │  ├─ createProduct
│  │  │  │  │  ├─ createProduct.style.ts
│  │  │  │  │  ├─ createProduct.tsx
│  │  │  │  │  └─ createProductHook.tsx
│  │  │  │  ├─ detailProduct
│  │  │  │  │  ├─ deleteProductHook.tsx
│  │  │  │  │  ├─ detailProduct.style.ts
│  │  │  │  │  ├─ detailProduct.tsx
│  │  │  │  │  ├─ editDetailProduct.style.ts
│  │  │  │  │  ├─ editDetailProduct.tsx
│  │  │  │  │  └─ editProductHook.tsx
│  │  │  │  ├─ productCard
│  │  │  │  │  ├─ productCard.style.ts
│  │  │  │  │  └─ productCard.tsx
│  │  │  │  └─ productHeader
│  │  │  │     └─ productHeader.tsx
│  │  │  └─ workers
│  │  │     ├─ companyWorkers.style.ts
│  │  │     ├─ companyWorkers.tsx
│  │  │     ├─ createSalary
│  │  │     │  ├─ createSalary.style.ts
│  │  │     │  ├─ createSalary.tsx
│  │  │     │  └─ createSalaryHook.tsx
│  │  │     ├─ createVacation
│  │  │     │  ├─ createVacation.style.ts
│  │  │     │  ├─ createVacation.tsx
│  │  │     │  └─ createVacationHook.tsx
│  │  │     ├─ detailSalary
│  │  │     │  ├─ detailSalary.style.ts
│  │  │     │  └─ detailSalary.tsx
│  │  │     ├─ detailVacation
│  │  │     │  ├─ detailVacation.style.ts
│  │  │     │  ├─ detailVacation.tsx
│  │  │     │  ├─ editVacationHook.tsx
│  │  │     │  ├─ resetVacationDescHook.tsx
│  │  │     │  └─ vacationDesc
│  │  │     │     └─ vacationDesc.tsx
│  │  │     ├─ registerWorker
│  │  │     │  ├─ registerWorker.style.ts
│  │  │     │  ├─ registerWorker.tsx
│  │  │     │  └─ registerWorkerHook.tsx
│  │  │     ├─ usingVacation
│  │  │     │  ├─ usingVacation.style.ts
│  │  │     │  ├─ usingVacation.tsx
│  │  │     │  └─ usingVacationHook.tsx
│  │  │     ├─ workerSalary
│  │  │     │  └─ workerSalary.tsx
│  │  │     └─ workerVacation
│  │  │        ├─ workerVacation.style.ts
│  │  │        └─ workerVacation.tsx
│  │  ├─ myProfile
│  │  │  ├─ editUser
│  │  │  │  └─ editUserInput.tsx
│  │  │  └─ userCompany
│  │  │     ├─ userComapnyBadge.tsx
│  │  │     └─ userCompanyInfo.tsx
│  │  └─ shareComp
│  │     └─ modalWrapper.tsx
│  ├─ hooks
│  │  ├─ storeHook.ts
│  │  └─ useUser.tsx
│  ├─ libs
│  │  ├─ __generated__
│  │  │  ├─ fragment-masking.ts
│  │  │  ├─ gql.ts
│  │  │  ├─ graphql.ts
│  │  │  └─ index.ts
│  │  ├─ apollo-client.ts
│  │  ├─ constants.ts
│  │  ├─ fragments
│  │  │  ├─ companyAdressFrag.ts
│  │  │  ├─ equityLiabilitiesFrag.ts
│  │  │  ├─ fragments.ts
│  │  │  ├─ incomeExpendFrag.ts
│  │  │  ├─ productFrag.ts
│  │  │  ├─ salaryFrag.ts
│  │  │  ├─ userFrag.ts
│  │  │  └─ vacationFrag.ts
│  │  ├─ globalStyle.ts
│  │  ├─ theme.ts
│  │  └─ util.ts
│  ├─ main.tsx
│  ├─ page
│  │  ├─ afterLogin
│  │  │  ├─ home
│  │  │  │  ├─ detailCompany
│  │  │  │  │  ├─ detailCompany.style.ts
│  │  │  │  │  └─ detailCompany.tsx
│  │  │  │  └─ home.tsx
│  │  │  ├─ myprofile
│  │  │  │  ├─ editUser
│  │  │  │  │  ├─ editUser.style.ts
│  │  │  │  │  ├─ editUser.tsx
│  │  │  │  │  └─ editUserHook.tsx
│  │  │  │  ├─ myprofile.style.ts
│  │  │  │  ├─ myprofile.tsx
│  │  │  │  ├─ userCompany
│  │  │  │  │  ├─ createCompany
│  │  │  │  │  │  ├─ createCompany.style.ts
│  │  │  │  │  │  ├─ createCompany.tsx
│  │  │  │  │  │  └─ createCompanyHook.tsx
│  │  │  │  │  ├─ deleteCompanyHook.tsx
│  │  │  │  │  ├─ userCompany.style.ts
│  │  │  │  │  ├─ userCompany.tsx
│  │  │  │  │  └─ userManageCompany.tsx
│  │  │  │  └─ userInfo
│  │  │  │     ├─ userInfo.style.ts
│  │  │  │     └─ userInfo.tsx
│  │  │  ├─ product
│  │  │  │  ├─ product.style.ts
│  │  │  │  └─ product.tsx
│  │  │  ├─ searchCompany
│  │  │  │  ├─ searchCompany.style.ts
│  │  │  │  └─ searchCompany.tsx
│  │  │  └─ workers
│  │  │     ├─ workers.styled.ts
│  │  │     └─ workers.tsx
│  │  └─ beforeLogin
│  │     ├─ join
│  │     │  ├─ join.style.ts
│  │     │  ├─ join.tsx
│  │     │  └─ joinHook.tsx
│  │     ├─ login
│  │     │  ├─ login.style.ts
│  │     │  ├─ login.tsx
│  │     │  └─ loginHook.tsx
│  │     └─ preview
│  │        └─ preview.tsx
│  ├─ redux
│  │  ├─ companyStateSlice.ts
│  │  ├─ loginTypeSlice.ts
│  │  ├─ navSlice.ts
│  │  ├─ searchCompanySlice.ts
│  │  ├─ themeSlice.ts
│  │  └─ tokenSlice.ts
│  ├─ store.ts
│  ├─ styled.d.ts
│  ├─ types
│  │  └─ types.ts
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```
```
mna_front-csr
├─ .DS_Store
├─ .eslintrc.cjs
├─ README.md
├─ codegen.ts
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
├─ src
│  ├─ App.tsx
│  ├─ assets
│  ├─ components
│  │  ├─ auth
│  │  │  └─ authInput.tsx
│  │  ├─ avatar.tsx
│  │  ├─ body
│  │  │  ├─ footer
│  │  │  │  └─ footer.tsx
│  │  │  ├─ header
│  │  │  │  ├─ header.style.ts
│  │  │  │  ├─ header.tsx
│  │  │  │  └─ headerSearch
│  │  │  │     └─ headerSearch.tsx
│  │  │  └─ nav
│  │  │     └─ nav.tsx
│  │  ├─ btnTheme.tsx
│  │  ├─ container.tsx
│  │  ├─ home
│  │  │  ├─ detailCompany
│  │  │  │  ├─ companyConnect.tsx
│  │  │  │  ├─ companyInfo
│  │  │  │  │  ├─ companyInfo.style.ts
│  │  │  │  │  ├─ companyInfo.tsx
│  │  │  │  │  ├─ connectCompanyHook
│  │  │  │  │  │  ├─ connectCompanyHook.tsx
│  │  │  │  │  │  └─ disConnectCompany.tsx
│  │  │  │  │  └─ editCompanyAdress
│  │  │  │  │     └─ editCompanyAdressHook.tsx
│  │  │  │  └─ companyProduct.tsx
│  │  │  ├─ product
│  │  │  │  ├─ createProduct
│  │  │  │  │  ├─ createProduct.style.ts
│  │  │  │  │  ├─ createProduct.tsx
│  │  │  │  │  └─ createProductHook.tsx
│  │  │  │  ├─ detailProduct
│  │  │  │  │  ├─ deleteProductHook.tsx
│  │  │  │  │  ├─ detailProduct.style.ts
│  │  │  │  │  ├─ detailProduct.tsx
│  │  │  │  │  ├─ editDetailProduct.style.ts
│  │  │  │  │  ├─ editDetailProduct.tsx
│  │  │  │  │  └─ editProductHook.tsx
│  │  │  │  ├─ productCard
│  │  │  │  │  ├─ productCard.style.ts
│  │  │  │  │  └─ productCard.tsx
│  │  │  │  └─ productHeader
│  │  │  │     └─ productHeader.tsx
│  │  │  └─ workers
│  │  │     ├─ companyWorkers.style.ts
│  │  │     ├─ companyWorkers.tsx
│  │  │     ├─ createSalary
│  │  │     │  ├─ createSalary.style.ts
│  │  │     │  ├─ createSalary.tsx
│  │  │     │  └─ createSalaryHook.tsx
│  │  │     ├─ createVacation
│  │  │     │  ├─ createVacation.style.ts
│  │  │     │  ├─ createVacation.tsx
│  │  │     │  └─ createVacationHook.tsx
│  │  │     ├─ detailSalary
│  │  │     │  ├─ detailSalary.style.ts
│  │  │     │  └─ detailSalary.tsx
│  │  │     ├─ detailVacation
│  │  │     │  ├─ detailVacation.style.ts
│  │  │     │  ├─ detailVacation.tsx
│  │  │     │  ├─ editVacationHook.tsx
│  │  │     │  ├─ resetVacationDescHook.tsx
│  │  │     │  └─ vacationDesc
│  │  │     │     └─ vacationDesc.tsx
│  │  │     ├─ registerWorker
│  │  │     │  ├─ registerWorker.style.ts
│  │  │     │  ├─ registerWorker.tsx
│  │  │     │  └─ registerWorkerHook.tsx
│  │  │     ├─ usingVacation
│  │  │     │  ├─ usingVacation.style.ts
│  │  │     │  ├─ usingVacation.tsx
│  │  │     │  └─ usingVacationHook.tsx
│  │  │     ├─ workerSalary
│  │  │     │  └─ workerSalary.tsx
│  │  │     └─ workerVacation
│  │  │        ├─ workerVacation.style.ts
│  │  │        └─ workerVacation.tsx
│  │  ├─ myProfile
│  │  │  ├─ editUser
│  │  │  │  └─ editUserInput.tsx
│  │  │  └─ userCompany
│  │  │     ├─ userComapnyBadge.tsx
│  │  │     └─ userCompanyInfo.tsx
│  │  └─ shareComp
│  │     └─ modalWrapper.tsx
│  ├─ hooks
│  │  ├─ storeHook.ts
│  │  └─ useUser.tsx
│  ├─ libs
│  │  ├─ __generated__
│  │  │  ├─ fragment-masking.ts
│  │  │  ├─ gql.ts
│  │  │  ├─ graphql.ts
│  │  │  └─ index.ts
│  │  ├─ apollo-client.ts
│  │  ├─ constants.ts
│  │  ├─ fragments
│  │  │  ├─ companyAdressFrag.ts
│  │  │  ├─ equityLiabilitiesFrag.ts
│  │  │  ├─ fragments.ts
│  │  │  ├─ incomeExpendFrag.ts
│  │  │  ├─ productFrag.ts
│  │  │  ├─ salaryFrag.ts
│  │  │  ├─ userFrag.ts
│  │  │  └─ vacationFrag.ts
│  │  ├─ globalStyle.ts
│  │  ├─ theme.ts
│  │  └─ util.ts
│  ├─ main.tsx
│  ├─ page
│  │  ├─ afterLogin
│  │  │  ├─ home
│  │  │  │  ├─ detailCompany
│  │  │  │  │  ├─ detailCompany.style.ts
│  │  │  │  │  └─ detailCompany.tsx
│  │  │  │  └─ home.tsx
│  │  │  ├─ myprofile
│  │  │  │  ├─ editUser
│  │  │  │  │  ├─ editUser.style.ts
│  │  │  │  │  ├─ editUser.tsx
│  │  │  │  │  └─ editUserHook.tsx
│  │  │  │  ├─ myprofile.style.ts
│  │  │  │  ├─ myprofile.tsx
│  │  │  │  ├─ userCompany
│  │  │  │  │  ├─ createCompany
│  │  │  │  │  │  ├─ createCompany.style.ts
│  │  │  │  │  │  ├─ createCompany.tsx
│  │  │  │  │  │  └─ createCompanyHook.tsx
│  │  │  │  │  ├─ deleteCompanyHook.tsx
│  │  │  │  │  ├─ userCompany.style.ts
│  │  │  │  │  ├─ userCompany.tsx
│  │  │  │  │  └─ userManageCompany.tsx
│  │  │  │  └─ userInfo
│  │  │  │     ├─ userInfo.style.ts
│  │  │  │     └─ userInfo.tsx
│  │  │  ├─ product
│  │  │  │  ├─ product.style.ts
│  │  │  │  └─ product.tsx
│  │  │  ├─ searchCompany
│  │  │  │  ├─ searchCompany.style.ts
│  │  │  │  └─ searchCompany.tsx
│  │  │  └─ workers
│  │  │     ├─ workers.styled.ts
│  │  │     └─ workers.tsx
│  │  └─ beforeLogin
│  │     ├─ join
│  │     │  ├─ join.style.ts
│  │     │  ├─ join.tsx
│  │     │  └─ joinHook.tsx
│  │     ├─ login
│  │     │  ├─ login.style.ts
│  │     │  ├─ login.tsx
│  │     │  └─ loginHook.tsx
│  │     └─ preview
│  │        └─ preview.tsx
│  ├─ redux
│  │  ├─ companyStateSlice.ts
│  │  ├─ loginTypeSlice.ts
│  │  ├─ navSlice.ts
│  │  ├─ searchCompanySlice.ts
│  │  ├─ themeSlice.ts
│  │  └─ tokenSlice.ts
│  ├─ store.ts
│  ├─ styled.d.ts
│  ├─ types
│  │  └─ types.ts
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```