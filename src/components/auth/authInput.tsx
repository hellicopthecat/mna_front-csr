import styled from "styled-components";
import {IAuthInputProps} from "../../types/types";
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const LabelNInput = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Label = styled.label`
  min-width: 100px;
`;
const Input = styled.input`
  padding: 10px 20px;
  background-color: inherit;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 20px;
  color: ${(props) => props.theme.txtColor};
  *::placeholder {
  }
`;
const ErrorMsg = styled.span`
  color: tomato;
`;
const AuthInput = ({
  register,
  labelTxt,
  inputName,
  placeHolder,
  errorMsg,
}: IAuthInputProps) => {
  //fn
  const requiredMaker = () => {
    if (inputName === "username") {
      return "아이디를 입력하세요";
    }
    if (inputName === "email") {
      return "이메일을 입력하세요";
    }
    if (inputName === "password") {
      return "비밀번호를 입력하세요";
    }
  };
  const minLength = {
    value: inputName === "username" ? 4 : inputName === "password" ? 4 : 0,
    message:
      inputName === "username"
        ? "4자이상 작성하시오"
        : inputName === "password"
        ? "4자이상 작성하시오"
        : "0",
  };
  return (
    <InputWrapper>
      <LabelNInput>
        <Label htmlFor={inputName}>{labelTxt}</Label>
        <Input
          {...register(inputName, {
            required: requiredMaker(),
            minLength: {
              value: minLength.value,
              message: minLength.message,
            },
          })}
          name={inputName}
          id={inputName}
          type="text"
          placeholder={placeHolder}
        />
      </LabelNInput>
      <ErrorMsg>{errorMsg}</ErrorMsg>
    </InputWrapper>
  );
};
export default AuthInput;
