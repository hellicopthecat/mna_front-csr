import {useNavigate, useParams} from "react-router-dom";
import ModalWrapper from "../../../shareComp/modalWrapper";
import {IParamID} from "../../../../types/routerType";
import {
  CreateSalaryBtn,
  CreateSalaryForm,
  CreateSalaryInput,
  CreateSalarySelectCont,
} from "./createSalary.style";

import {BtnTheme} from "../../../btnTheme";
import useCreateSalary from "./createSalaryHook";
import {useForm} from "react-hook-form";
import {ICreateSalary} from "../../../../types/types";

const CreateSalary = () => {
  const param = useParams<keyof IParamID>();
  const navigate = useNavigate();
  const {register, handleSubmit, getValues, setValue} = useForm<ICreateSalary>({
    defaultValues: {
      id: Number(param.userID),
      companyName: param.id,
      familyCount: 1,
      preTaxMonthlySalary: 0,
      childCount: 0,
    },
  });
  const {handleCreateSalary} = useCreateSalary();
  //fn
  const onSubmit = () => {
    const {id, companyName, childCount, familyCount, preTaxMonthlySalary} =
      getValues();
    handleCreateSalary({
      id: Number(id),
      companyName,
      preTaxMonthlySalary: Number(preTaxMonthlySalary),
      familyCount: Number(familyCount),
      childCount: Number(childCount),
    });
  };
  const goBack = () => navigate(`/company/${param.id}/workers`);
  //for sentence
  const familyOption = () => {
    const result = [];
    for (let number = 1; number < 12; number++) {
      result.push(
        <option
          key={number}
          value={number}
          onChange={() => setValue("familyCount", number)}
        >
          {number}
        </option>
      );
    }
    return result;
  };
  const childOption = () => {
    const result = [];
    for (let number = 0; number < 12; number++) {
      result.push(
        <option
          key={number}
          value={number}
          onChange={() => setValue("childCount", number)}
        >
          {number}
        </option>
      );
    }
    return result;
  };
  return (
    <ModalWrapper goBack={goBack}>
      <CreateSalaryForm onSubmit={handleSubmit(onSubmit)}>
        <legend>급여생성</legend>
        <CreateSalaryInput>
          <label htmlFor="preTaxMonthlySalary">세전월급</label>
          <input
            {...register("preTaxMonthlySalary")}
            id="preTaxMonthlySalary"
            type="text"
            placeholder="세전월급"
          />
        </CreateSalaryInput>
        <CreateSalarySelectCont>
          <CreateSalaryInput>
            <label htmlFor="familyCount">구성가족</label>
            <select {...register("familyCount")}>{familyOption()}</select>
          </CreateSalaryInput>
          <CreateSalaryInput>
            <label htmlFor="childCount">자녀</label>
            <select {...register("childCount")}>{childOption()}</select>
          </CreateSalaryInput>
        </CreateSalarySelectCont>
        <CreateSalaryBtn>
          <BtnTheme
            text="등록"
            width="70px"
            height="30px"
            fontSize="14px"
            handleClick={handleSubmit(onSubmit)}
          />
          <BtnTheme text="취소" width="70px" height="30px" fontSize="14px" />
        </CreateSalaryBtn>
      </CreateSalaryForm>
    </ModalWrapper>
  );
};
export default CreateSalary;
