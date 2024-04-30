import {FieldValues, UseFormRegister} from "react-hook-form";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  min-width: 400px;
`;
const Label = styled.label`
  width: 150px;
  font-weight: 600;
`;
const Input = styled.input`
  background-color: inherit;
  padding: 10px 15px;
  border: none;
  color: ${(props) => props.theme.txtColor};
  border-bottom: 1px solid ${(props) => props.theme.secondary};
`;
type TypeInputName = "password" | "firstName" | "lastName" | "phone" | "avatar";
interface IEditUserProps {
  register: UseFormRegister<FieldValues[TypeInputName]>;
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
    <InputWrapper>
      <Label htmlFor={inputName}>{labelTxt}</Label>
      <Input
        {...register(inputName)}
        id={inputName}
        name={inputName}
        type="text"
        placeholder={placeHolder}
        defaultValue={defaultValue}
      />
    </InputWrapper>
  );
};
export default EditUserInput;
