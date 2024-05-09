import {UseFormRegister} from "react-hook-form";
import {TPaymentSwitch} from "../libs/__generated__/graphql";
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
// edit Asset
export interface IEditAssetProps {
  companyName: string;
  inNoutId?: number;
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
  companyName: string;
  accountID?: number;
  accountName?: string;
  accountNum?: string;
  accountDesc?: string;
  budget?: string;
}

//create INNOUT
export interface ICreateAssetProps {
  companyName: string;
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
  companyName: string;
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
