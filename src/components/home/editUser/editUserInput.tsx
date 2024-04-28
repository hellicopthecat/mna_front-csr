import {FieldValues, UseFormRegister} from "react-hook-form";

type TypeInputName = "password" | "firstName" | "lastName" | "phone" | "avatar";
interface IEditUserProps {
  register: UseFormRegister<FieldValues>;
  inputName: TypeInputName;
  placeHolder: string;
  labelTxt: string;
  defaultValue?: string;
}
const EditUserInput = ({
  register,
  inputName,
  placeHolder,
  labelTxt,
  defaultValue,
}: IEditUserProps) => {
  return (
    <div>
      <label htmlFor={inputName}>{labelTxt}</label>
      <input
        {...register(inputName)}
        id={inputName}
        name={inputName}
        type="text"
        placeholder={placeHolder}
        defaultValue={defaultValue}
      />
    </div>
  );
};
export default EditUserInput;
