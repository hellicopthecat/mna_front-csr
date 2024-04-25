import {useForm} from "react-hook-form";
import AuthInput from "../../../components/auth/authInput";
import {AnchorTheme, BtnTheme} from "../../../components/btnTheme";
import Container from "../../../components/container";
import {IJoinFormProps} from "../../../types/types";
import {JoinWrapper} from "./join.style";
import useJoinUser from "./joinHook";

const Join = () => {
  //form
  const {
    register,
    handleSubmit,
    getValues,
    formState: {errors},
    setError,
    reset,
  } = useForm<IJoinFormProps>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      checkPass: "",
      firstName: "",
      lastName: "",
      phone: "",
    },
  });
  //graphql
  const {handleCreateAccout} = useJoinUser();
  //fn
  const onSubmit = async () => {
    const {username, email, password, checkPass, firstName, lastName, phone} =
      getValues();
    if (password !== checkPass) {
      setError("password", {message: "비밀번호가 동일하지 않습니다."});
      setError("checkPass", {message: "비밀번호가 동일하지 않습니다."});
      return null;
    }
    await handleCreateAccout({
      username,
      email,
      password,
      checkPass,
      firstName,
      lastName,
      phone,
    });
    reset({
      username: "",
      email: "",
      password: "",
      checkPass: "",
      firstName: "",
      lastName: "",
      phone: "",
    });
  };
  return (
    <Container>
      <JoinWrapper>
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <legend hidden>회원가입</legend>
          <AuthInput
            register={register}
            inputName="username"
            labelTxt="아이디"
            placeHolder="ID"
            errorMsg={errors.username?.message}
          />
          <AuthInput
            register={register}
            inputName="email"
            labelTxt="이메일"
            placeHolder="E-MAIL"
            errorMsg={errors.email?.message}
          />
          <AuthInput
            register={register}
            inputName="phone"
            labelTxt="휴대전화"
            placeHolder="PHONE NUMBER"
            errorMsg={errors.phone?.message}
          />
          <AuthInput
            register={register}
            inputName="password"
            labelTxt="비밀번호"
            placeHolder="PASSWORD"
            errorMsg={errors.password?.message}
          />
          <AuthInput
            register={register}
            inputName="checkPass"
            labelTxt="비밀번호 확인"
            placeHolder="CONFIRM PASSWORD"
            errorMsg={errors.checkPass?.message}
          />
          <AuthInput
            register={register}
            inputName="firstName"
            labelTxt="이름(성)"
            placeHolder="FIRST NAME"
            errorMsg={errors.firstName?.message}
          />
          <AuthInput
            register={register}
            inputName="lastName"
            labelTxt="이름"
            placeHolder="LAST NAME"
            errorMsg={errors.lastName?.message}
          />
          <BtnTheme
            text="회원가입"
            type="submit"
            handleClick={handleSubmit(onSubmit)}
          />
        </form>
        <AnchorTheme href="/login" text="로그인" />
      </JoinWrapper>
    </Container>
  );
};

export default Join;
