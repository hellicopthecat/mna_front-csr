import {UseFormRegister} from "react-hook-form";
import {TPaymentSwitch, TVacation} from "../libs/__generated__/graphql";
//login & join
type AuthInputName =
  | "username"
  | "email"
  | "password"
  | "checkPass"
  | "firstName"
  | "lastName"
  | "phone";
export interface ILoginFormProps {
  username?: string;
  email?: string;
  password?: string;
}
export interface IJoinFormProps extends ILoginFormProps {
  checkPass?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
}
export interface IAuthInputProps {
  register: UseFormRegister<IJoinFormProps>;
  labelTxt: string;
  inputName: AuthInputName;
  placeHolder: string;
  errorMsg?: string;
}

//edit User
export interface IEditUserInputProps {
  password?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  userId?: string;
}
//edit companyAdress
export interface IEditCompanyAdress {
  id: string;
  companyId: number;
  country: string;
  city: string;
  streetAdress: string;
  restAdress: string;
  adressNum: string;
}
// edit Asset
export interface IEditAssetProps {
  enlDescId?: number;
  enLId: string;
  enLName: string;
  enLType: string;
  enLDesc: string;
  current: "CURRENT" | "NONCURRENT";
  assests: "ASSET" | "NONASSET";
  value: number;
}

//edit INNOUT
export interface IEditInNoutProps {
  editInNoutId: number;
  accountID?: number;
  accountName?: string;
  accountNum?: string;
  accountDesc?: string;
  budget?: string;
}

//create INNOUT
export interface ICreateAssetProps {
  companyId: number;
  enLId: string;
  enLName: string;
  enLType: string;
  enLDesc: string;
  current: "CURRENT" | "NONCURRENT";
  assests: "ASSET" | "NONASSET";
  value: number;
}

//create Product
export interface ICreateProduct {
  id: number;
  itemProductId: string;
  itemName: string;
  itemModelName?: string;
  itemPhoto?: string;
  itemType?: string;
  itemCount?: number;
  itemPrice?: number;
  itemDesc?: string;
  incomeTrue?: "INCOME" | "EXPEND";
  paymentType?: string;
  accountCode?: string;
  businessDesc?: string;
  paymentsDone?: TPaymentSwitch;
}
export interface IEditProduct {
  id?: number;
  incomeExpendId?: number;
  itemProductId?: string;
  itemModelName?: string;
  itemName?: string;
  itemPhoto?: string;
  itemType?: string;
  itemCount?: number;
  itemPrice?: number;
  itemDesc?: string;
  incomeTrue?: "income" | "expend";
  paymentType?: string;
  accountCode?: string;
  businessDesc?: string;
  paymentsDone?: TPaymentSwitch;
}

export interface IWorkersProps {
  worker?: [
    {
      id: number;
      username: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      avatar: string;
      isOnVacation: boolean;
    }
  ];
  vacation?: [
    {
      id: number;
      joinCompanyDate: string;
      annual: number;
      other: number;
      useAnnualVacation: number;
      restVacation: number;
    }
  ];
  salary?: [
    {
      id: number;
      beforeTaxMonthlySalary?: number;
      afterTaxMonthlySalary?: number;
      annualSalary?: number;
    }
  ];
}

//Create Vacation
export interface ICreateVacation {
  other?: string;
  joinCompanyDate?: string;
}
export interface ICreateSalary {
  id: number;
  companyName: string;
  familyCount: number;
  preTaxMonthlySalary: number;
  childCount: number;
}

export interface IVacationProps {
  id: number;
  joinCompanyDate: string;
  annual: number;
  other: number;
  useAnnualVacation: number;
  restVacation: number;
}

export interface ISalaryProps {
  id: number;
  preTaxMonthlySalary: number;
  childCount: number;
  annualSalary: number;
  earnIncomeDedution: number;
  earnIncomeAmount: number;
  familyDedution: number;
  pensionInsuranceDedution: number;
  specialIncomeDedution: number;
  taxBase: number;
  taxCalculate: number;
  taxDetermined: number;
  earnIncomeTaxCredit: number;
  simplifiedTax: number;
  childTax: number;
}
export interface IEditVacation {
  companyId: number;
  vacationId: number;
  joinCompanyDate?: string;
  other?: number;
}

export interface ICreateVacationDescProps {
  id: number;
  day: number;
  vacationType: TVacation;
  description: string;
}
