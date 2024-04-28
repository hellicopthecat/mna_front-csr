import {EditUserWrapper} from "./editUser.style";
import {useForm} from "react-hook-form";
import EditUserInput from "../../../../components/home/editUser/editUserInput";
import {BtnTheme} from "../../../../components/btnTheme";
import useUser from "../../../../hooks/useUser";

const EditUser = () => {
  const {data, loading} = useUser();
  const userData = data?.seeMyprofile;
  const {register, handleSubmit} = useForm();
  const onSubmit = () => {};
  if (loading) {
    return <div>loading</div>;
  }
  return (
    <EditUserWrapper>
      <h2>회원정보수정</h2>
      <form>
        <legend hidden>회원정보수정</legend>
        <EditUserInput
          register={register}
          inputName="firstName"
          labelTxt="이름(성)"
          placeHolder={
            userData?.firstName ? userData.firstName : "이름(성)을 입력해주세요"
          }
          defaultValue={userData?.firstName + ""}
        />
        <EditUserInput
          register={register}
          inputName="lastName"
          labelTxt="이름"
          placeHolder={userData?.lastName || "이름을 입력해주세요"}
          defaultValue={userData?.lastName + ""}
        />
        <EditUserInput
          register={register}
          inputName="phone"
          labelTxt="휴대전화"
          placeHolder={userData?.phone || "전화번호를 입력해주세요"}
          defaultValue={userData?.phone + ""}
        />
        <EditUserInput
          register={register}
          inputName="password"
          labelTxt="비밀번호"
          placeHolder="비밀번호를 입력해주세요"
        />
        <BtnTheme text="변경하기" />
      </form>
    </EditUserWrapper>
  );
};

export default EditUser;
