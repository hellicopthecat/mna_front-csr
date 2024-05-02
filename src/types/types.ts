import {UseFormRegister} from "react-hook-form";
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
