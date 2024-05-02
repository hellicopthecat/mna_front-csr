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
    "\n  query seeEnl($companyName: String!, $seeEnLId: Int!) {\n    seeEnL(companyName: $companyName, id: $seeEnLId) {\n      id\n      createdAt\n      updateAt\n      enLId\n      enLName\n      enLType\n      enLDesc\n      current\n      assests\n      value\n    }\n  }\n": types.SeeEnlDocument,
    "\n  query SeeMyprofile {\n    seeMyprofile {\n      id\n      createdAt\n      updateAt\n      username\n      email\n      firstName\n      lastName\n      phone\n    }\n  }\n": types.SeeMyprofileDocument,
    "\n  fragment EquityLiabilitiesFrag on EquityLiabilities {\n    id\n    value\n    assests\n    current\n    enLDesc\n    enLId\n    enLName\n    enLType\n  }\n": types.EquityLiabilitiesFragFragmentDoc,
    "\n  fragment ConnectCompanyFrag on Company {\n    id\n    createdAt\n    updateAt\n    companyLogo\n    companyName\n    isManager\n    isOwned\n    connectedCompany {\n      id\n      companyName\n    }\n    connectedCompanyCount\n    connectingCompany {\n      id\n      companyName\n    }\n    connectingCompanyCount\n    companyInNout {\n      id\n      accountNum\n      budget\n      totalAssets\n    }\n  }\n": types.ConnectCompanyFragFragmentDoc,
    "\n  fragment CompanyInNoutFrag on InNout {\n    id\n    budget\n    totalAssets\n    capital\n    liabilities\n    netAssets\n    netIncome\n    totalRevenue\n    totalExpenses\n    profitMargin\n    equityRatio\n    debtRatio\n    roe\n  }\n": types.CompanyInNoutFragFragmentDoc,
    "\n  fragment IncomeExpendFrag on IncomeExpend {\n    id\n    incomeTrue\n    infoSubtitle\n    money\n    businessDate\n    paymentType\n    accountCode\n    businessDesc\n    paymentsDone\n  }\n": types.IncomeExpendFragFragmentDoc,
    "\n  fragment ProductFrag on Product {\n    id\n    itemPhoto\n    itemName\n    itemCount\n    itemProductId\n    itemPrice\n    itemModelName\n    itemDesc\n    incomeExpendTypeId\n    itemType\n  }\n": types.ProductFragFragmentDoc,
    "\n  fragment UserFrag on User {\n    id\n    username\n    firstName\n    lastName\n    email\n    phone\n    avatar\n  }\n": types.UserFragFragmentDoc,
    "\n  fragment VacationFrag on Vacation {\n    id\n    createdAt\n    updateAt\n    totalVacation\n    restVacation\n    specialVation\n    sickLeave\n  }\n": types.VacationFragFragmentDoc,
    "\n  query searchCompany($companyName: String!) {\n    searchCompany(companyName: $companyName) {\n      id\n      createdAt\n      updateAt\n      companyLogo\n      companyName\n      isManager\n      isOwned\n      companyManager {\n        ...UserFrag\n      }\n      companyOwner {\n        ...UserFrag\n      }\n      connectedCompany {\n        id\n        companyName\n        companyLogo\n      }\n      connectedCompanyCount\n      connectingCompany {\n        id\n        companyName\n        companyLogo\n      }\n      connectingCompanyCount\n      companyInNout {\n        ...CompanyInNoutFrag\n      }\n      companyProduct {\n        ...ProductFrag\n      }\n    }\n  }\n  \n  \n  \n": types.SearchCompanyDocument,
    "\n  query CompanyInNout($companyName: String!) {\n    searchCompany(companyName: $companyName) {\n      companyInNout {\n        ...CompanyInNoutFrag\n        #\n        accountNum\n        accountName\n        accountDesc\n        #\n        totalAssets\n        totalAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        currentAssets\n        currentAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        nonCurrentAssets\n        nonCurrentAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        currentLiabilities\n        currentLiabilitiesDesc {\n          ...EquityLiabilitiesFrag\n        }\n        nonCurrentLiabilities\n        nonCurrentLiabilitiesDesc {\n          ...EquityLiabilitiesFrag\n        }\n\n        incomeMoney\n        incomeModel {\n          ...IncomeExpendFrag\n        }\n        expendMoney\n        expendModel {\n          ...IncomeExpendFrag\n        }\n      }\n    }\n  }\n  \n  \n  \n": types.CompanyInNoutDocument,
    "\n  mutation EditUser(\n    $password: String\n    $firstName: String\n    $lastName: String\n    $avatar: String\n    $phone: String\n  ) {\n    editUser(\n      password: $password\n      firstName: $firstName\n      lastName: $lastName\n      avatar: $avatar\n      phone: $phone\n    ) {\n      errorMsg\n      ok\n    }\n  }\n": types.EditUserDocument,
    "\n  query ownCompany {\n    seeMyprofile {\n      ownCompany {\n        ...ConnectCompanyFrag\n      }\n      hasCompanyCount\n    }\n  }\n  \n": types.OwnCompanyDocument,
    "\n  query manageCompany {\n    seeMyprofile {\n      manageCompany {\n        ...ConnectCompanyFrag\n      }\n      manageCompanyCount\n    }\n  }\n  \n": types.ManageCompanyDocument,
    "\n  mutation Mutation(\n    $username: String!\n    $email: String!\n    $password: String!\n    $phone: String\n    $firstName: String\n    $lastName: String\n  ) {\n    createUser(\n      username: $username\n      email: $email\n      password: $password\n      phone: $phone\n      firstName: $firstName\n      lastName: $lastName\n    ) {\n      ok\n      errorMsg\n    }\n  }\n": types.MutationDocument,
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
export function gql(source: "\n  query seeEnl($companyName: String!, $seeEnLId: Int!) {\n    seeEnL(companyName: $companyName, id: $seeEnLId) {\n      id\n      createdAt\n      updateAt\n      enLId\n      enLName\n      enLType\n      enLDesc\n      current\n      assests\n      value\n    }\n  }\n"): (typeof documents)["\n  query seeEnl($companyName: String!, $seeEnLId: Int!) {\n    seeEnL(companyName: $companyName, id: $seeEnLId) {\n      id\n      createdAt\n      updateAt\n      enLId\n      enLName\n      enLType\n      enLDesc\n      current\n      assests\n      value\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SeeMyprofile {\n    seeMyprofile {\n      id\n      createdAt\n      updateAt\n      username\n      email\n      firstName\n      lastName\n      phone\n    }\n  }\n"): (typeof documents)["\n  query SeeMyprofile {\n    seeMyprofile {\n      id\n      createdAt\n      updateAt\n      username\n      email\n      firstName\n      lastName\n      phone\n    }\n  }\n"];
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
export function gql(source: "\n  fragment UserFrag on User {\n    id\n    username\n    firstName\n    lastName\n    email\n    phone\n    avatar\n  }\n"): (typeof documents)["\n  fragment UserFrag on User {\n    id\n    username\n    firstName\n    lastName\n    email\n    phone\n    avatar\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment VacationFrag on Vacation {\n    id\n    createdAt\n    updateAt\n    totalVacation\n    restVacation\n    specialVation\n    sickLeave\n  }\n"): (typeof documents)["\n  fragment VacationFrag on Vacation {\n    id\n    createdAt\n    updateAt\n    totalVacation\n    restVacation\n    specialVation\n    sickLeave\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query searchCompany($companyName: String!) {\n    searchCompany(companyName: $companyName) {\n      id\n      createdAt\n      updateAt\n      companyLogo\n      companyName\n      isManager\n      isOwned\n      companyManager {\n        ...UserFrag\n      }\n      companyOwner {\n        ...UserFrag\n      }\n      connectedCompany {\n        id\n        companyName\n        companyLogo\n      }\n      connectedCompanyCount\n      connectingCompany {\n        id\n        companyName\n        companyLogo\n      }\n      connectingCompanyCount\n      companyInNout {\n        ...CompanyInNoutFrag\n      }\n      companyProduct {\n        ...ProductFrag\n      }\n    }\n  }\n  \n  \n  \n"): (typeof documents)["\n  query searchCompany($companyName: String!) {\n    searchCompany(companyName: $companyName) {\n      id\n      createdAt\n      updateAt\n      companyLogo\n      companyName\n      isManager\n      isOwned\n      companyManager {\n        ...UserFrag\n      }\n      companyOwner {\n        ...UserFrag\n      }\n      connectedCompany {\n        id\n        companyName\n        companyLogo\n      }\n      connectedCompanyCount\n      connectingCompany {\n        id\n        companyName\n        companyLogo\n      }\n      connectingCompanyCount\n      companyInNout {\n        ...CompanyInNoutFrag\n      }\n      companyProduct {\n        ...ProductFrag\n      }\n    }\n  }\n  \n  \n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query CompanyInNout($companyName: String!) {\n    searchCompany(companyName: $companyName) {\n      companyInNout {\n        ...CompanyInNoutFrag\n        #\n        accountNum\n        accountName\n        accountDesc\n        #\n        totalAssets\n        totalAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        currentAssets\n        currentAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        nonCurrentAssets\n        nonCurrentAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        currentLiabilities\n        currentLiabilitiesDesc {\n          ...EquityLiabilitiesFrag\n        }\n        nonCurrentLiabilities\n        nonCurrentLiabilitiesDesc {\n          ...EquityLiabilitiesFrag\n        }\n\n        incomeMoney\n        incomeModel {\n          ...IncomeExpendFrag\n        }\n        expendMoney\n        expendModel {\n          ...IncomeExpendFrag\n        }\n      }\n    }\n  }\n  \n  \n  \n"): (typeof documents)["\n  query CompanyInNout($companyName: String!) {\n    searchCompany(companyName: $companyName) {\n      companyInNout {\n        ...CompanyInNoutFrag\n        #\n        accountNum\n        accountName\n        accountDesc\n        #\n        totalAssets\n        totalAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        currentAssets\n        currentAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        nonCurrentAssets\n        nonCurrentAssetsDesc {\n          ...EquityLiabilitiesFrag\n        }\n        currentLiabilities\n        currentLiabilitiesDesc {\n          ...EquityLiabilitiesFrag\n        }\n        nonCurrentLiabilities\n        nonCurrentLiabilitiesDesc {\n          ...EquityLiabilitiesFrag\n        }\n\n        incomeMoney\n        incomeModel {\n          ...IncomeExpendFrag\n        }\n        expendMoney\n        expendModel {\n          ...IncomeExpendFrag\n        }\n      }\n    }\n  }\n  \n  \n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EditUser(\n    $password: String\n    $firstName: String\n    $lastName: String\n    $avatar: String\n    $phone: String\n  ) {\n    editUser(\n      password: $password\n      firstName: $firstName\n      lastName: $lastName\n      avatar: $avatar\n      phone: $phone\n    ) {\n      errorMsg\n      ok\n    }\n  }\n"): (typeof documents)["\n  mutation EditUser(\n    $password: String\n    $firstName: String\n    $lastName: String\n    $avatar: String\n    $phone: String\n  ) {\n    editUser(\n      password: $password\n      firstName: $firstName\n      lastName: $lastName\n      avatar: $avatar\n      phone: $phone\n    ) {\n      errorMsg\n      ok\n    }\n  }\n"];
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
export function gql(source: "\n  mutation Mutation(\n    $username: String!\n    $email: String!\n    $password: String!\n    $phone: String\n    $firstName: String\n    $lastName: String\n  ) {\n    createUser(\n      username: $username\n      email: $email\n      password: $password\n      phone: $phone\n      firstName: $firstName\n      lastName: $lastName\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation Mutation(\n    $username: String!\n    $email: String!\n    $password: String!\n    $phone: String\n    $firstName: String\n    $lastName: String\n  ) {\n    createUser(\n      username: $username\n      email: $email\n      password: $password\n      phone: $phone\n      firstName: $firstName\n      lastName: $lastName\n    ) {\n      ok\n      errorMsg\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation loginUser($password: String!, $email: String, $username: String) {\n    loginUser(password: $password, email: $email, username: $username) {\n      token\n      ok\n      errorMsg\n    }\n  }\n"): (typeof documents)["\n  mutation loginUser($password: String!, $email: String, $username: String) {\n    loginUser(password: $password, email: $email, username: $username) {\n      token\n      ok\n      errorMsg\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;