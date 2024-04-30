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
    "\n  query SeeMyprofile {\n    seeMyprofile {\n      id\n      createdAt\n      updateAt\n      username\n      email\n      firstName\n      lastName\n      phone\n    }\n  }\n": types.SeeMyprofileDocument,
    "\n  fragment ConnectCompanyFrag on Company {\n    id\n    createdAt\n    updateAt\n    companyLogo\n    companyName\n    isManager\n    isOwned\n    connectedCompany {\n      id\n      companyName\n    }\n    connectedCompanyCount\n    connectingCompany {\n      id\n      companyName\n    }\n    connectingCompanyCount\n    companyInNout {\n      id\n      accountNum\n      budget\n      totalAssets\n    }\n  }\n": types.ConnectCompanyFragFragmentDoc,
    "\n  fragment MyVacationFrag on Vacation {\n    id\n    createdAt\n    updateAt\n    totalVacation\n    restVacation\n    specialVation\n    sickLeave\n  }\n": types.MyVacationFragFragmentDoc,
    "\n  fragment CompanyInNoutFrag on InNout {\n    id\n    budget\n    totalAssets\n    capital\n    liabilities\n    totalRevenue\n    totalExpenses\n    profitMargin\n    roe\n    netAssets\n    netIncome\n    debtRatio\n    equityRatio\n  }\n": types.CompanyInNoutFragFragmentDoc,
    "\n  query searchCompany($companyName: String!) {\n    searchCompany(companyName: $companyName) {\n      id\n      createdAt\n      updateAt\n      companyLogo\n      companyName\n      isManager\n      isOwned\n      companyManager {\n        id\n        username\n        email\n        phone\n        avatar\n      }\n      companyOwner {\n        id\n        username\n        email\n        phone\n        avatar\n      }\n      connectedCompany {\n        id\n        companyName\n        companyLogo\n      }\n      connectedCompanyCount\n      connectingCompany {\n        id\n        companyName\n        companyLogo\n      }\n      connectingCompanyCount\n      companyInNout {\n        ...CompanyInNoutFrag\n      }\n    }\n  }\n  \n": types.SearchCompanyDocument,
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
export function gql(source: "\n  query SeeMyprofile {\n    seeMyprofile {\n      id\n      createdAt\n      updateAt\n      username\n      email\n      firstName\n      lastName\n      phone\n    }\n  }\n"): (typeof documents)["\n  query SeeMyprofile {\n    seeMyprofile {\n      id\n      createdAt\n      updateAt\n      username\n      email\n      firstName\n      lastName\n      phone\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment ConnectCompanyFrag on Company {\n    id\n    createdAt\n    updateAt\n    companyLogo\n    companyName\n    isManager\n    isOwned\n    connectedCompany {\n      id\n      companyName\n    }\n    connectedCompanyCount\n    connectingCompany {\n      id\n      companyName\n    }\n    connectingCompanyCount\n    companyInNout {\n      id\n      accountNum\n      budget\n      totalAssets\n    }\n  }\n"): (typeof documents)["\n  fragment ConnectCompanyFrag on Company {\n    id\n    createdAt\n    updateAt\n    companyLogo\n    companyName\n    isManager\n    isOwned\n    connectedCompany {\n      id\n      companyName\n    }\n    connectedCompanyCount\n    connectingCompany {\n      id\n      companyName\n    }\n    connectingCompanyCount\n    companyInNout {\n      id\n      accountNum\n      budget\n      totalAssets\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment MyVacationFrag on Vacation {\n    id\n    createdAt\n    updateAt\n    totalVacation\n    restVacation\n    specialVation\n    sickLeave\n  }\n"): (typeof documents)["\n  fragment MyVacationFrag on Vacation {\n    id\n    createdAt\n    updateAt\n    totalVacation\n    restVacation\n    specialVation\n    sickLeave\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment CompanyInNoutFrag on InNout {\n    id\n    budget\n    totalAssets\n    capital\n    liabilities\n    totalRevenue\n    totalExpenses\n    profitMargin\n    roe\n    netAssets\n    netIncome\n    debtRatio\n    equityRatio\n  }\n"): (typeof documents)["\n  fragment CompanyInNoutFrag on InNout {\n    id\n    budget\n    totalAssets\n    capital\n    liabilities\n    totalRevenue\n    totalExpenses\n    profitMargin\n    roe\n    netAssets\n    netIncome\n    debtRatio\n    equityRatio\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query searchCompany($companyName: String!) {\n    searchCompany(companyName: $companyName) {\n      id\n      createdAt\n      updateAt\n      companyLogo\n      companyName\n      isManager\n      isOwned\n      companyManager {\n        id\n        username\n        email\n        phone\n        avatar\n      }\n      companyOwner {\n        id\n        username\n        email\n        phone\n        avatar\n      }\n      connectedCompany {\n        id\n        companyName\n        companyLogo\n      }\n      connectedCompanyCount\n      connectingCompany {\n        id\n        companyName\n        companyLogo\n      }\n      connectingCompanyCount\n      companyInNout {\n        ...CompanyInNoutFrag\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query searchCompany($companyName: String!) {\n    searchCompany(companyName: $companyName) {\n      id\n      createdAt\n      updateAt\n      companyLogo\n      companyName\n      isManager\n      isOwned\n      companyManager {\n        id\n        username\n        email\n        phone\n        avatar\n      }\n      companyOwner {\n        id\n        username\n        email\n        phone\n        avatar\n      }\n      connectedCompany {\n        id\n        companyName\n        companyLogo\n      }\n      connectedCompanyCount\n      connectingCompany {\n        id\n        companyName\n        companyLogo\n      }\n      connectingCompanyCount\n      companyInNout {\n        ...CompanyInNoutFrag\n      }\n    }\n  }\n  \n"];
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