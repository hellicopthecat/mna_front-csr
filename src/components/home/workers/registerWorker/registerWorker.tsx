import {useNavigate, useParams} from "react-router-dom";
import ModalWrapper from "../../../shareComp/modalWrapper";
import {IParamID} from "../../../../types/routerType";
import {
  RegisterWorkerBtns,
  RegisterWorkerForm,
  RegisterWorkerInput,
} from "./registerWorker.style";
import {useForm} from "react-hook-form";
import {BtnTheme} from "../../../btnTheme";
import useRegisterWorker from "./registerWorkerHook";

const RegisterWorker = () => {
  //hook
  const param = useParams<keyof IParamID>();
  const navigate = useNavigate();
  const {handleRegistWorker} = useRegisterWorker();
  const {register, handleSubmit, getValues} = useForm({
    defaultValues: {username: ""},
  });
  //fc
  const onSubmit = () => {
    const {username} = getValues();
    handleRegistWorker({
      username,
      companyId: Number(param.id),
    });
  };
  const goBack = () => navigate(`/company/${param.id}/workers`);
  return (
    <ModalWrapper goBack={goBack}>
      <RegisterWorkerForm onSubmit={handleSubmit(onSubmit)}>
        <legend>직원등록</legend>
        <RegisterWorkerInput>
          <label htmlFor="username">등록할 아이디</label>
          <input {...register("username")} id="username" type="text" />
        </RegisterWorkerInput>
        <RegisterWorkerBtns>
          <BtnTheme
            text="확인"
            handleClick={handleSubmit(onSubmit)}
            width="50px"
            height="30px"
            fontSize="14px"
          />
          <BtnTheme
            text="취소"
            handleClick={goBack}
            width="50px"
            height="30px"
            fontSize="14px"
          />
        </RegisterWorkerBtns>
      </RegisterWorkerForm>
    </ModalWrapper>
  );
};
export default RegisterWorker;
