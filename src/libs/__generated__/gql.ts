/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation connectCompany($companyId: Int!, $targetCompanyId: Int!) {\n    connectCompany(companyId: $companyId, targetCompanyId: $targetCompanyId) {\n      ok\n      errorMsg\n    }\n  }\n": types.ConnectCompanyDocument,
    "\n  mutation disConnectCompany($companyId: Int!, $targetCompanyId: Int!) {\n    disconnectCompany(\n      companyId: $companyId\n      targetCompanyId: $targetCompanyId\n    ) {\n      ok\n      errorMsg\n    }\n  }\n": types.DisConnectCompanyDocument,
    "\n  mutation editCompanyAdress(\n    $editCompanyAdressId: Int!\n    $adressNum: String\n    $restAdress: String\n    $streetAdress: String\n    $city: String\n    $country: String\n  ) {\n    editCompanyAdress(\n      id: $editCompanyAdressId\n      adressNum: $adressNum\n      restAdress: $restAdress\n      streetAdress: $streetAdress\n      city: $city\n      country: $country\n    ) {\n      ok\n      errorMsg\n    }\n  }\n": types.EditCompanyAdressDocument,
    "\n  mutation editInNout(\n    $editInNoutId: Int!\n    $accountNum: String\n    $accountName: String\n    $accountDesc: String\n  ) {\n    editInNout(\n      id: $editInNoutId\n      accountNum: $accountNum\n      accountName: $accountName\n      accountDesc: $accountDesc\n    ) {\n      ok\n      errorMsg\n    }\n  }\n": types.EditInNoutDocument,
    "\n  mutation CreateEnL(\n    $createEnLId: Int!\n    $enLId: String!\n    $enLName: String!\n    $enLType: String!\n    $current: Boolean!\n    $assests: Boolean!\n    $value: Int!\n    $enLDesc: String\n  ) {\n    createEnL(\n      id: $createEnLId\n      enLId: $enLId\n      enLName: $enLName\n      enLType: $enLType\n      current: $current\n      assests: $assests\n      value: $value\n      enLDesc: $enLDesc\n    ) {\n      ok\n      id\n      errorMsg\n    }\n  }\n": types.CreateEnLDocument,
    "\n  mutation deleteEnl($enLId: String!) {\n    deleteEnL(enLId: $enLId) {\n      ok\n      errorMsg\n    }\n  }\n": types.DeleteEnlDocument,
    "\n  query seeEnl($seeEnLId: Int!) {\n    seeEnL(id: $seeEnLId) {\n      id\n      createdAt\n      updateAt\n      enLId\n      enLName\n      enLType\n      enLDesc\n      current\n      assests\n      value\n    }\n  }\n": types.SeeEnlDocument,
    "\n  mutation editEnL(\n    $editEnLId: Int!\n    $enLId: String!\n    $enLName: String\n    $enLType: String\n    $enLDesc: String\n    $current: Boolean\n    $assests: Boolean\n    $value: Int\n  ) {\n    editEnL(\n      id: $editEnLId\n      enLId: $enLId\n      enLName: $enLName\n      enLType: $enLType\n      enLDesc: $enLDesc\n      current: $current\n      assests: $assests\n      value: $value\n    ) {\n      ok\n      errorMsg\n    }\n  }\n": types.EditEnLDocument,
    "\n  mutation createProduct(\n    $itemProductId: String!\n    $itemName: String!\n    $createProductId: Int!\n    $paymentsDone: TPaymentSwitch\n    $itemModelName: String\n    $itemPhoto: String\n    $itemType: String\n    $itemCount: Int\n    $itemPrice: Int\n    $itemDesc: String\n    $incomeTrue: Boolean\n    $paymentType: String\n    $accountCode: String\n    $businessDesc: String\n  ) {\n    createProduct(\n      itemProductId: $itemProductId\n      itemName: $itemName\n      id: $createProductId\n      paymentsDone: $paymentsDone\n      itemModelName: $itemModelName\n      itemPhoto: $itemPhoto\n      itemType: $itemType\n      itemCount: $itemCount\n      itemPrice: $itemPrice\n      itemDesc: $itemDesc\n      incomeTrue: $incomeTrue\n      paymentType: $paymentType\n      accountCode: $accountCode\n      businessDesc: $businessDesc\n    ) {\n      ok\n      id\n      errorMsg\n    }\n  }\n": types.CreateProductDocument,
    "\n  mutation deleteProduct($companyId: Int!, $productId: Int!) {\n    deleteProduct(companyId: $companyId, productId: $productId) {\n      ok\n      errorMsg\n    }\n  }\n": types.DeleteProductDocument,
    "\n  query seeDetailProduct($seeProductId: Int!) {\n    seeProduct(id: $seeProductId) {\n      id\n      createdAt\n      updateAt\n      itemProductId\n      itemName\n      itemModelName\n      itemPhoto\n      itemType\n      itemCount\n      itemPrice\n      itemDesc\n      incomeExpend {\n        ...IncomeExpendFrag\n      }\n    }\n  }\n  \n": types.SeeDetailProductDocument,
    "\n  mutation editProduct(\n    $editProductId: Int!\n    $itemProductId: String!\n    $itemModelName: String\n    $itemName: String\n    $itemType: String\n    $itemCount: Int\n    $itemPrice: Int\n    $itemDesc: String\n    $incomeTrue: Boolean\n    $paymentType: String\n    $accountCode: String\n    $businessDesc: String\n    $paymentsDone: TPaymentSwitch\n  ) {\n    editProduct(\n      id: $editProductId\n      itemProductId: $itemProductId\n      itemModelName: $itemModelName\n      itemName: $itemName\n      itemType: $itemType\n      itemCount: $itemCount\n      itemPrice: $itemPrice\n      itemDesc: $itemDesc\n      incomeTrue: $incomeTrue\n      paymentType: $paymentType\n      accountCode: $accountCode\n      businessDesc: $businessDesc\n      paymentsDone: $paymentsDone\n    ) {\n      ok\n      errorMsg\n    }\n  }\n": types.EditProductDocument,
    "\n  query searchCompanyProduct($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      companyProduct {\n        ...ProductFrag\n      }\n    }\n  }\n  \n": types.SearchCompanyProductDocument,
    "\n  query seeCompanyWorkers($seeCompanyWorkerId: Int!) {\n    seeCompanyWorker(id: $seeCompanyWorkerId) {\n      ...UserFrag\n      vacation {\n        id\n        joinCompanyDate\n        totalVacation\n        companyId\n      }\n      salary {\n        id\n        preTaxMonthlySalary\n      }\n    }\n  }\n  \n": types.SeeCompanyWorkersDocument,
    "\n  mutation createSalary(\n    $id: Int!\n    $companyName: String!\n    $familyCount: Int\n    $preTaxMonthlySalary: Int\n    $childCount: Int\n  ) {\n    createSalary(\n      id: $id\n      companyName: $companyName\n      familyCount: $familyCount\n      preTaxMonthlySalary: $preTaxMonthlySalary\n      childCount: $childCount\n    ) {\n      ok\n      errorMsg\n    }\n  }\n": types.CreateSalaryDocument,
    "\n  mutation createVacation(\n    $createVacationId: Int!\n    $username: String!\n    $other: Int\n    $joinCompanyDate: String\n  ) {\n    createVacation(\n      id: $createVacationId\n      username: $username\n      other: $other\n      joinCompanyDate: $joinCompanyDate\n    ) {\n      ok\n      errorMsg\n    }\n  }\n": types.CreateVacationDocument,
    "\n  query seeSalary($seeSalaryId: Int!) {\n    seeSalary(id: $seeSalaryId) {\n      ...SalaryFrag\n    }\n  }\n  \n": types.SeeSalaryDocument,
    "\n  query seeVacation($seeVacationId: Int!) {\n    seeVacation(id: $seeVacationId) {\n      ...VacationFrag\n      description {\n        ...VacationDescFrag\n      }\n    }\n  }\n  \n  \n": types.SeeVacationDocument,
    "\n  mutation editVacation(\n    $companyId: Int!\n    $vacationId: Int!\n    $joinCompanyDate: String\n    $other: Int\n  ) {\n    editVacation(\n      companyId: $companyId\n      vacationId: $vacationId\n      joinCompanyDate: $joinCompanyDate\n      other: $other\n    ) {\n      ok\n      errorMsg\n    }\n  }\n": types.EditVacationDocument,
    "\n  mutation resetVacationDesc($resetVacationDescId: Int!) {\n    resetVacationDesc(id: $resetVacationDescId) {\n      ok\n      errorMsg\n    }\n  }\n": types.ResetVacationDescDocument,
    "\n  mutation registWorker($username: String!, $registWorkerId: Int!) {\n    registWorker(username: $username, id: $registWorkerId) {\n      ok\n      id\n      subId\n      errorMsg\n    }\n  }\n": types.RegistWorkerDocument,
    "\n  mutation createVacationDesc(\n    $vacationId: Int!\n    $day: Int!\n    $vacationType: TVacation!\n    $description: String!\n  ) {\n    createVacationDesc(\n      id: $vacationId\n      day: $day\n      vacationType: $vacationType\n      description: $description\n    ) {\n      ok\n      errorMsg\n    }\n  }\n": types.CreateVacationDescDocument,
    "\n  query SeeMyprofile {\n    seeMyprofile {\n      id\n      createdAt\n      updateAt\n      username\n      email\n      firstName\n      lastName\n      phone\n    }\n  }\n": types.SeeMyprofileDocument,
    "\n  fragment CompanyAdressFrag on CompanyAdress {\n    id\n    country\n    city\n    streetAdress\n    restAdress\n    adressNum\n  }\n": types.CompanyAdressFragFragmentDoc,
    "\n  fragment EquityLiabilitiesFrag on EquityLiabilities {\n    id\n    value\n    assests\n    current\n    enLDesc\n    enLId\n    enLName\n    enLType\n  }\n": types.EquityLiabilitiesFragFragmentDoc,
    "\n  fragment ConnectCompanyFrag on Company {\n    id\n    createdAt\n    updateAt\n    companyLogo\n    companyName\n    isManager\n    isOwned\n    connectedCompany {\n      id\n      companyName\n    }\n    connectedCompanyCount\n    connectingCompany {\n      id\n      companyName\n    }\n    connectingCompanyCount\n    companyInNout {\n      id\n      accountNum\n      budget\n      totalAssets\n    }\n  }\n": types.ConnectCompanyFragFragmentDoc,
    "\n  fragment CompanyInNoutFrag on InNout {\n    id\n    budget\n    totalAssets\n    capital\n    liabilities\n    netAssets\n    netIncome\n    totalRevenue\n    totalExpenses\n    profitMargin\n    equityRatio\n    debtRatio\n    roe\n  }\n": types.CompanyInNoutFragFragmentDoc,
    "\n  fragment IncomeExpendFrag on IncomeExpend {\n    id\n    incomeTrue\n    infoSubtitle\n    money\n    businessDate\n    paymentType\n    accountCode\n    businessDesc\n    paymentsDone\n  }\n": types.IncomeExpendFragFragmentDoc,
    "\n  fragment ProductFrag on Product {\n    id\n    itemPhoto\n    itemName\n    itemCount\n    itemProductId\n    itemPrice\n    itemModelName\n    itemDesc\n    incomeExpendTypeId\n    itemType\n  }\n": types.ProductFragFragmentDoc,
    "\n  fragment SalaryFrag on Salary {\n    id\n    createdAt\n    updateAt\n    preTaxMonthlySalary\n    childCount\n    annualSalary\n    earnIncomeDedution\n    earnIncomeAmount\n    familyDedution\n    pensionInsuranceDedution\n    specialIncomeDedution\n    taxBase\n    taxCalculate\n    taxDetermined\n    earnIncomeTaxCredit\n    simplifiedTax\n    childTax\n  }\n": types.SalaryFragFragmentDoc,
    "\n  fragment UserFrag on User {\n    id\n    username\n    firstName\n    lastName\n    email\n    phone\n    avatar\n    isOnVacation\n  }\n": types.UserFragFragmentDoc,
    "\n  fragment VacationFrag on Vacation {\n    id\n    createdAt\n    updateAt\n    joinCompanyDate\n    appearence\n    annual\n    other\n    restAnnualVacation\n    restOtherVacation\n    totalVacation\n  }\n": types.VacationFragFragmentDoc,
    "\n  fragment VacationDescFrag on VacationDesc {\n    id\n    createdAt\n    updateAt\n    vacationType\n    day\n    description\n  }\n": types.VacationDescFragFragmentDoc,
    "\n  query searchCompanyInNout($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      companyInNout {\n        ...CompanyInNoutFrag\n        #\n        accountNum\n        accountName\n        accountDesc\n        #\n        totalAssets\n        totalAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        currentAssets\n        currentAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        nonCurrentAssets\n        nonCurrentAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        currentLiabilities\n        currentLiabilitiesDesc {\n          ...EquityLiabilitiesFrag\n        }\n        nonCurrentLiabilities\n        nonCurrentLiabilitiesDesc {\n          ...EquityLiabilitiesFrag\n        }\n\n        incomeMoney\n        incomeModel {\n          ...IncomeExpendFrag\n        }\n        expendMoney\n        expendModel {\n          ...IncomeExpendFrag\n        }\n      }\n    }\n  }\n  \n  \n  \n": types.SearchCompanyInNoutDocument,
    "\n  query searchCompany($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      id\n      createdAt\n      updateAt\n      companyLogo\n      companyName\n      isManager\n      isOwned\n      companyAdress {\n        ...CompanyAdressFrag\n      }\n      companyManager {\n        ...UserFrag\n      }\n      companyOwner {\n        ...UserFrag\n      }\n      connectedCompany {\n        id\n        companyName\n        companyLogo\n      }\n      connectedCompanyCount\n      connectingCompany {\n        id\n        companyName\n        companyLogo\n      }\n      connectingCompanyCount\n      companyInNout {\n        ...CompanyInNoutFrag\n      }\n      companyProduct {\n        ...ProductFrag\n      }\n      companyWorker {\n        ...UserFrag\n      }\n    }\n  }\n  \n  \n  \n  \n": types.SearchCompanyDocument,
    "\n  mutation EditUser(\n    $password: String\n    $firstName: String\n    $lastName: String\n    $avatar: String\n    $phone: String\n  ) {\n    editUser(\n      password: $password\n      firstName: $firstName\n      lastName: $lastName\n      avatar: $avatar\n      phone: $phone\n    ) {\n      errorMsg\n      ok\n    }\n  }\n": types.EditUserDocument,
    "\n  mutation createCompany($companyName: String!) {\n    createCompany(companyName: $companyName) {\n      ok\n      id\n      errorMsg\n    }\n  }\n": types.CreateCompanyDocument,
    "\n  mutation deleteCompany($deleteCompanyId: Int) {\n    deleteCompany(id: $deleteCompanyId) {\n      ok\n      errorMsg\n    }\n  }\n": types.DeleteCompanyDocument,
    "\n  query ownCompany {\n    seeMyprofile {\n      ownCompany {\n        ...ConnectCompanyFrag\n      }\n      hasCompanyCount\n    }\n  }\n  \n": types.OwnCompanyDocument,
    "\n  query manageCompany {\n    seeMyprofile {\n      manageCompany {\n        ...ConnectCompanyFrag\n      }\n      manageCompanyCount\n    }\n  }\n  \n": types.ManageCompanyDocument,
    "\n  query searchByCompanyName($companyName: String!) {\n    searchByCompanyName(companyName: $companyName) {\n      id\n      companyName\n    }\n  }\n": types.SearchByCompanyNameDocument,
    "\n  mutation joinUser(\n    $username: String!\n    $email: String!\n    $password: String!\n    $phone: String\n    $firstName: String\n    $lastName: String\n  ) {\n    createUser(\n      username: $username\n      email: $email\n      password: $password\n      phone: $phone\n      firstName: $firstName\n      lastName: $lastName\n    ) {\n      ok\n      errorMsg\n    }\n  }\n": types.JoinUserDocument,
    "\n  mutation loginUser($password: String!, $email: String, $username: String) {\n    loginUser(password: $password, email: $email, username: $username) {\n      token\n      ok\n      errorMsg\n    }\n  }\n": types.LoginUserDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation connectCompany($companyId: Int!, $targetCompanyId: Int!) {\n    connectCompany(companyId: $companyId, targetCompanyId: $targetCompanyId) {\n      ok\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation connectCompany($companyId: Int!, $targetCompanyId: Int!) {\n    connectCompany(companyId: $companyId, targetCompanyId: $targetCompanyId) {\n      ok\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation disConnectCompany($companyId: Int!, $targetCompanyId: Int!) {\n    disconnectCompany(\n      companyId: $companyId\n      targetCompanyId: $targetCompanyId\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation disConnectCompany($companyId: Int!, $targetCompanyId: Int!) {\n    disconnectCompany(\n      companyId: $companyId\n      targetCompanyId: $targetCompanyId\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation editCompanyAdress(\n    $editCompanyAdressId: Int!\n    $adressNum: String\n    $restAdress: String\n    $streetAdress: String\n    $city: String\n    $country: String\n  ) {\n    editCompanyAdress(\n      id: $editCompanyAdressId\n      adressNum: $adressNum\n      restAdress: $restAdress\n      streetAdress: $streetAdress\n      city: $city\n      country: $country\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation editCompanyAdress(\n    $editCompanyAdressId: Int!\n    $adressNum: String\n    $restAdress: String\n    $streetAdress: String\n    $city: String\n    $country: String\n  ) {\n    editCompanyAdress(\n      id: $editCompanyAdressId\n      adressNum: $adressNum\n      restAdress: $restAdress\n      streetAdress: $streetAdress\n      city: $city\n      country: $country\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation editInNout(\n    $editInNoutId: Int!\n    $accountNum: String\n    $accountName: String\n    $accountDesc: String\n  ) {\n    editInNout(\n      id: $editInNoutId\n      accountNum: $accountNum\n      accountName: $accountName\n      accountDesc: $accountDesc\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation editInNout(\n    $editInNoutId: Int!\n    $accountNum: String\n    $accountName: String\n    $accountDesc: String\n  ) {\n    editInNout(\n      id: $editInNoutId\n      accountNum: $accountNum\n      accountName: $accountName\n      accountDesc: $accountDesc\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateEnL(\n    $createEnLId: Int!\n    $enLId: String!\n    $enLName: String!\n    $enLType: String!\n    $current: Boolean!\n    $assests: Boolean!\n    $value: Int!\n    $enLDesc: String\n  ) {\n    createEnL(\n      id: $createEnLId\n      enLId: $enLId\n      enLName: $enLName\n      enLType: $enLType\n      current: $current\n      assests: $assests\n      value: $value\n      enLDesc: $enLDesc\n    ) {\n      ok\n      id\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation CreateEnL(\n    $createEnLId: Int!\n    $enLId: String!\n    $enLName: String!\n    $enLType: String!\n    $current: Boolean!\n    $assests: Boolean!\n    $value: Int!\n    $enLDesc: String\n  ) {\n    createEnL(\n      id: $createEnLId\n      enLId: $enLId\n      enLName: $enLName\n      enLType: $enLType\n      current: $current\n      assests: $assests\n      value: $value\n      enLDesc: $enLDesc\n    ) {\n      ok\n      id\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteEnl($enLId: String!) {\n    deleteEnL(enLId: $enLId) {\n      ok\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation deleteEnl($enLId: String!) {\n    deleteEnL(enLId: $enLId) {\n      ok\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query seeEnl($seeEnLId: Int!) {\n    seeEnL(id: $seeEnLId) {\n      id\n      createdAt\n      updateAt\n      enLId\n      enLName\n      enLType\n      enLDesc\n      current\n      assests\n      value\n    }\n  }\n"): (typeof documents)["\n  query seeEnl($seeEnLId: Int!) {\n    seeEnL(id: $seeEnLId) {\n      id\n      createdAt\n      updateAt\n      enLId\n      enLName\n      enLType\n      enLDesc\n      current\n      assests\n      value\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation editEnL(\n    $editEnLId: Int!\n    $enLId: String!\n    $enLName: String\n    $enLType: String\n    $enLDesc: String\n    $current: Boolean\n    $assests: Boolean\n    $value: Int\n  ) {\n    editEnL(\n      id: $editEnLId\n      enLId: $enLId\n      enLName: $enLName\n      enLType: $enLType\n      enLDesc: $enLDesc\n      current: $current\n      assests: $assests\n      value: $value\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation editEnL(\n    $editEnLId: Int!\n    $enLId: String!\n    $enLName: String\n    $enLType: String\n    $enLDesc: String\n    $current: Boolean\n    $assests: Boolean\n    $value: Int\n  ) {\n    editEnL(\n      id: $editEnLId\n      enLId: $enLId\n      enLName: $enLName\n      enLType: $enLType\n      enLDesc: $enLDesc\n      current: $current\n      assests: $assests\n      value: $value\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createProduct(\n    $itemProductId: String!\n    $itemName: String!\n    $createProductId: Int!\n    $paymentsDone: TPaymentSwitch\n    $itemModelName: String\n    $itemPhoto: String\n    $itemType: String\n    $itemCount: Int\n    $itemPrice: Int\n    $itemDesc: String\n    $incomeTrue: Boolean\n    $paymentType: String\n    $accountCode: String\n    $businessDesc: String\n  ) {\n    createProduct(\n      itemProductId: $itemProductId\n      itemName: $itemName\n      id: $createProductId\n      paymentsDone: $paymentsDone\n      itemModelName: $itemModelName\n      itemPhoto: $itemPhoto\n      itemType: $itemType\n      itemCount: $itemCount\n      itemPrice: $itemPrice\n      itemDesc: $itemDesc\n      incomeTrue: $incomeTrue\n      paymentType: $paymentType\n      accountCode: $accountCode\n      businessDesc: $businessDesc\n    ) {\n      ok\n      id\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation createProduct(\n    $itemProductId: String!\n    $itemName: String!\n    $createProductId: Int!\n    $paymentsDone: TPaymentSwitch\n    $itemModelName: String\n    $itemPhoto: String\n    $itemType: String\n    $itemCount: Int\n    $itemPrice: Int\n    $itemDesc: String\n    $incomeTrue: Boolean\n    $paymentType: String\n    $accountCode: String\n    $businessDesc: String\n  ) {\n    createProduct(\n      itemProductId: $itemProductId\n      itemName: $itemName\n      id: $createProductId\n      paymentsDone: $paymentsDone\n      itemModelName: $itemModelName\n      itemPhoto: $itemPhoto\n      itemType: $itemType\n      itemCount: $itemCount\n      itemPrice: $itemPrice\n      itemDesc: $itemDesc\n      incomeTrue: $incomeTrue\n      paymentType: $paymentType\n      accountCode: $accountCode\n      businessDesc: $businessDesc\n    ) {\n      ok\n      id\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteProduct($companyId: Int!, $productId: Int!) {\n    deleteProduct(companyId: $companyId, productId: $productId) {\n      ok\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation deleteProduct($companyId: Int!, $productId: Int!) {\n    deleteProduct(companyId: $companyId, productId: $productId) {\n      ok\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query seeDetailProduct($seeProductId: Int!) {\n    seeProduct(id: $seeProductId) {\n      id\n      createdAt\n      updateAt\n      itemProductId\n      itemName\n      itemModelName\n      itemPhoto\n      itemType\n      itemCount\n      itemPrice\n      itemDesc\n      incomeExpend {\n        ...IncomeExpendFrag\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query seeDetailProduct($seeProductId: Int!) {\n    seeProduct(id: $seeProductId) {\n      id\n      createdAt\n      updateAt\n      itemProductId\n      itemName\n      itemModelName\n      itemPhoto\n      itemType\n      itemCount\n      itemPrice\n      itemDesc\n      incomeExpend {\n        ...IncomeExpendFrag\n      }\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation editProduct(\n    $editProductId: Int!\n    $itemProductId: String!\n    $itemModelName: String\n    $itemName: String\n    $itemType: String\n    $itemCount: Int\n    $itemPrice: Int\n    $itemDesc: String\n    $incomeTrue: Boolean\n    $paymentType: String\n    $accountCode: String\n    $businessDesc: String\n    $paymentsDone: TPaymentSwitch\n  ) {\n    editProduct(\n      id: $editProductId\n      itemProductId: $itemProductId\n      itemModelName: $itemModelName\n      itemName: $itemName\n      itemType: $itemType\n      itemCount: $itemCount\n      itemPrice: $itemPrice\n      itemDesc: $itemDesc\n      incomeTrue: $incomeTrue\n      paymentType: $paymentType\n      accountCode: $accountCode\n      businessDesc: $businessDesc\n      paymentsDone: $paymentsDone\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation editProduct(\n    $editProductId: Int!\n    $itemProductId: String!\n    $itemModelName: String\n    $itemName: String\n    $itemType: String\n    $itemCount: Int\n    $itemPrice: Int\n    $itemDesc: String\n    $incomeTrue: Boolean\n    $paymentType: String\n    $accountCode: String\n    $businessDesc: String\n    $paymentsDone: TPaymentSwitch\n  ) {\n    editProduct(\n      id: $editProductId\n      itemProductId: $itemProductId\n      itemModelName: $itemModelName\n      itemName: $itemName\n      itemType: $itemType\n      itemCount: $itemCount\n      itemPrice: $itemPrice\n      itemDesc: $itemDesc\n      incomeTrue: $incomeTrue\n      paymentType: $paymentType\n      accountCode: $accountCode\n      businessDesc: $businessDesc\n      paymentsDone: $paymentsDone\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query searchCompanyProduct($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      companyProduct {\n        ...ProductFrag\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query searchCompanyProduct($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      companyProduct {\n        ...ProductFrag\n      }\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query seeCompanyWorkers($seeCompanyWorkerId: Int!) {\n    seeCompanyWorker(id: $seeCompanyWorkerId) {\n      ...UserFrag\n      vacation {\n        id\n        joinCompanyDate\n        totalVacation\n        companyId\n      }\n      salary {\n        id\n        preTaxMonthlySalary\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query seeCompanyWorkers($seeCompanyWorkerId: Int!) {\n    seeCompanyWorker(id: $seeCompanyWorkerId) {\n      ...UserFrag\n      vacation {\n        id\n        joinCompanyDate\n        totalVacation\n        companyId\n      }\n      salary {\n        id\n        preTaxMonthlySalary\n      }\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createSalary(\n    $id: Int!\n    $companyName: String!\n    $familyCount: Int\n    $preTaxMonthlySalary: Int\n    $childCount: Int\n  ) {\n    createSalary(\n      id: $id\n      companyName: $companyName\n      familyCount: $familyCount\n      preTaxMonthlySalary: $preTaxMonthlySalary\n      childCount: $childCount\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation createSalary(\n    $id: Int!\n    $companyName: String!\n    $familyCount: Int\n    $preTaxMonthlySalary: Int\n    $childCount: Int\n  ) {\n    createSalary(\n      id: $id\n      companyName: $companyName\n      familyCount: $familyCount\n      preTaxMonthlySalary: $preTaxMonthlySalary\n      childCount: $childCount\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createVacation(\n    $createVacationId: Int!\n    $username: String!\n    $other: Int\n    $joinCompanyDate: String\n  ) {\n    createVacation(\n      id: $createVacationId\n      username: $username\n      other: $other\n      joinCompanyDate: $joinCompanyDate\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation createVacation(\n    $createVacationId: Int!\n    $username: String!\n    $other: Int\n    $joinCompanyDate: String\n  ) {\n    createVacation(\n      id: $createVacationId\n      username: $username\n      other: $other\n      joinCompanyDate: $joinCompanyDate\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query seeSalary($seeSalaryId: Int!) {\n    seeSalary(id: $seeSalaryId) {\n      ...SalaryFrag\n    }\n  }\n  \n"): (typeof documents)["\n  query seeSalary($seeSalaryId: Int!) {\n    seeSalary(id: $seeSalaryId) {\n      ...SalaryFrag\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query seeVacation($seeVacationId: Int!) {\n    seeVacation(id: $seeVacationId) {\n      ...VacationFrag\n      description {\n        ...VacationDescFrag\n      }\n    }\n  }\n  \n  \n"): (typeof documents)["\n  query seeVacation($seeVacationId: Int!) {\n    seeVacation(id: $seeVacationId) {\n      ...VacationFrag\n      description {\n        ...VacationDescFrag\n      }\n    }\n  }\n  \n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation editVacation(\n    $companyId: Int!\n    $vacationId: Int!\n    $joinCompanyDate: String\n    $other: Int\n  ) {\n    editVacation(\n      companyId: $companyId\n      vacationId: $vacationId\n      joinCompanyDate: $joinCompanyDate\n      other: $other\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation editVacation(\n    $companyId: Int!\n    $vacationId: Int!\n    $joinCompanyDate: String\n    $other: Int\n  ) {\n    editVacation(\n      companyId: $companyId\n      vacationId: $vacationId\n      joinCompanyDate: $joinCompanyDate\n      other: $other\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation resetVacationDesc($resetVacationDescId: Int!) {\n    resetVacationDesc(id: $resetVacationDescId) {\n      ok\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation resetVacationDesc($resetVacationDescId: Int!) {\n    resetVacationDesc(id: $resetVacationDescId) {\n      ok\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation registWorker($username: String!, $registWorkerId: Int!) {\n    registWorker(username: $username, id: $registWorkerId) {\n      ok\n      id\n      subId\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation registWorker($username: String!, $registWorkerId: Int!) {\n    registWorker(username: $username, id: $registWorkerId) {\n      ok\n      id\n      subId\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createVacationDesc(\n    $vacationId: Int!\n    $day: Int!\n    $vacationType: TVacation!\n    $description: String!\n  ) {\n    createVacationDesc(\n      id: $vacationId\n      day: $day\n      vacationType: $vacationType\n      description: $description\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation createVacationDesc(\n    $vacationId: Int!\n    $day: Int!\n    $vacationType: TVacation!\n    $description: String!\n  ) {\n    createVacationDesc(\n      id: $vacationId\n      day: $day\n      vacationType: $vacationType\n      description: $description\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SeeMyprofile {\n    seeMyprofile {\n      id\n      createdAt\n      updateAt\n      username\n      email\n      firstName\n      lastName\n      phone\n    }\n  }\n"): (typeof documents)["\n  query SeeMyprofile {\n    seeMyprofile {\n      id\n      createdAt\n      updateAt\n      username\n      email\n      firstName\n      lastName\n      phone\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment CompanyAdressFrag on CompanyAdress {\n    id\n    country\n    city\n    streetAdress\n    restAdress\n    adressNum\n  }\n"): (typeof documents)["\n  fragment CompanyAdressFrag on CompanyAdress {\n    id\n    country\n    city\n    streetAdress\n    restAdress\n    adressNum\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment EquityLiabilitiesFrag on EquityLiabilities {\n    id\n    value\n    assests\n    current\n    enLDesc\n    enLId\n    enLName\n    enLType\n  }\n"): (typeof documents)["\n  fragment EquityLiabilitiesFrag on EquityLiabilities {\n    id\n    value\n    assests\n    current\n    enLDesc\n    enLId\n    enLName\n    enLType\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment ConnectCompanyFrag on Company {\n    id\n    createdAt\n    updateAt\n    companyLogo\n    companyName\n    isManager\n    isOwned\n    connectedCompany {\n      id\n      companyName\n    }\n    connectedCompanyCount\n    connectingCompany {\n      id\n      companyName\n    }\n    connectingCompanyCount\n    companyInNout {\n      id\n      accountNum\n      budget\n      totalAssets\n    }\n  }\n"): (typeof documents)["\n  fragment ConnectCompanyFrag on Company {\n    id\n    createdAt\n    updateAt\n    companyLogo\n    companyName\n    isManager\n    isOwned\n    connectedCompany {\n      id\n      companyName\n    }\n    connectedCompanyCount\n    connectingCompany {\n      id\n      companyName\n    }\n    connectingCompanyCount\n    companyInNout {\n      id\n      accountNum\n      budget\n      totalAssets\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment CompanyInNoutFrag on InNout {\n    id\n    budget\n    totalAssets\n    capital\n    liabilities\n    netAssets\n    netIncome\n    totalRevenue\n    totalExpenses\n    profitMargin\n    equityRatio\n    debtRatio\n    roe\n  }\n"): (typeof documents)["\n  fragment CompanyInNoutFrag on InNout {\n    id\n    budget\n    totalAssets\n    capital\n    liabilities\n    netAssets\n    netIncome\n    totalRevenue\n    totalExpenses\n    profitMargin\n    equityRatio\n    debtRatio\n    roe\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment IncomeExpendFrag on IncomeExpend {\n    id\n    incomeTrue\n    infoSubtitle\n    money\n    businessDate\n    paymentType\n    accountCode\n    businessDesc\n    paymentsDone\n  }\n"): (typeof documents)["\n  fragment IncomeExpendFrag on IncomeExpend {\n    id\n    incomeTrue\n    infoSubtitle\n    money\n    businessDate\n    paymentType\n    accountCode\n    businessDesc\n    paymentsDone\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment ProductFrag on Product {\n    id\n    itemPhoto\n    itemName\n    itemCount\n    itemProductId\n    itemPrice\n    itemModelName\n    itemDesc\n    incomeExpendTypeId\n    itemType\n  }\n"): (typeof documents)["\n  fragment ProductFrag on Product {\n    id\n    itemPhoto\n    itemName\n    itemCount\n    itemProductId\n    itemPrice\n    itemModelName\n    itemDesc\n    incomeExpendTypeId\n    itemType\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment SalaryFrag on Salary {\n    id\n    createdAt\n    updateAt\n    preTaxMonthlySalary\n    childCount\n    annualSalary\n    earnIncomeDedution\n    earnIncomeAmount\n    familyDedution\n    pensionInsuranceDedution\n    specialIncomeDedution\n    taxBase\n    taxCalculate\n    taxDetermined\n    earnIncomeTaxCredit\n    simplifiedTax\n    childTax\n  }\n"): (typeof documents)["\n  fragment SalaryFrag on Salary {\n    id\n    createdAt\n    updateAt\n    preTaxMonthlySalary\n    childCount\n    annualSalary\n    earnIncomeDedution\n    earnIncomeAmount\n    familyDedution\n    pensionInsuranceDedution\n    specialIncomeDedution\n    taxBase\n    taxCalculate\n    taxDetermined\n    earnIncomeTaxCredit\n    simplifiedTax\n    childTax\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment UserFrag on User {\n    id\n    username\n    firstName\n    lastName\n    email\n    phone\n    avatar\n    isOnVacation\n  }\n"): (typeof documents)["\n  fragment UserFrag on User {\n    id\n    username\n    firstName\n    lastName\n    email\n    phone\n    avatar\n    isOnVacation\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment VacationFrag on Vacation {\n    id\n    createdAt\n    updateAt\n    joinCompanyDate\n    appearence\n    annual\n    other\n    restAnnualVacation\n    restOtherVacation\n    totalVacation\n  }\n"): (typeof documents)["\n  fragment VacationFrag on Vacation {\n    id\n    createdAt\n    updateAt\n    joinCompanyDate\n    appearence\n    annual\n    other\n    restAnnualVacation\n    restOtherVacation\n    totalVacation\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment VacationDescFrag on VacationDesc {\n    id\n    createdAt\n    updateAt\n    vacationType\n    day\n    description\n  }\n"): (typeof documents)["\n  fragment VacationDescFrag on VacationDesc {\n    id\n    createdAt\n    updateAt\n    vacationType\n    day\n    description\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query searchCompanyInNout($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      companyInNout {\n        ...CompanyInNoutFrag\n        #\n        accountNum\n        accountName\n        accountDesc\n        #\n        totalAssets\n        totalAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        currentAssets\n        currentAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        nonCurrentAssets\n        nonCurrentAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        currentLiabilities\n        currentLiabilitiesDesc {\n          ...EquityLiabilitiesFrag\n        }\n        nonCurrentLiabilities\n        nonCurrentLiabilitiesDesc {\n          ...EquityLiabilitiesFrag\n        }\n\n        incomeMoney\n        incomeModel {\n          ...IncomeExpendFrag\n        }\n        expendMoney\n        expendModel {\n          ...IncomeExpendFrag\n        }\n      }\n    }\n  }\n  \n  \n  \n"): (typeof documents)["\n  query searchCompanyInNout($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      companyInNout {\n        ...CompanyInNoutFrag\n        #\n        accountNum\n        accountName\n        accountDesc\n        #\n        totalAssets\n        totalAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        currentAssets\n        currentAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        nonCurrentAssets\n        nonCurrentAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        currentLiabilities\n        currentLiabilitiesDesc {\n          ...EquityLiabilitiesFrag\n        }\n        nonCurrentLiabilities\n        nonCurrentLiabilitiesDesc {\n          ...EquityLiabilitiesFrag\n        }\n\n        incomeMoney\n        incomeModel {\n          ...IncomeExpendFrag\n        }\n        expendMoney\n        expendModel {\n          ...IncomeExpendFrag\n        }\n      }\n    }\n  }\n  \n  \n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query searchCompany($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      id\n      createdAt\n      updateAt\n      companyLogo\n      companyName\n      isManager\n      isOwned\n      companyAdress {\n        ...CompanyAdressFrag\n      }\n      companyManager {\n        ...UserFrag\n      }\n      companyOwner {\n        ...UserFrag\n      }\n      connectedCompany {\n        id\n        companyName\n        companyLogo\n      }\n      connectedCompanyCount\n      connectingCompany {\n        id\n        companyName\n        companyLogo\n      }\n      connectingCompanyCount\n      companyInNout {\n        ...CompanyInNoutFrag\n      }\n      companyProduct {\n        ...ProductFrag\n      }\n      companyWorker {\n        ...UserFrag\n      }\n    }\n  }\n  \n  \n  \n  \n"): (typeof documents)["\n  query searchCompany($searchCompanyId: Int!) {\n    searchCompany(id: $searchCompanyId) {\n      id\n      createdAt\n      updateAt\n      companyLogo\n      companyName\n      isManager\n      isOwned\n      companyAdress {\n        ...CompanyAdressFrag\n      }\n      companyManager {\n        ...UserFrag\n      }\n      companyOwner {\n        ...UserFrag\n      }\n      connectedCompany {\n        id\n        companyName\n        companyLogo\n      }\n      connectedCompanyCount\n      connectingCompany {\n        id\n        companyName\n        companyLogo\n      }\n      connectingCompanyCount\n      companyInNout {\n        ...CompanyInNoutFrag\n      }\n      companyProduct {\n        ...ProductFrag\n      }\n      companyWorker {\n        ...UserFrag\n      }\n    }\n  }\n  \n  \n  \n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EditUser(\n    $password: String\n    $firstName: String\n    $lastName: String\n    $avatar: String\n    $phone: String\n  ) {\n    editUser(\n      password: $password\n      firstName: $firstName\n      lastName: $lastName\n      avatar: $avatar\n      phone: $phone\n    ) {\n      errorMsg\n      ok\n    }\n  }\n"): (typeof documents)["\n  mutation EditUser(\n    $password: String\n    $firstName: String\n    $lastName: String\n    $avatar: String\n    $phone: String\n  ) {\n    editUser(\n      password: $password\n      firstName: $firstName\n      lastName: $lastName\n      avatar: $avatar\n      phone: $phone\n    ) {\n      errorMsg\n      ok\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createCompany($companyName: String!) {\n    createCompany(companyName: $companyName) {\n      ok\n      id\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation createCompany($companyName: String!) {\n    createCompany(companyName: $companyName) {\n      ok\n      id\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteCompany($deleteCompanyId: Int) {\n    deleteCompany(id: $deleteCompanyId) {\n      ok\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation deleteCompany($deleteCompanyId: Int) {\n    deleteCompany(id: $deleteCompanyId) {\n      ok\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ownCompany {\n    seeMyprofile {\n      ownCompany {\n        ...ConnectCompanyFrag\n      }\n      hasCompanyCount\n    }\n  }\n  \n"): (typeof documents)["\n  query ownCompany {\n    seeMyprofile {\n      ownCompany {\n        ...ConnectCompanyFrag\n      }\n      hasCompanyCount\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query manageCompany {\n    seeMyprofile {\n      manageCompany {\n        ...ConnectCompanyFrag\n      }\n      manageCompanyCount\n    }\n  }\n  \n"): (typeof documents)["\n  query manageCompany {\n    seeMyprofile {\n      manageCompany {\n        ...ConnectCompanyFrag\n      }\n      manageCompanyCount\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query searchByCompanyName($companyName: String!) {\n    searchByCompanyName(companyName: $companyName) {\n      id\n      companyName\n    }\n  }\n"): (typeof documents)["\n  query searchByCompanyName($companyName: String!) {\n    searchByCompanyName(companyName: $companyName) {\n      id\n      companyName\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation joinUser(\n    $username: String!\n    $email: String!\n    $password: String!\n    $phone: String\n    $firstName: String\n    $lastName: String\n  ) {\n    createUser(\n      username: $username\n      email: $email\n      password: $password\n      phone: $phone\n      firstName: $firstName\n      lastName: $lastName\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation joinUser(\n    $username: String!\n    $email: String!\n    $password: String!\n    $phone: String\n    $firstName: String\n    $lastName: String\n  ) {\n    createUser(\n      username: $username\n      email: $email\n      password: $password\n      phone: $phone\n      firstName: $firstName\n      lastName: $lastName\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation loginUser($password: String!, $email: String, $username: String) {\n    loginUser(password: $password, email: $email, username: $username) {\n      token\n      ok\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation loginUser($password: String!, $email: String, $username: String) {\n    loginUser(password: $password, email: $email, username: $username) {\n      token\n      ok\n      errorMsg\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;