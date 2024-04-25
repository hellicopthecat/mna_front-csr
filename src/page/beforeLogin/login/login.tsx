import Container from "../../../components/container";
import {AnchorTheme, BtnTheme} from "../../../components/btnTheme";
import {useForm} from "react-hook-form";
import {
  FormHeaderCont,
  FormWrapper,
  LoginTypeBtn,
  LoginTypeCont,
} from "./login.style";
import useLoginMutate from "./loginHook";

import AuthInput from "../../../components/auth/authInput";
import {ILoginFormProps} from "../../../types/types";
import {useLocation} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hooks/storeHook";
import {setTrue, setfalse} from "../../../redux/loginTypeSlice";

const Login = () => {
  //state
  const isSelected = useAppSelector((state) =>
    state.isSelect.isSelect.valueOf()
  );
  const dispatch = useAppDispatch();

  //other hooks
  const locate = useLocation();
  //form
  const {
    register,
    handleSubmit,
    getValues,
    formState: {errors},
    reset,
  } = useForm<ILoginFormProps>({
    defaultValues: {
      username: locate.state?.username || "",
      email: locate.state?.email || "",
      password: locate.state?.password || "",
    },
  });
  //graphql
  const {handleLogin} = useLoginMutate();
  //fn
  const onSubmit = () => {
    const {username, email, password} = getValues();
    if (username) {
      handleLogin({username, password});
      reset({username: "", email: "", password: ""});
    }
    if (email) {
      handleLogin({email, password});
      reset({username: "", email: "", password: ""});
    }
  };

  return (
    <Container>
      <div
        style={{
          backgroundColor: "cornflowerblue",
          width: "100%",
          height: "100%",
          flex: 2,
        }}
      />
      <FormWrapper>
        <FormHeaderCont>
          <h2>CONNECT COMPANY</h2>
          <h3>환영합니다.</h3>
        </FormHeaderCont>
        <LoginTypeCont>
          <LoginTypeBtn
            onClick={() => dispatch(setTrue())}
            $isselect={isSelected}
          >
            ID
          </LoginTypeBtn>
          <LoginTypeBtn
            onClick={() => dispatch(setfalse())}
            $isselect={!isSelected}
          >
            EMAIL
          </LoginTypeBtn>
        </LoginTypeCont>
        <form onSubmit={handleSubmit(onSubmit)}>
          <legend hidden>로그인</legend>
          <AuthInput
            register={register}
            inputName="username"
            labelTxt="아이디"
            placeHolder="ID"
            errorMsg={errors.username?.message}
          />
          <AuthInput
            register={register}
            inputName="password"
            labelTxt="비밀번호"
            placeHolder="PASSWORD"
            errorMsg={errors.password?.message}
          />
          <BtnTheme type="submit" text="로그인" handleClick={onSubmit} />
        </form>
        <AnchorTheme href="/join" text="회원가입" />
      </FormWrapper>
    </Container>
  );
};
export default Login;
