import {useNavigate, useParams} from "react-router-dom";
import ModalWrapper from "../../../shareComp/modalWrapper";
import {IParamID} from "../../../../types/routerType";
import {
  CreateSalaryBtn,
  CreateSalaryForm,
  CreateSalaryInput,
} from "./createSalary.style";

import {BtnTheme} from "../../../btnTheme";

const CreateSalary = () => {
  const param = useParams<keyof IParamID>();
  const navigate = useNavigate();
  const goBack = () => navigate(`/company/${param.id}/workers`);
  return (
    <ModalWrapper goBack={goBack}>
      <CreateSalaryForm>
        <legend>급여생성</legend>
        <CreateSalaryInput>
          <label htmlFor="annualSalary">연봉</label>
          <input id="annualSalary" type="text" placeholder="급여" />
        </CreateSalaryInput>
        <CreateSalaryBtn>
          <BtnTheme text="등록" width="70px" height="30px" fontSize="14px" />
          <BtnTheme text="취소" width="70px" height="30px" fontSize="14px" />
        </CreateSalaryBtn>
      </CreateSalaryForm>
    </ModalWrapper>
  );
};
export default CreateSalary;
