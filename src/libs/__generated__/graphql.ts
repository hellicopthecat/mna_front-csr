/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Company = {
  __typename?: 'Company';
  companyAdress?: Maybe<CompanyAdress>;
  companyInNout: InNout;
  companyLogo?: Maybe<Scalars['String']['output']>;
  companyManager: Array<Maybe<User>>;
  companyName: Scalars['String']['output'];
  companyOwner: User;
  companyProduct?: Maybe<Array<Maybe<Product>>>;
  companyWorker?: Maybe<Array<Maybe<User>>>;
  connectedCompany?: Maybe<Array<Maybe<Company>>>;
  connectedCompanyCount: Scalars['Int']['output'];
  connectingCompany?: Maybe<Array<Maybe<Company>>>;
  connectingCompanyCount: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isManager: Scalars['Boolean']['output'];
  isOwned: Scalars['Boolean']['output'];
  updateAt: Scalars['String']['output'];
  workerSalary?: Maybe<Array<Maybe<Salary>>>;
  workerVacation?: Maybe<Array<Maybe<Vacation>>>;
};

export type CompanyAdress = {
  __typename?: 'CompanyAdress';
  adressNum?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  restAdress?: Maybe<Scalars['String']['output']>;
  streetAdress?: Maybe<Scalars['String']['output']>;
  updateAt: Scalars['String']['output'];
};

export type EquityLiabilities = {
  __typename?: 'EquityLiabilities';
  assests: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  current: Scalars['Boolean']['output'];
  enLDesc?: Maybe<Scalars['String']['output']>;
  enLId: Scalars['String']['output'];
  enLName: Scalars['String']['output'];
  enLType: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updateAt: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type InNout = {
  __typename?: 'InNout';
  accountDesc?: Maybe<Scalars['String']['output']>;
  accountName: Scalars['String']['output'];
  accountNum?: Maybe<Scalars['String']['output']>;
  budget: Scalars['Int']['output'];
  capital: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  currentAssets?: Maybe<Scalars['Int']['output']>;
  currentAssetsDesc?: Maybe<Array<Maybe<EquityLiabilities>>>;
  currentLiabilities?: Maybe<Scalars['Int']['output']>;
  currentLiabilitiesDesc?: Maybe<Array<Maybe<EquityLiabilities>>>;
  debtRatio?: Maybe<Scalars['Float']['output']>;
  equityRatio?: Maybe<Scalars['Float']['output']>;
  expendModel?: Maybe<Array<Maybe<IncomeExpend>>>;
  expendMoney?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  incomeModel?: Maybe<Array<Maybe<IncomeExpend>>>;
  incomeMoney?: Maybe<Scalars['Int']['output']>;
  liabilities: Scalars['Int']['output'];
  netAssets: Scalars['Int']['output'];
  netIncome: Scalars['Int']['output'];
  nonCurrentAssets?: Maybe<Scalars['Int']['output']>;
  nonCurrentAssetsDesc?: Maybe<Array<Maybe<EquityLiabilities>>>;
  nonCurrentLiabilities?: Maybe<Scalars['Int']['output']>;
  nonCurrentLiabilitiesDesc?: Maybe<Array<Maybe<EquityLiabilities>>>;
  profitMargin?: Maybe<Scalars['Float']['output']>;
  roe?: Maybe<Scalars['Float']['output']>;
  totalAssets: Scalars['Int']['output'];
  totalAssetsDesc?: Maybe<Array<Maybe<EquityLiabilities>>>;
  totalExpenses: Scalars['Int']['output'];
  totalRevenue: Scalars['Int']['output'];
  updateAt: Scalars['String']['output'];
};

export type IncomeExpend = {
  __typename?: 'IncomeExpend';
  accountSubject?: Maybe<Scalars['String']['output']>;
  businessDate?: Maybe<Scalars['String']['output']>;
  businessDesc?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  inNout?: Maybe<InNout>;
  inNoutId?: Maybe<Scalars['Int']['output']>;
  incomeTrue: Scalars['Boolean']['output'];
  infoSubtitle: Scalars['String']['output'];
  money: Scalars['Int']['output'];
  paymentType?: Maybe<Scalars['String']['output']>;
  paymentsDone: TPaymentSwitch;
  productId?: Maybe<Scalars['Int']['output']>;
  productItem?: Maybe<Product>;
  updateAt: Scalars['String']['output'];
};

export type LoginResultResponse = {
  __typename?: 'LoginResultResponse';
  errorMsg?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  cancelRegistWorker: ResultResponse;
  connectCompany: ResultResponse;
  createCompany: ResultResponse;
  createEnL: ResultResponse;
  createInEx: ResultResponse;
  createProduct: ResultResponse;
  createSalary: ResultResponse;
  createUser: ResultResponse;
  createVacation: ResultResponse;
  deleteManageAuth: ResultResponse;
  deleteUser: ResultResponse;
  disconnectCompany: ResultResponse;
  editCompanyAdress: ResultResponse;
  editEnL: ResultResponse;
  editInNout: ResultResponse;
  editProduct: ResultResponse;
  editSalary: ResultResponse;
  editUser: ResultResponse;
  editVacation: ResultResponse;
  loginUser: LoginResultResponse;
  managerAuth: ResultResponse;
  registWorker: ResultResponse;
  updateInEx: ResultResponse;
};


export type MutationCancelRegistWorkerArgs = {
  companyName: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationConnectCompanyArgs = {
  companyName: Scalars['String']['input'];
  targetCompany: Scalars['String']['input'];
};


export type MutationCreateCompanyArgs = {
  companyName: Scalars['String']['input'];
};


export type MutationCreateEnLArgs = {
  assests: Scalars['Boolean']['input'];
  companyName: Scalars['String']['input'];
  current: Scalars['Boolean']['input'];
  enLDesc?: InputMaybe<Scalars['String']['input']>;
  enLId: Scalars['String']['input'];
  enLName: Scalars['String']['input'];
  enLType: Scalars['String']['input'];
  value: Scalars['Int']['input'];
};


export type MutationCreateInExArgs = {
  accountCode?: InputMaybe<Scalars['String']['input']>;
  assests?: InputMaybe<Scalars['Boolean']['input']>;
  businessDate: Scalars['String']['input'];
  businessDesc?: InputMaybe<Scalars['String']['input']>;
  companyName: Scalars['String']['input'];
  current?: InputMaybe<Scalars['Boolean']['input']>;
  enLDesc?: InputMaybe<Scalars['String']['input']>;
  enLName: Scalars['String']['input'];
  enLType: Scalars['String']['input'];
  incomeTrue: Scalars['Boolean']['input'];
  infoSubtitle: Scalars['String']['input'];
  money: Scalars['Int']['input'];
  paymentType?: InputMaybe<Scalars['String']['input']>;
  paymentsDone?: InputMaybe<TPaymentSwitch>;
};


export type MutationCreateProductArgs = {
  accountCode?: InputMaybe<Scalars['String']['input']>;
  businessDesc?: InputMaybe<Scalars['String']['input']>;
  companyName: Scalars['String']['input'];
  incomeTrue?: InputMaybe<Scalars['Boolean']['input']>;
  itemCount?: InputMaybe<Scalars['Int']['input']>;
  itemDesc?: InputMaybe<Scalars['String']['input']>;
  itemModelName?: InputMaybe<Scalars['String']['input']>;
  itemName: Scalars['String']['input'];
  itemPhoto?: InputMaybe<Scalars['String']['input']>;
  itemPrice?: InputMaybe<Scalars['Int']['input']>;
  itemProductId: Scalars['String']['input'];
  itemType?: InputMaybe<Scalars['String']['input']>;
  paymentType?: InputMaybe<Scalars['String']['input']>;
  paymentsDone?: InputMaybe<TPaymentSwitch>;
};


export type MutationCreateSalaryArgs = {
  annualSalary?: InputMaybe<Scalars['Int']['input']>;
  beforeTaxMonthlySalary?: InputMaybe<Scalars['Int']['input']>;
  companyName: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};


export type MutationCreateVacationArgs = {
  companyName: Scalars['String']['input'];
  restVacation?: InputMaybe<Scalars['Int']['input']>;
  sickLeave?: InputMaybe<Scalars['Int']['input']>;
  specialVation?: InputMaybe<Scalars['Int']['input']>;
  totalVacation?: InputMaybe<Scalars['Int']['input']>;
  username: Scalars['String']['input'];
};


export type MutationDeleteManageAuthArgs = {
  companyName: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  password: Scalars['String']['input'];
};


export type MutationDisconnectCompanyArgs = {
  companyName: Scalars['String']['input'];
  targetCompany: Scalars['String']['input'];
};


export type MutationEditCompanyAdressArgs = {
  adressNum?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  companyName: Scalars['String']['input'];
  country?: InputMaybe<Scalars['String']['input']>;
  restAdress?: InputMaybe<Scalars['String']['input']>;
  streetAdress?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditEnLArgs = {
  assests?: InputMaybe<Scalars['Boolean']['input']>;
  companyName: Scalars['String']['input'];
  current?: InputMaybe<Scalars['Boolean']['input']>;
  enLDesc?: InputMaybe<Scalars['String']['input']>;
  enLId: Scalars['String']['input'];
  enLName?: InputMaybe<Scalars['String']['input']>;
  enLType?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationEditInNoutArgs = {
  accountDesc?: InputMaybe<Scalars['String']['input']>;
  accountName?: InputMaybe<Scalars['String']['input']>;
  accountNum?: InputMaybe<Scalars['String']['input']>;
  budget?: InputMaybe<Scalars['Int']['input']>;
  companyName: Scalars['String']['input'];
};


export type MutationEditProductArgs = {
  itemCount?: InputMaybe<Scalars['Int']['input']>;
  itemDesc?: InputMaybe<Scalars['String']['input']>;
  itemModelName?: InputMaybe<Scalars['String']['input']>;
  itemName?: InputMaybe<Scalars['String']['input']>;
  itemPhoto?: InputMaybe<Scalars['String']['input']>;
  itemPrice?: InputMaybe<Scalars['Int']['input']>;
  itemProductId: Scalars['String']['input'];
  itemType?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditSalaryArgs = {
  annualSalary?: InputMaybe<Scalars['Int']['input']>;
  beforeTaxMonthlySalary?: InputMaybe<Scalars['Int']['input']>;
  companyName: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationEditUserArgs = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditVacationArgs = {
  companyName: Scalars['String']['input'];
  restVacation?: InputMaybe<Scalars['Int']['input']>;
  sickLeave?: InputMaybe<Scalars['Int']['input']>;
  specialVation?: InputMaybe<Scalars['Int']['input']>;
  totalVacation?: InputMaybe<Scalars['Int']['input']>;
  username: Scalars['String']['input'];
};


export type MutationLoginUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};


export type MutationManagerAuthArgs = {
  companyName: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationRegistWorkerArgs = {
  companyName: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationUpdateInExArgs = {
  companyName: Scalars['String']['input'];
  incomeTrue?: InputMaybe<Scalars['Boolean']['input']>;
  infoSubtitle: Scalars['String']['input'];
  money?: InputMaybe<Scalars['Int']['input']>;
  paymentsDone?: InputMaybe<TPaymentSwitch>;
};

export type Product = {
  __typename?: 'Product';
  company: Company;
  companyId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  incomeExpend: IncomeExpend;
  incomeExpendTypeId: Scalars['Int']['output'];
  itemCount?: Maybe<Scalars['Int']['output']>;
  itemDesc?: Maybe<Scalars['String']['output']>;
  itemModelName?: Maybe<Scalars['String']['output']>;
  itemName: Scalars['String']['output'];
  itemPhoto?: Maybe<Scalars['String']['output']>;
  itemPrice?: Maybe<Scalars['Int']['output']>;
  itemProductId: Scalars['String']['output'];
  itemType?: Maybe<Scalars['String']['output']>;
  updateAt: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  searchAdress?: Maybe<Array<Maybe<CompanyAdress>>>;
  searchCompany: Company;
  searchUsers: Array<Maybe<User>>;
  seeCompanyProduct?: Maybe<Array<Maybe<Product>>>;
  seeInNout: InNout;
  seeMyprofile: User;
  seeProduct?: Maybe<Array<Maybe<Product>>>;
};


export type QuerySearchAdressArgs = {
  companyName: Scalars['String']['input'];
};


export type QuerySearchCompanyArgs = {
  companyName: Scalars['String']['input'];
};


export type QuerySearchUsersArgs = {
  username: Scalars['String']['input'];
};


export type QuerySeeCompanyProductArgs = {
  companyName: Scalars['String']['input'];
};


export type QuerySeeInNoutArgs = {
  companyName: Scalars['String']['input'];
};


export type QuerySeeProductArgs = {
  itemModelName?: InputMaybe<Scalars['String']['input']>;
  itemName?: InputMaybe<Scalars['String']['input']>;
  itemProductId?: InputMaybe<Scalars['String']['input']>;
};

export type ResultResponse = {
  __typename?: 'ResultResponse';
  errorMsg?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type Salary = {
  __typename?: 'Salary';
  afterTaxMonthlySalary?: Maybe<Scalars['Int']['output']>;
  annualSalary?: Maybe<Scalars['Int']['output']>;
  beforeTaxMonthlySalary?: Maybe<Scalars['Int']['output']>;
  company: Company;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  updateAt: Scalars['String']['output'];
  user: User;
};

export enum TPaymentSwitch {
  Nonpaid = 'NONPAID',
  Paid = 'PAID',
  Wait = 'WAIT'
}

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  hasCompanyCount: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  manageCompany?: Maybe<Array<Maybe<Company>>>;
  manageCompanyCount: Scalars['Int']['output'];
  ownCompany?: Maybe<Array<Maybe<Company>>>;
  phone?: Maybe<Scalars['String']['output']>;
  salary?: Maybe<Array<Maybe<Salary>>>;
  updateAt: Scalars['String']['output'];
  username: Scalars['String']['output'];
  vacation?: Maybe<Array<Maybe<Vacation>>>;
};

export type Vacation = {
  __typename?: 'Vacation';
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  restVacation?: Maybe<Scalars['Int']['output']>;
  sickLeave?: Maybe<Scalars['Int']['output']>;
  specialVation?: Maybe<Scalars['Int']['output']>;
  totalVacation?: Maybe<Scalars['Int']['output']>;
  updateAt: Scalars['String']['output'];
  user: User;
};

export type SeeMyprofileQueryVariables = Exact<{ [key: string]: never; }>;


export type SeeMyprofileQuery = { __typename?: 'Query', seeMyprofile: { __typename?: 'User', id: string, createdAt: string, updateAt: string, username: string, email: string, firstName?: string | null, lastName?: string | null, phone?: string | null } };

export type ConnectCompanyFragFragment = { __typename?: 'Company', id: string, createdAt: string, updateAt: string, companyLogo?: string | null, companyName: string, isManager: boolean, isOwned: boolean, connectedCompanyCount: number, connectingCompanyCount: number, connectedCompany?: Array<{ __typename?: 'Company', id: string, companyName: string } | null> | null, connectingCompany?: Array<{ __typename?: 'Company', id: string, companyName: string } | null> | null, companyInNout: { __typename?: 'InNout', id: number, accountNum?: string | null, budget: number, totalAssets: number } } & { ' $fragmentName'?: 'ConnectCompanyFragFragment' };

export type MyVacationFragFragment = { __typename?: 'Vacation', id: string, createdAt: string, updateAt: string, totalVacation?: number | null, restVacation?: number | null, specialVation?: number | null, sickLeave?: number | null } & { ' $fragmentName'?: 'MyVacationFragFragment' };

export type CompanyInNoutFragFragment = { __typename?: 'InNout', id: number, budget: number, totalAssets: number, capital: number, liabilities: number, totalRevenue: number, totalExpenses: number, profitMargin?: number | null, roe?: number | null, netAssets: number, netIncome: number, debtRatio?: number | null, equityRatio?: number | null } & { ' $fragmentName'?: 'CompanyInNoutFragFragment' };

export type SearchCompanyQueryVariables = Exact<{
  companyName: Scalars['String']['input'];
}>;


export type SearchCompanyQuery = { __typename?: 'Query', searchCompany: { __typename?: 'Company', id: string, createdAt: string, updateAt: string, companyLogo?: string | null, companyName: string, isManager: boolean, isOwned: boolean, connectedCompanyCount: number, connectingCompanyCount: number, companyManager: Array<{ __typename?: 'User', id: string, username: string, email: string, phone?: string | null, avatar?: string | null } | null>, companyOwner: { __typename?: 'User', id: string, username: string, email: string, phone?: string | null, avatar?: string | null }, connectedCompany?: Array<{ __typename?: 'Company', id: string, companyName: string, companyLogo?: string | null } | null> | null, connectingCompany?: Array<{ __typename?: 'Company', id: string, companyName: string, companyLogo?: string | null } | null> | null, companyInNout: (
      { __typename?: 'InNout' }
      & { ' $fragmentRefs'?: { 'CompanyInNoutFragFragment': CompanyInNoutFragFragment } }
    ) } };

export type EditUserMutationVariables = Exact<{
  password?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
}>;


export type EditUserMutation = { __typename?: 'Mutation', editUser: { __typename?: 'ResultResponse', errorMsg?: string | null, ok: boolean } };

export type OwnCompanyQueryVariables = Exact<{ [key: string]: never; }>;


export type OwnCompanyQuery = { __typename?: 'Query', seeMyprofile: { __typename?: 'User', hasCompanyCount: number, ownCompany?: Array<(
      { __typename?: 'Company' }
      & { ' $fragmentRefs'?: { 'ConnectCompanyFragFragment': ConnectCompanyFragFragment } }
    ) | null> | null } };

export type ManageCompanyQueryVariables = Exact<{ [key: string]: never; }>;


export type ManageCompanyQuery = { __typename?: 'Query', seeMyprofile: { __typename?: 'User', manageCompanyCount: number, manageCompany?: Array<(
      { __typename?: 'Company' }
      & { ' $fragmentRefs'?: { 'ConnectCompanyFragFragment': ConnectCompanyFragFragment } }
    ) | null> | null } };

export type MutationMutationVariables = Exact<{
  username: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
}>;


export type MutationMutation = { __typename?: 'Mutation', createUser: { __typename?: 'ResultResponse', ok: boolean, errorMsg?: string | null } };

export type LoginUserMutationVariables = Exact<{
  password: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'LoginResultResponse', token?: string | null, ok: boolean, errorMsg?: string | null } };

export const ConnectCompanyFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ConnectCompanyFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"companyLogo"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"isManager"}},{"kind":"Field","name":{"kind":"Name","value":"isOwned"}},{"kind":"Field","name":{"kind":"Name","value":"connectedCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"connectedCompanyCount"}},{"kind":"Field","name":{"kind":"Name","value":"connectingCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"connectingCompanyCount"}},{"kind":"Field","name":{"kind":"Name","value":"companyInNout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accountNum"}},{"kind":"Field","name":{"kind":"Name","value":"budget"}},{"kind":"Field","name":{"kind":"Name","value":"totalAssets"}}]}}]}}]} as unknown as DocumentNode<ConnectCompanyFragFragment, unknown>;
export const MyVacationFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MyVacationFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Vacation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"totalVacation"}},{"kind":"Field","name":{"kind":"Name","value":"restVacation"}},{"kind":"Field","name":{"kind":"Name","value":"specialVation"}},{"kind":"Field","name":{"kind":"Name","value":"sickLeave"}}]}}]} as unknown as DocumentNode<MyVacationFragFragment, unknown>;
export const CompanyInNoutFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyInNoutFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InNout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"budget"}},{"kind":"Field","name":{"kind":"Name","value":"totalAssets"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"liabilities"}},{"kind":"Field","name":{"kind":"Name","value":"totalRevenue"}},{"kind":"Field","name":{"kind":"Name","value":"totalExpenses"}},{"kind":"Field","name":{"kind":"Name","value":"profitMargin"}},{"kind":"Field","name":{"kind":"Name","value":"roe"}},{"kind":"Field","name":{"kind":"Name","value":"netAssets"}},{"kind":"Field","name":{"kind":"Name","value":"netIncome"}},{"kind":"Field","name":{"kind":"Name","value":"debtRatio"}},{"kind":"Field","name":{"kind":"Name","value":"equityRatio"}}]}}]} as unknown as DocumentNode<CompanyInNoutFragFragment, unknown>;
export const SeeMyprofileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SeeMyprofile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seeMyprofile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}}]}}]} as unknown as DocumentNode<SeeMyprofileQuery, SeeMyprofileQueryVariables>;
export const SearchCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"companyLogo"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"isManager"}},{"kind":"Field","name":{"kind":"Name","value":"isOwned"}},{"kind":"Field","name":{"kind":"Name","value":"companyManager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"companyOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"connectedCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"companyLogo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"connectedCompanyCount"}},{"kind":"Field","name":{"kind":"Name","value":"connectingCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"companyLogo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"connectingCompanyCount"}},{"kind":"Field","name":{"kind":"Name","value":"companyInNout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyInNoutFrag"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyInNoutFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InNout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"budget"}},{"kind":"Field","name":{"kind":"Name","value":"totalAssets"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"liabilities"}},{"kind":"Field","name":{"kind":"Name","value":"totalRevenue"}},{"kind":"Field","name":{"kind":"Name","value":"totalExpenses"}},{"kind":"Field","name":{"kind":"Name","value":"profitMargin"}},{"kind":"Field","name":{"kind":"Name","value":"roe"}},{"kind":"Field","name":{"kind":"Name","value":"netAssets"}},{"kind":"Field","name":{"kind":"Name","value":"netIncome"}},{"kind":"Field","name":{"kind":"Name","value":"debtRatio"}},{"kind":"Field","name":{"kind":"Name","value":"equityRatio"}}]}}]} as unknown as DocumentNode<SearchCompanyQuery, SearchCompanyQueryVariables>;
export const EditUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"avatar"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"Argument","name":{"kind":"Name","value":"avatar"},"value":{"kind":"Variable","name":{"kind":"Name","value":"avatar"}}},{"kind":"Argument","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}},{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<EditUserMutation, EditUserMutationVariables>;
export const OwnCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ownCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seeMyprofile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ownCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ConnectCompanyFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hasCompanyCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ConnectCompanyFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"companyLogo"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"isManager"}},{"kind":"Field","name":{"kind":"Name","value":"isOwned"}},{"kind":"Field","name":{"kind":"Name","value":"connectedCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"connectedCompanyCount"}},{"kind":"Field","name":{"kind":"Name","value":"connectingCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"connectingCompanyCount"}},{"kind":"Field","name":{"kind":"Name","value":"companyInNout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accountNum"}},{"kind":"Field","name":{"kind":"Name","value":"budget"}},{"kind":"Field","name":{"kind":"Name","value":"totalAssets"}}]}}]}}]} as unknown as DocumentNode<OwnCompanyQuery, OwnCompanyQueryVariables>;
export const ManageCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"manageCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seeMyprofile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"manageCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ConnectCompanyFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"manageCompanyCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ConnectCompanyFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"companyLogo"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"isManager"}},{"kind":"Field","name":{"kind":"Name","value":"isOwned"}},{"kind":"Field","name":{"kind":"Name","value":"connectedCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"connectedCompanyCount"}},{"kind":"Field","name":{"kind":"Name","value":"connectingCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"connectingCompanyCount"}},{"kind":"Field","name":{"kind":"Name","value":"companyInNout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accountNum"}},{"kind":"Field","name":{"kind":"Name","value":"budget"}},{"kind":"Field","name":{"kind":"Name","value":"totalAssets"}}]}}]}}]} as unknown as DocumentNode<ManageCompanyQuery, ManageCompanyQueryVariables>;
export const MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}},{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}}]}}]}}]} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;