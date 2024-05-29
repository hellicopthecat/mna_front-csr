import {useNavigate, useParams} from "react-router-dom";
import ModalWrapper from "../../../shareComp/modalWrapper";
import {IParamID} from "../../../../types/routerType";
import {
  UsingVacationCont,
  UsingVacationForm,
  UsingVacationInput,
} from "./usingVacation.style";
import {BtnTheme} from "../../../btnTheme";
import {useForm} from "react-hook-form";
import useUsingVacation from "./usingVacationHook";
import {ICreateVacationDescProps} from "../../../../types/types";
import {TVacation} from "../../../../libs/__generated__/graphql";

const UsingVacation = () => {
  const {handleUsingVacation} = useUsingVacation();
  const param = useParams<keyof IParamID>();
  const navigate = useNavigate();
  const {register, handleSubmit, getValues} = useForm<ICreateVacationDescProps>(
    {
      defaultValues: {
        id: Number(param.vacationID),
        day: 1,
        vacationType: TVacation.Annual,
        description: "",
      },
    }
  );
  const onSubmit = () => {
    const {id, day, vacationType, description} = getValues();
    handleUsingVacation({id, day, vacationType, description});
  };
  const goBack = () =>
    navigate(
      `/company/${param.id}/workers/${param.userID}/detail-vacation/${param.vacationID}`
    );
  return (
    <ModalWrapper goBack={goBack}>
      <UsingVacationCont>
        <UsingVacationForm onSubmit={handleSubmit(onSubmit)}>
          <legend>휴가생성</legend>
          <UsingVacationInput>
            <label htmlFor="vDay">휴가일수</label>
            <input
              {...register("day")}
              id="vDay"
              type="text"
              placeholder="휴가일수"
            />
          </UsingVacationInput>
          <UsingVacationInput>
            <label htmlFor="vType">휴가종류</label>
            <select {...register("vacationType")} id="vType">
              <option value={TVacation.Annual}>연차</option>
              <option value={TVacation.Half}>반차</option>
              <option value={TVacation.Sick}>병가</option>
              <option value={TVacation.Other}>기타휴가</option>
              <option value={TVacation.Othersick}>기타병가</option>
              <option value={TVacation.Nonpaid}>무급휴가</option>
            </select>
          </UsingVacationInput>
          <UsingVacationInput>
            <label htmlFor="vDesc">휴가설명</label>
            <textarea
              {...register("description")}
              id="vDesc"
              placeholder="휴가설명"
            />
          </UsingVacationInput>
        </UsingVacationForm>
        <BtnTheme
          text="확인"
          width="30px"
          height="20px"
          fontSize="12px"
          handleClick={handleSubmit(onSubmit)}
        />
        <BtnTheme
          text="취소"
          width="30px"
          height="20px"
          fontSize="12px"
          handleClick={goBack}
        />
      </UsingVacationCont>
    </ModalWrapper>
  );
};
export default UsingVacation;
