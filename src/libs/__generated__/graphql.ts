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
  debtRatio: Scalars['Float']['output'];
  equityRatio: Scalars['Float']['output'];
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
  profitMargin: Scalars['Float']['output'];
  roe: Scalars['Float']['output'];
  totalAssets: Scalars['Int']['output'];
  totalAssetsDesc?: Maybe<Array<Maybe<EquityLiabilities>>>;
  totalExpenses: Scalars['Int']['output'];
  totalRevenue: Scalars['Int']['output'];
  updateAt: Scalars['String']['output'];
};

export type IncomeExpend = {
  __typename?: 'IncomeExpend';
  accountCode?: Maybe<Scalars['String']['output']>;
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
  createVacationDesc: ResultResponse;
  deleteEnL: ResultResponse;
  deleteManageAuth: ResultResponse;
  deleteProduct: ResultResponse;
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
  companyName: Scalars['String']['input'];
  familyCount?: InputMaybe<Scalars['Int']['input']>;
  preTaxMonthlySalary?: InputMaybe<Scalars['Int']['input']>;
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
  annual?: InputMaybe<Scalars['Int']['input']>;
  companyName: Scalars['String']['input'];
  joinCompanyDate?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};


export type MutationCreateVacationDescArgs = {
  day: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  vacationType: TVacation;
};


export type MutationDeleteEnLArgs = {
  enLId: Scalars['String']['input'];
};


export type MutationDeleteManageAuthArgs = {
  companyName: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationDeleteProductArgs = {
  companyName: Scalars['String']['input'];
  id: Scalars['Int']['input'];
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
  accountCode?: InputMaybe<Scalars['String']['input']>;
  businessDesc?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  incomeTrue?: InputMaybe<Scalars['Boolean']['input']>;
  itemCount?: InputMaybe<Scalars['Int']['input']>;
  itemDesc?: InputMaybe<Scalars['String']['input']>;
  itemModelName?: InputMaybe<Scalars['String']['input']>;
  itemName?: InputMaybe<Scalars['String']['input']>;
  itemPhoto?: InputMaybe<Scalars['String']['input']>;
  itemPrice?: InputMaybe<Scalars['Int']['input']>;
  itemProductId: Scalars['String']['input'];
  itemType?: InputMaybe<Scalars['String']['input']>;
  paymentType?: InputMaybe<Scalars['String']['input']>;
  paymentsDone?: InputMaybe<TPaymentSwitch>;
};


export type MutationEditSalaryArgs = {
  companyName: Scalars['String']['input'];
  familyCount?: InputMaybe<Scalars['Int']['input']>;
  preTaxMonthlySalary?: InputMaybe<Scalars['Int']['input']>;
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
  annual?: InputMaybe<Scalars['Int']['input']>;
  companyName: Scalars['String']['input'];
  joinCompanyDate?: InputMaybe<Scalars['String']['input']>;
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
  searchProduct?: Maybe<Array<Maybe<Product>>>;
  searchUsers: Array<Maybe<User>>;
  seeCompanyProduct?: Maybe<Array<Maybe<Product>>>;
  seeCompanyWorker?: Maybe<Array<Maybe<User>>>;
  seeEnL: EquityLiabilities;
  seeInNout: InNout;
  seeMyprofile: User;
  seeProduct: Product;
  seeUserProfile: User;
};


export type QuerySearchAdressArgs = {
  companyName: Scalars['String']['input'];
};


export type QuerySearchCompanyArgs = {
  companyName: Scalars['String']['input'];
};


export type QuerySearchProductArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  itemModelName?: InputMaybe<Scalars['String']['input']>;
  itemName?: InputMaybe<Scalars['String']['input']>;
  itemProductId?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchUsersArgs = {
  username: Scalars['String']['input'];
};


export type QuerySeeCompanyProductArgs = {
  companyName: Scalars['String']['input'];
};


export type QuerySeeCompanyWorkerArgs = {
  companyName: Scalars['String']['input'];
};


export type QuerySeeEnLArgs = {
  companyName: Scalars['String']['input'];
  id: Scalars['Int']['input'];
};


export type QuerySeeInNoutArgs = {
  companyName: Scalars['String']['input'];
};


export type QuerySeeProductArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySeeUserProfileArgs = {
  username: Scalars['String']['input'];
};

export type ResultResponse = {
  __typename?: 'ResultResponse';
  errorMsg?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  subId?: Maybe<Scalars['Int']['output']>;
};

export type Salary = {
  __typename?: 'Salary';
  annualSalary?: Maybe<Scalars['Int']['output']>;
  childCount?: Maybe<Scalars['Int']['output']>;
  childTax?: Maybe<Scalars['Int']['output']>;
  company: Company;
  createdAt: Scalars['String']['output'];
  earnIncomeAmount?: Maybe<Scalars['Int']['output']>;
  earnIncomeDedution?: Maybe<Scalars['Int']['output']>;
  earnIncomeTaxCredit?: Maybe<Scalars['Int']['output']>;
  familyDedution?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  pensionInsuranceDedution?: Maybe<Scalars['Int']['output']>;
  preTaxMonthlySalary?: Maybe<Scalars['Int']['output']>;
  simplifiedTax?: Maybe<Scalars['Int']['output']>;
  specialIncomeDedution?: Maybe<Scalars['Int']['output']>;
  taxBase?: Maybe<Scalars['Int']['output']>;
  taxCalculate?: Maybe<Scalars['Int']['output']>;
  taxDetermined?: Maybe<Scalars['Int']['output']>;
  updateAt: Scalars['String']['output'];
  user: User;
};

export enum TPaymentSwitch {
  Nonpaid = 'NONPAID',
  Paid = 'PAID',
  Wait = 'WAIT'
}

export enum TVacation {
  Annual = 'ANNUAL',
  Half = 'HALF',
  Nonpaid = 'NONPAID',
  Other = 'OTHER',
  Othersick = 'OTHERSICK',
  Sick = 'SICK'
}

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  hasCompanyCount: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  isOnVacation?: Maybe<Scalars['Boolean']['output']>;
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
  annual?: Maybe<Scalars['Int']['output']>;
  company: Company;
  companyId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Array<Maybe<VacationDesc>>>;
  id: Scalars['Int']['output'];
  joinCompanyDate: Scalars['String']['output'];
  other?: Maybe<Scalars['Int']['output']>;
  restVacation?: Maybe<Scalars['Int']['output']>;
  updateAt: Scalars['String']['output'];
  useAnnualVacation?: Maybe<Scalars['Int']['output']>;
  user: User;
};

export type VacationDesc = {
  __typename?: 'VacationDesc';
  createdAt: Scalars['String']['output'];
  day: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updateAt: Scalars['String']['output'];
  vacationType: TVacation;
};

export type EditInNoutMutationVariables = Exact<{
  companyName: Scalars['String']['input'];
  accountNum?: InputMaybe<Scalars['String']['input']>;
  accountName?: InputMaybe<Scalars['String']['input']>;
  accountDesc?: InputMaybe<Scalars['String']['input']>;
}>;


export type EditInNoutMutation = { __typename?: 'Mutation', editInNout: { __typename?: 'ResultResponse', ok: boolean, errorMsg?: string | null } };

export type CreateEnLMutationVariables = Exact<{
  companyName: Scalars['String']['input'];
  enLId: Scalars['String']['input'];
  enLName: Scalars['String']['input'];
  enLType: Scalars['String']['input'];
  current: Scalars['Boolean']['input'];
  assests: Scalars['Boolean']['input'];
  value: Scalars['Int']['input'];
  enLDesc?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateEnLMutation = { __typename?: 'Mutation', createEnL: { __typename?: 'ResultResponse', ok: boolean, errorMsg?: string | null } };

export type DeleteEnlMutationVariables = Exact<{
  enLId: Scalars['String']['input'];
}>;


export type DeleteEnlMutation = { __typename?: 'Mutation', deleteEnL: { __typename?: 'ResultResponse', ok: boolean, errorMsg?: string | null } };

export type SeeEnlQueryVariables = Exact<{
  companyName: Scalars['String']['input'];
  seeEnLId: Scalars['Int']['input'];
}>;


export type SeeEnlQuery = { __typename?: 'Query', seeEnL: { __typename?: 'EquityLiabilities', id: number, createdAt: string, updateAt: string, enLId: string, enLName: string, enLType: string, enLDesc?: string | null, current: boolean, assests: boolean, value: number } };

export type EditEnLMutationVariables = Exact<{
  companyName: Scalars['String']['input'];
  enLId: Scalars['String']['input'];
  enLName?: InputMaybe<Scalars['String']['input']>;
  enLType?: InputMaybe<Scalars['String']['input']>;
  enLDesc?: InputMaybe<Scalars['String']['input']>;
  current?: InputMaybe<Scalars['Boolean']['input']>;
  assests?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
}>;


export type EditEnLMutation = { __typename?: 'Mutation', editEnL: { __typename?: 'ResultResponse', ok: boolean, errorMsg?: string | null } };

export type MutationMutationVariables = Exact<{
  itemProductId: Scalars['String']['input'];
  itemName: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  paymentsDone?: InputMaybe<TPaymentSwitch>;
  itemModelName?: InputMaybe<Scalars['String']['input']>;
  itemPhoto?: InputMaybe<Scalars['String']['input']>;
  itemType?: InputMaybe<Scalars['String']['input']>;
  itemCount?: InputMaybe<Scalars['Int']['input']>;
  itemPrice?: InputMaybe<Scalars['Int']['input']>;
  itemDesc?: InputMaybe<Scalars['String']['input']>;
  incomeTrue?: InputMaybe<Scalars['Boolean']['input']>;
  paymentType?: InputMaybe<Scalars['String']['input']>;
  accountCode?: InputMaybe<Scalars['String']['input']>;
  businessDesc?: InputMaybe<Scalars['String']['input']>;
}>;


export type MutationMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'ResultResponse', ok: boolean, errorMsg?: string | null } };

export type CompanyInNoutQueryVariables = Exact<{
  companyName: Scalars['String']['input'];
}>;


export type CompanyInNoutQuery = { __typename?: 'Query', searchCompany: { __typename?: 'Company', id: string, companyProduct?: Array<(
      { __typename?: 'Product' }
      & { ' $fragmentRefs'?: { 'ProductFragFragment': ProductFragFragment } }
    ) | null> | null } };

export type DeleteProductMutationVariables = Exact<{
  companyName: Scalars['String']['input'];
  deleteProductId: Scalars['Int']['input'];
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct: { __typename?: 'ResultResponse', ok: boolean, errorMsg?: string | null } };

export type SeeDetailProductQueryVariables = Exact<{
  seeProductId: Scalars['Int']['input'];
}>;


export type SeeDetailProductQuery = { __typename?: 'Query', seeProduct: { __typename?: 'Product', id: number, createdAt: string, updateAt: string, itemProductId: string, itemName: string, itemModelName?: string | null, itemPhoto?: string | null, itemType?: string | null, itemCount?: number | null, itemPrice?: number | null, itemDesc?: string | null, incomeExpend: (
      { __typename?: 'IncomeExpend' }
      & { ' $fragmentRefs'?: { 'IncomeExpendFragFragment': IncomeExpendFragFragment } }
    ) } };

export type EditProductMutationVariables = Exact<{
  editProductId: Scalars['Int']['input'];
  itemProductId: Scalars['String']['input'];
  itemModelName?: InputMaybe<Scalars['String']['input']>;
  itemName?: InputMaybe<Scalars['String']['input']>;
  itemType?: InputMaybe<Scalars['String']['input']>;
  itemCount?: InputMaybe<Scalars['Int']['input']>;
  itemPrice?: InputMaybe<Scalars['Int']['input']>;
  itemDesc?: InputMaybe<Scalars['String']['input']>;
  incomeTrue?: InputMaybe<Scalars['Boolean']['input']>;
  paymentType?: InputMaybe<Scalars['String']['input']>;
  accountCode?: InputMaybe<Scalars['String']['input']>;
  businessDesc?: InputMaybe<Scalars['String']['input']>;
  paymentsDone?: InputMaybe<TPaymentSwitch>;
}>;


export type EditProductMutation = { __typename?: 'Mutation', editProduct: { __typename?: 'ResultResponse', ok: boolean, errorMsg?: string | null } };

export type SearchCompanyProductQueryVariables = Exact<{
  companyName: Scalars['String']['input'];
}>;


export type SearchCompanyProductQuery = { __typename?: 'Query', searchCompany: { __typename?: 'Company', companyProduct?: Array<(
      { __typename?: 'Product' }
      & { ' $fragmentRefs'?: { 'ProductFragFragment': ProductFragFragment } }
    ) | null> | null } };

export type SeeCompanyWokersQueryVariables = Exact<{
  companyName: Scalars['String']['input'];
}>;


export type SeeCompanyWokersQuery = { __typename?: 'Query', seeCompanyWorker?: Array<(
    { __typename?: 'User', vacation?: Array<(
      { __typename?: 'Vacation', companyId?: number | null }
      & { ' $fragmentRefs'?: { 'VacationFragFragment': VacationFragFragment } }
    ) | null> | null, salary?: Array<(
      { __typename?: 'Salary' }
      & { ' $fragmentRefs'?: { 'SalaryFragFragment': SalaryFragFragment } }
    ) | null> | null }
    & { ' $fragmentRefs'?: { 'UserFragFragment': UserFragFragment } }
  ) | null> | null };

export type CreateVacationMutationVariables = Exact<{
  username: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  annual?: InputMaybe<Scalars['Int']['input']>;
  joinCompanyDate?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateVacationMutation = { __typename?: 'Mutation', createVacation: { __typename?: 'ResultResponse', ok: boolean, errorMsg?: string | null } };

export type RegistWorkerMutationVariables = Exact<{
  username: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
}>;


export type RegistWorkerMutation = { __typename?: 'Mutation', registWorker: { __typename?: 'ResultResponse', ok: boolean, id?: number | null, subId?: number | null, errorMsg?: string | null } };

export type SeeMyprofileQueryVariables = Exact<{ [key: string]: never; }>;


export type SeeMyprofileQuery = { __typename?: 'Query', seeMyprofile: { __typename?: 'User', id: string, createdAt: string, updateAt: string, username: string, email: string, firstName?: string | null, lastName?: string | null, phone?: string | null } };

export type CompanyAdressFragFragment = { __typename?: 'CompanyAdress', id: string, country?: string | null, city?: string | null, streetAdress?: string | null, restAdress?: string | null, adressNum?: string | null } & { ' $fragmentName'?: 'CompanyAdressFragFragment' };

export type EquityLiabilitiesFragFragment = { __typename?: 'EquityLiabilities', id: number, value: number, assests: boolean, current: boolean, enLDesc?: string | null, enLId: string, enLName: string, enLType: string } & { ' $fragmentName'?: 'EquityLiabilitiesFragFragment' };

export type ConnectCompanyFragFragment = { __typename?: 'Company', id: string, createdAt: string, updateAt: string, companyLogo?: string | null, companyName: string, isManager: boolean, isOwned: boolean, connectedCompanyCount: number, connectingCompanyCount: number, connectedCompany?: Array<{ __typename?: 'Company', id: string, companyName: string } | null> | null, connectingCompany?: Array<{ __typename?: 'Company', id: string, companyName: string } | null> | null, companyInNout: { __typename?: 'InNout', id: number, accountNum?: string | null, budget: number, totalAssets: number } } & { ' $fragmentName'?: 'ConnectCompanyFragFragment' };

export type CompanyInNoutFragFragment = { __typename?: 'InNout', id: number, budget: number, totalAssets: number, capital: number, liabilities: number, netAssets: number, netIncome: number, totalRevenue: number, totalExpenses: number, profitMargin: number, equityRatio: number, debtRatio: number, roe: number } & { ' $fragmentName'?: 'CompanyInNoutFragFragment' };

export type IncomeExpendFragFragment = { __typename?: 'IncomeExpend', id: number, incomeTrue: boolean, infoSubtitle: string, money: number, businessDate?: string | null, paymentType?: string | null, accountCode?: string | null, businessDesc?: string | null, paymentsDone: TPaymentSwitch } & { ' $fragmentName'?: 'IncomeExpendFragFragment' };

export type ProductFragFragment = { __typename?: 'Product', id: number, itemPhoto?: string | null, itemName: string, itemCount?: number | null, itemProductId: string, itemPrice?: number | null, itemModelName?: string | null, itemDesc?: string | null, incomeExpendTypeId: number, itemType?: string | null } & { ' $fragmentName'?: 'ProductFragFragment' };

export type SalaryFragFragment = { __typename?: 'Salary', id: number, createdAt: string, updateAt: string, preTaxMonthlySalary?: number | null, childCount?: number | null, annualSalary?: number | null, earnIncomeDedution?: number | null, earnIncomeAmount?: number | null, familyDedution?: number | null, pensionInsuranceDedution?: number | null, specialIncomeDedution?: number | null, taxBase?: number | null, taxCalculate?: number | null, taxDetermined?: number | null, earnIncomeTaxCredit?: number | null, simplifiedTax?: number | null, childTax?: number | null } & { ' $fragmentName'?: 'SalaryFragFragment' };

export type UserFragFragment = { __typename?: 'User', id: string, username: string, firstName?: string | null, lastName?: string | null, email: string, phone?: string | null, avatar?: string | null, isOnVacation?: boolean | null } & { ' $fragmentName'?: 'UserFragFragment' };

export type VacationFragFragment = { __typename?: 'Vacation', id: number, createdAt: string, updateAt: string, joinCompanyDate: string, annual?: number | null, other?: number | null, useAnnualVacation?: number | null, restVacation?: number | null } & { ' $fragmentName'?: 'VacationFragFragment' };

export type SearchCompanyInNoutQueryVariables = Exact<{
  companyName: Scalars['String']['input'];
}>;


export type SearchCompanyInNoutQuery = { __typename?: 'Query', searchCompany: { __typename?: 'Company', companyInNout: (
      { __typename?: 'InNout', accountNum?: string | null, accountName: string, accountDesc?: string | null, totalAssets: number, currentAssets?: number | null, nonCurrentAssets?: number | null, currentLiabilities?: number | null, nonCurrentLiabilities?: number | null, incomeMoney?: number | null, expendMoney?: number | null, totalAssetsDesc?: Array<(
        { __typename?: 'EquityLiabilities' }
        & { ' $fragmentRefs'?: { 'EquityLiabilitiesFragFragment': EquityLiabilitiesFragFragment } }
      ) | null> | null, currentAssetsDesc?: Array<(
        { __typename?: 'EquityLiabilities' }
        & { ' $fragmentRefs'?: { 'EquityLiabilitiesFragFragment': EquityLiabilitiesFragFragment } }
      ) | null> | null, nonCurrentAssetsDesc?: Array<(
        { __typename?: 'EquityLiabilities' }
        & { ' $fragmentRefs'?: { 'EquityLiabilitiesFragFragment': EquityLiabilitiesFragFragment } }
      ) | null> | null, currentLiabilitiesDesc?: Array<(
        { __typename?: 'EquityLiabilities' }
        & { ' $fragmentRefs'?: { 'EquityLiabilitiesFragFragment': EquityLiabilitiesFragFragment } }
      ) | null> | null, nonCurrentLiabilitiesDesc?: Array<(
        { __typename?: 'EquityLiabilities' }
        & { ' $fragmentRefs'?: { 'EquityLiabilitiesFragFragment': EquityLiabilitiesFragFragment } }
      ) | null> | null, incomeModel?: Array<(
        { __typename?: 'IncomeExpend' }
        & { ' $fragmentRefs'?: { 'IncomeExpendFragFragment': IncomeExpendFragFragment } }
      ) | null> | null, expendModel?: Array<(
        { __typename?: 'IncomeExpend' }
        & { ' $fragmentRefs'?: { 'IncomeExpendFragFragment': IncomeExpendFragFragment } }
      ) | null> | null }
      & { ' $fragmentRefs'?: { 'CompanyInNoutFragFragment': CompanyInNoutFragFragment } }
    ) } };

export type SearchCompanyQueryVariables = Exact<{
  companyName: Scalars['String']['input'];
}>;


export type SearchCompanyQuery = { __typename?: 'Query', searchCompany: { __typename?: 'Company', id: string, createdAt: string, updateAt: string, companyLogo?: string | null, companyName: string, isManager: boolean, isOwned: boolean, connectedCompanyCount: number, connectingCompanyCount: number, companyAdress?: (
      { __typename?: 'CompanyAdress' }
      & { ' $fragmentRefs'?: { 'CompanyAdressFragFragment': CompanyAdressFragFragment } }
    ) | null, companyManager: Array<(
      { __typename?: 'User' }
      & { ' $fragmentRefs'?: { 'UserFragFragment': UserFragFragment } }
    ) | null>, companyOwner: (
      { __typename?: 'User' }
      & { ' $fragmentRefs'?: { 'UserFragFragment': UserFragFragment } }
    ), connectedCompany?: Array<{ __typename?: 'Company', id: string, companyName: string, companyLogo?: string | null } | null> | null, connectingCompany?: Array<{ __typename?: 'Company', id: string, companyName: string, companyLogo?: string | null } | null> | null, companyInNout: (
      { __typename?: 'InNout' }
      & { ' $fragmentRefs'?: { 'CompanyInNoutFragFragment': CompanyInNoutFragFragment } }
    ), companyProduct?: Array<(
      { __typename?: 'Product' }
      & { ' $fragmentRefs'?: { 'ProductFragFragment': ProductFragFragment } }
    ) | null> | null, companyWorker?: Array<(
      { __typename?: 'User' }
      & { ' $fragmentRefs'?: { 'UserFragFragment': UserFragFragment } }
    ) | null> | null } };

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

export type JoinUserMutationVariables = Exact<{
  username: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
}>;


export type JoinUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'ResultResponse', ok: boolean, errorMsg?: string | null } };

export type LoginUserMutationVariables = Exact<{
  password: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'LoginResultResponse', token?: string | null, ok: boolean, errorMsg?: string | null } };

export const CompanyAdressFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyAdressFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyAdress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"streetAdress"}},{"kind":"Field","name":{"kind":"Name","value":"restAdress"}},{"kind":"Field","name":{"kind":"Name","value":"adressNum"}}]}}]} as unknown as DocumentNode<CompanyAdressFragFragment, unknown>;
export const EquityLiabilitiesFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EquityLiabilitiesFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EquityLiabilities"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"assests"}},{"kind":"Field","name":{"kind":"Name","value":"current"}},{"kind":"Field","name":{"kind":"Name","value":"enLDesc"}},{"kind":"Field","name":{"kind":"Name","value":"enLId"}},{"kind":"Field","name":{"kind":"Name","value":"enLName"}},{"kind":"Field","name":{"kind":"Name","value":"enLType"}}]}}]} as unknown as DocumentNode<EquityLiabilitiesFragFragment, unknown>;
export const ConnectCompanyFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ConnectCompanyFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"companyLogo"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"isManager"}},{"kind":"Field","name":{"kind":"Name","value":"isOwned"}},{"kind":"Field","name":{"kind":"Name","value":"connectedCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"connectedCompanyCount"}},{"kind":"Field","name":{"kind":"Name","value":"connectingCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"connectingCompanyCount"}},{"kind":"Field","name":{"kind":"Name","value":"companyInNout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accountNum"}},{"kind":"Field","name":{"kind":"Name","value":"budget"}},{"kind":"Field","name":{"kind":"Name","value":"totalAssets"}}]}}]}}]} as unknown as DocumentNode<ConnectCompanyFragFragment, unknown>;
export const CompanyInNoutFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyInNoutFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InNout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"budget"}},{"kind":"Field","name":{"kind":"Name","value":"totalAssets"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"liabilities"}},{"kind":"Field","name":{"kind":"Name","value":"netAssets"}},{"kind":"Field","name":{"kind":"Name","value":"netIncome"}},{"kind":"Field","name":{"kind":"Name","value":"totalRevenue"}},{"kind":"Field","name":{"kind":"Name","value":"totalExpenses"}},{"kind":"Field","name":{"kind":"Name","value":"profitMargin"}},{"kind":"Field","name":{"kind":"Name","value":"equityRatio"}},{"kind":"Field","name":{"kind":"Name","value":"debtRatio"}},{"kind":"Field","name":{"kind":"Name","value":"roe"}}]}}]} as unknown as DocumentNode<CompanyInNoutFragFragment, unknown>;
export const IncomeExpendFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IncomeExpendFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IncomeExpend"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"incomeTrue"}},{"kind":"Field","name":{"kind":"Name","value":"infoSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"money"}},{"kind":"Field","name":{"kind":"Name","value":"businessDate"}},{"kind":"Field","name":{"kind":"Name","value":"paymentType"}},{"kind":"Field","name":{"kind":"Name","value":"accountCode"}},{"kind":"Field","name":{"kind":"Name","value":"businessDesc"}},{"kind":"Field","name":{"kind":"Name","value":"paymentsDone"}}]}}]} as unknown as DocumentNode<IncomeExpendFragFragment, unknown>;
export const ProductFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"itemPhoto"}},{"kind":"Field","name":{"kind":"Name","value":"itemName"}},{"kind":"Field","name":{"kind":"Name","value":"itemCount"}},{"kind":"Field","name":{"kind":"Name","value":"itemProductId"}},{"kind":"Field","name":{"kind":"Name","value":"itemPrice"}},{"kind":"Field","name":{"kind":"Name","value":"itemModelName"}},{"kind":"Field","name":{"kind":"Name","value":"itemDesc"}},{"kind":"Field","name":{"kind":"Name","value":"incomeExpendTypeId"}},{"kind":"Field","name":{"kind":"Name","value":"itemType"}}]}}]} as unknown as DocumentNode<ProductFragFragment, unknown>;
export const SalaryFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SalaryFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Salary"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"preTaxMonthlySalary"}},{"kind":"Field","name":{"kind":"Name","value":"childCount"}},{"kind":"Field","name":{"kind":"Name","value":"annualSalary"}},{"kind":"Field","name":{"kind":"Name","value":"earnIncomeDedution"}},{"kind":"Field","name":{"kind":"Name","value":"earnIncomeAmount"}},{"kind":"Field","name":{"kind":"Name","value":"familyDedution"}},{"kind":"Field","name":{"kind":"Name","value":"pensionInsuranceDedution"}},{"kind":"Field","name":{"kind":"Name","value":"specialIncomeDedution"}},{"kind":"Field","name":{"kind":"Name","value":"taxBase"}},{"kind":"Field","name":{"kind":"Name","value":"taxCalculate"}},{"kind":"Field","name":{"kind":"Name","value":"taxDetermined"}},{"kind":"Field","name":{"kind":"Name","value":"earnIncomeTaxCredit"}},{"kind":"Field","name":{"kind":"Name","value":"simplifiedTax"}},{"kind":"Field","name":{"kind":"Name","value":"childTax"}}]}}]} as unknown as DocumentNode<SalaryFragFragment, unknown>;
export const UserFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"isOnVacation"}}]}}]} as unknown as DocumentNode<UserFragFragment, unknown>;
export const VacationFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VacationFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Vacation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"joinCompanyDate"}},{"kind":"Field","name":{"kind":"Name","value":"annual"}},{"kind":"Field","name":{"kind":"Name","value":"other"}},{"kind":"Field","name":{"kind":"Name","value":"useAnnualVacation"}},{"kind":"Field","name":{"kind":"Name","value":"restVacation"}}]}}]} as unknown as DocumentNode<VacationFragFragment, unknown>;
export const EditInNoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editInNout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountNum"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountDesc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editInNout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}}},{"kind":"Argument","name":{"kind":"Name","value":"accountNum"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountNum"}}},{"kind":"Argument","name":{"kind":"Name","value":"accountName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountName"}}},{"kind":"Argument","name":{"kind":"Name","value":"accountDesc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountDesc"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}}]}}]}}]} as unknown as DocumentNode<EditInNoutMutation, EditInNoutMutationVariables>;
export const CreateEnLDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEnL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enLId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enLName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enLType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"current"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assests"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"value"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enLDesc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEnL"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}}},{"kind":"Argument","name":{"kind":"Name","value":"enLId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enLId"}}},{"kind":"Argument","name":{"kind":"Name","value":"enLName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enLName"}}},{"kind":"Argument","name":{"kind":"Name","value":"enLType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enLType"}}},{"kind":"Argument","name":{"kind":"Name","value":"current"},"value":{"kind":"Variable","name":{"kind":"Name","value":"current"}}},{"kind":"Argument","name":{"kind":"Name","value":"assests"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assests"}}},{"kind":"Argument","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}},{"kind":"Argument","name":{"kind":"Name","value":"enLDesc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enLDesc"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}}]}}]}}]} as unknown as DocumentNode<CreateEnLMutation, CreateEnLMutationVariables>;
export const DeleteEnlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteEnl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enLId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteEnL"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"enLId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enLId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}}]}}]}}]} as unknown as DocumentNode<DeleteEnlMutation, DeleteEnlMutationVariables>;
export const SeeEnlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"seeEnl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seeEnLId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seeEnL"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seeEnLId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"enLId"}},{"kind":"Field","name":{"kind":"Name","value":"enLName"}},{"kind":"Field","name":{"kind":"Name","value":"enLType"}},{"kind":"Field","name":{"kind":"Name","value":"enLDesc"}},{"kind":"Field","name":{"kind":"Name","value":"current"}},{"kind":"Field","name":{"kind":"Name","value":"assests"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<SeeEnlQuery, SeeEnlQueryVariables>;
export const EditEnLDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editEnL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enLId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enLName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enLType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enLDesc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"current"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assests"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"value"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editEnL"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}}},{"kind":"Argument","name":{"kind":"Name","value":"enLId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enLId"}}},{"kind":"Argument","name":{"kind":"Name","value":"enLName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enLName"}}},{"kind":"Argument","name":{"kind":"Name","value":"enLType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enLType"}}},{"kind":"Argument","name":{"kind":"Name","value":"enLDesc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enLDesc"}}},{"kind":"Argument","name":{"kind":"Name","value":"current"},"value":{"kind":"Variable","name":{"kind":"Name","value":"current"}}},{"kind":"Argument","name":{"kind":"Name","value":"assests"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assests"}}},{"kind":"Argument","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}}]}}]}}]} as unknown as DocumentNode<EditEnLMutation, EditEnLMutationVariables>;
export const MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemProductId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentsDone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TPaymentSwitch"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemModelName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemPhoto"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemCount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemPrice"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemDesc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"incomeTrue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"businessDesc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"itemProductId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemProductId"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemName"}}},{"kind":"Argument","name":{"kind":"Name","value":"companyName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}}},{"kind":"Argument","name":{"kind":"Name","value":"paymentsDone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentsDone"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemModelName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemModelName"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemPhoto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemPhoto"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemType"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemCount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemCount"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemPrice"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemPrice"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemDesc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemDesc"}}},{"kind":"Argument","name":{"kind":"Name","value":"incomeTrue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"incomeTrue"}}},{"kind":"Argument","name":{"kind":"Name","value":"paymentType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentType"}}},{"kind":"Argument","name":{"kind":"Name","value":"accountCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"businessDesc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"businessDesc"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}}]}}]}}]} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;
export const CompanyInNoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CompanyInNout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyProduct"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductFrag"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"itemPhoto"}},{"kind":"Field","name":{"kind":"Name","value":"itemName"}},{"kind":"Field","name":{"kind":"Name","value":"itemCount"}},{"kind":"Field","name":{"kind":"Name","value":"itemProductId"}},{"kind":"Field","name":{"kind":"Name","value":"itemPrice"}},{"kind":"Field","name":{"kind":"Name","value":"itemModelName"}},{"kind":"Field","name":{"kind":"Name","value":"itemDesc"}},{"kind":"Field","name":{"kind":"Name","value":"incomeExpendTypeId"}},{"kind":"Field","name":{"kind":"Name","value":"itemType"}}]}}]} as unknown as DocumentNode<CompanyInNoutQuery, CompanyInNoutQueryVariables>;
export const DeleteProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProductId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProductId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}}]}}]}}]} as unknown as DocumentNode<DeleteProductMutation, DeleteProductMutationVariables>;
export const SeeDetailProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"seeDetailProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seeProductId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seeProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seeProductId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"itemProductId"}},{"kind":"Field","name":{"kind":"Name","value":"itemName"}},{"kind":"Field","name":{"kind":"Name","value":"itemModelName"}},{"kind":"Field","name":{"kind":"Name","value":"itemPhoto"}},{"kind":"Field","name":{"kind":"Name","value":"itemType"}},{"kind":"Field","name":{"kind":"Name","value":"itemCount"}},{"kind":"Field","name":{"kind":"Name","value":"itemPrice"}},{"kind":"Field","name":{"kind":"Name","value":"itemDesc"}},{"kind":"Field","name":{"kind":"Name","value":"incomeExpend"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IncomeExpendFrag"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IncomeExpendFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IncomeExpend"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"incomeTrue"}},{"kind":"Field","name":{"kind":"Name","value":"infoSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"money"}},{"kind":"Field","name":{"kind":"Name","value":"businessDate"}},{"kind":"Field","name":{"kind":"Name","value":"paymentType"}},{"kind":"Field","name":{"kind":"Name","value":"accountCode"}},{"kind":"Field","name":{"kind":"Name","value":"businessDesc"}},{"kind":"Field","name":{"kind":"Name","value":"paymentsDone"}}]}}]} as unknown as DocumentNode<SeeDetailProductQuery, SeeDetailProductQueryVariables>;
export const EditProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editProductId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemProductId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemModelName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemCount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemPrice"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemDesc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"incomeTrue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"businessDesc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentsDone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TPaymentSwitch"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editProductId"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemProductId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemProductId"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemModelName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemModelName"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemName"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemType"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemCount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemCount"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemPrice"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemPrice"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemDesc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemDesc"}}},{"kind":"Argument","name":{"kind":"Name","value":"incomeTrue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"incomeTrue"}}},{"kind":"Argument","name":{"kind":"Name","value":"paymentType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentType"}}},{"kind":"Argument","name":{"kind":"Name","value":"accountCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"businessDesc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"businessDesc"}}},{"kind":"Argument","name":{"kind":"Name","value":"paymentsDone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentsDone"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}}]}}]}}]} as unknown as DocumentNode<EditProductMutation, EditProductMutationVariables>;
export const SearchCompanyProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchCompanyProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyProduct"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductFrag"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"itemPhoto"}},{"kind":"Field","name":{"kind":"Name","value":"itemName"}},{"kind":"Field","name":{"kind":"Name","value":"itemCount"}},{"kind":"Field","name":{"kind":"Name","value":"itemProductId"}},{"kind":"Field","name":{"kind":"Name","value":"itemPrice"}},{"kind":"Field","name":{"kind":"Name","value":"itemModelName"}},{"kind":"Field","name":{"kind":"Name","value":"itemDesc"}},{"kind":"Field","name":{"kind":"Name","value":"incomeExpendTypeId"}},{"kind":"Field","name":{"kind":"Name","value":"itemType"}}]}}]} as unknown as DocumentNode<SearchCompanyProductQuery, SearchCompanyProductQueryVariables>;
export const SeeCompanyWokersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"seeCompanyWokers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seeCompanyWorker"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFrag"}},{"kind":"Field","name":{"kind":"Name","value":"vacation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VacationFrag"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"salary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SalaryFrag"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"isOnVacation"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VacationFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Vacation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"joinCompanyDate"}},{"kind":"Field","name":{"kind":"Name","value":"annual"}},{"kind":"Field","name":{"kind":"Name","value":"other"}},{"kind":"Field","name":{"kind":"Name","value":"useAnnualVacation"}},{"kind":"Field","name":{"kind":"Name","value":"restVacation"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SalaryFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Salary"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"preTaxMonthlySalary"}},{"kind":"Field","name":{"kind":"Name","value":"childCount"}},{"kind":"Field","name":{"kind":"Name","value":"annualSalary"}},{"kind":"Field","name":{"kind":"Name","value":"earnIncomeDedution"}},{"kind":"Field","name":{"kind":"Name","value":"earnIncomeAmount"}},{"kind":"Field","name":{"kind":"Name","value":"familyDedution"}},{"kind":"Field","name":{"kind":"Name","value":"pensionInsuranceDedution"}},{"kind":"Field","name":{"kind":"Name","value":"specialIncomeDedution"}},{"kind":"Field","name":{"kind":"Name","value":"taxBase"}},{"kind":"Field","name":{"kind":"Name","value":"taxCalculate"}},{"kind":"Field","name":{"kind":"Name","value":"taxDetermined"}},{"kind":"Field","name":{"kind":"Name","value":"earnIncomeTaxCredit"}},{"kind":"Field","name":{"kind":"Name","value":"simplifiedTax"}},{"kind":"Field","name":{"kind":"Name","value":"childTax"}}]}}]} as unknown as DocumentNode<SeeCompanyWokersQuery, SeeCompanyWokersQueryVariables>;
export const CreateVacationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createVacation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"annual"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"joinCompanyDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createVacation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"companyName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}}},{"kind":"Argument","name":{"kind":"Name","value":"annual"},"value":{"kind":"Variable","name":{"kind":"Name","value":"annual"}}},{"kind":"Argument","name":{"kind":"Name","value":"joinCompanyDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"joinCompanyDate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}}]}}]}}]} as unknown as DocumentNode<CreateVacationMutation, CreateVacationMutationVariables>;
export const RegistWorkerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"registWorker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registWorker"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"companyName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subId"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}}]}}]}}]} as unknown as DocumentNode<RegistWorkerMutation, RegistWorkerMutationVariables>;
export const SeeMyprofileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SeeMyprofile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seeMyprofile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}}]}}]} as unknown as DocumentNode<SeeMyprofileQuery, SeeMyprofileQueryVariables>;
export const SearchCompanyInNoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchCompanyInNout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyInNout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyInNoutFrag"}},{"kind":"Field","name":{"kind":"Name","value":"accountNum"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountDesc"}},{"kind":"Field","name":{"kind":"Name","value":"totalAssets"}},{"kind":"Field","name":{"kind":"Name","value":"totalAssetsDesc"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EquityLiabilitiesFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAssets"}},{"kind":"Field","name":{"kind":"Name","value":"currentAssetsDesc"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EquityLiabilitiesFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nonCurrentAssets"}},{"kind":"Field","name":{"kind":"Name","value":"nonCurrentAssetsDesc"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EquityLiabilitiesFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentLiabilities"}},{"kind":"Field","name":{"kind":"Name","value":"currentLiabilitiesDesc"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EquityLiabilitiesFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nonCurrentLiabilities"}},{"kind":"Field","name":{"kind":"Name","value":"nonCurrentLiabilitiesDesc"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EquityLiabilitiesFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"incomeMoney"}},{"kind":"Field","name":{"kind":"Name","value":"incomeModel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IncomeExpendFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"expendMoney"}},{"kind":"Field","name":{"kind":"Name","value":"expendModel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IncomeExpendFrag"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyInNoutFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InNout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"budget"}},{"kind":"Field","name":{"kind":"Name","value":"totalAssets"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"liabilities"}},{"kind":"Field","name":{"kind":"Name","value":"netAssets"}},{"kind":"Field","name":{"kind":"Name","value":"netIncome"}},{"kind":"Field","name":{"kind":"Name","value":"totalRevenue"}},{"kind":"Field","name":{"kind":"Name","value":"totalExpenses"}},{"kind":"Field","name":{"kind":"Name","value":"profitMargin"}},{"kind":"Field","name":{"kind":"Name","value":"equityRatio"}},{"kind":"Field","name":{"kind":"Name","value":"debtRatio"}},{"kind":"Field","name":{"kind":"Name","value":"roe"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EquityLiabilitiesFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EquityLiabilities"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"assests"}},{"kind":"Field","name":{"kind":"Name","value":"current"}},{"kind":"Field","name":{"kind":"Name","value":"enLDesc"}},{"kind":"Field","name":{"kind":"Name","value":"enLId"}},{"kind":"Field","name":{"kind":"Name","value":"enLName"}},{"kind":"Field","name":{"kind":"Name","value":"enLType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IncomeExpendFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IncomeExpend"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"incomeTrue"}},{"kind":"Field","name":{"kind":"Name","value":"infoSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"money"}},{"kind":"Field","name":{"kind":"Name","value":"businessDate"}},{"kind":"Field","name":{"kind":"Name","value":"paymentType"}},{"kind":"Field","name":{"kind":"Name","value":"accountCode"}},{"kind":"Field","name":{"kind":"Name","value":"businessDesc"}},{"kind":"Field","name":{"kind":"Name","value":"paymentsDone"}}]}}]} as unknown as DocumentNode<SearchCompanyInNoutQuery, SearchCompanyInNoutQueryVariables>;
export const SearchCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"companyLogo"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"isManager"}},{"kind":"Field","name":{"kind":"Name","value":"isOwned"}},{"kind":"Field","name":{"kind":"Name","value":"companyAdress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyAdressFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"companyManager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"companyOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"connectedCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"companyLogo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"connectedCompanyCount"}},{"kind":"Field","name":{"kind":"Name","value":"connectingCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"companyLogo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"connectingCompanyCount"}},{"kind":"Field","name":{"kind":"Name","value":"companyInNout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyInNoutFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"companyProduct"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"companyWorker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFrag"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyAdressFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyAdress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"streetAdress"}},{"kind":"Field","name":{"kind":"Name","value":"restAdress"}},{"kind":"Field","name":{"kind":"Name","value":"adressNum"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"isOnVacation"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyInNoutFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InNout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"budget"}},{"kind":"Field","name":{"kind":"Name","value":"totalAssets"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"liabilities"}},{"kind":"Field","name":{"kind":"Name","value":"netAssets"}},{"kind":"Field","name":{"kind":"Name","value":"netIncome"}},{"kind":"Field","name":{"kind":"Name","value":"totalRevenue"}},{"kind":"Field","name":{"kind":"Name","value":"totalExpenses"}},{"kind":"Field","name":{"kind":"Name","value":"profitMargin"}},{"kind":"Field","name":{"kind":"Name","value":"equityRatio"}},{"kind":"Field","name":{"kind":"Name","value":"debtRatio"}},{"kind":"Field","name":{"kind":"Name","value":"roe"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"itemPhoto"}},{"kind":"Field","name":{"kind":"Name","value":"itemName"}},{"kind":"Field","name":{"kind":"Name","value":"itemCount"}},{"kind":"Field","name":{"kind":"Name","value":"itemProductId"}},{"kind":"Field","name":{"kind":"Name","value":"itemPrice"}},{"kind":"Field","name":{"kind":"Name","value":"itemModelName"}},{"kind":"Field","name":{"kind":"Name","value":"itemDesc"}},{"kind":"Field","name":{"kind":"Name","value":"incomeExpendTypeId"}},{"kind":"Field","name":{"kind":"Name","value":"itemType"}}]}}]} as unknown as DocumentNode<SearchCompanyQuery, SearchCompanyQueryVariables>;
export const EditUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"avatar"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"Argument","name":{"kind":"Name","value":"avatar"},"value":{"kind":"Variable","name":{"kind":"Name","value":"avatar"}}},{"kind":"Argument","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}},{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<EditUserMutation, EditUserMutationVariables>;
export const OwnCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ownCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seeMyprofile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ownCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ConnectCompanyFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hasCompanyCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ConnectCompanyFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"companyLogo"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"isManager"}},{"kind":"Field","name":{"kind":"Name","value":"isOwned"}},{"kind":"Field","name":{"kind":"Name","value":"connectedCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"connectedCompanyCount"}},{"kind":"Field","name":{"kind":"Name","value":"connectingCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"connectingCompanyCount"}},{"kind":"Field","name":{"kind":"Name","value":"companyInNout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accountNum"}},{"kind":"Field","name":{"kind":"Name","value":"budget"}},{"kind":"Field","name":{"kind":"Name","value":"totalAssets"}}]}}]}}]} as unknown as DocumentNode<OwnCompanyQuery, OwnCompanyQueryVariables>;
export const ManageCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"manageCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seeMyprofile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"manageCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ConnectCompanyFrag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"manageCompanyCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ConnectCompanyFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"companyLogo"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"isManager"}},{"kind":"Field","name":{"kind":"Name","value":"isOwned"}},{"kind":"Field","name":{"kind":"Name","value":"connectedCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"connectedCompanyCount"}},{"kind":"Field","name":{"kind":"Name","value":"connectingCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"connectingCompanyCount"}},{"kind":"Field","name":{"kind":"Name","value":"companyInNout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accountNum"}},{"kind":"Field","name":{"kind":"Name","value":"budget"}},{"kind":"Field","name":{"kind":"Name","value":"totalAssets"}}]}}]}}]} as unknown as DocumentNode<ManageCompanyQuery, ManageCompanyQueryVariables>;
export const JoinUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"joinUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}},{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}}]}}]}}]} as unknown as DocumentNode<JoinUserMutation, JoinUserMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;