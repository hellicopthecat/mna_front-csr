import {useNavigate, useParams} from "react-router-dom";
import {CreateVacationForm} from "./createVacation.style";
import useCreateVacation from "./createVacationHook";
import {useForm} from "react-hook-form";
import {IParamID} from "../../../../types/routerType";
import {ICreateVacation} from "../../../../types/types";
import ModalWrapper from "../../../shareComp/modalWrapper";

const CreateVacation = () => {
  //hook
  const param = useParams<keyof IParamID>();
  const navigate = useNavigate();
  const {handleCreateVacation} = useCreateVacation();
  const {handleSubmit, getValues} = useForm<ICreateVacation>({
    defaultValues: {
      annual: "0",
      joinCompanyDate: "",
    },
  });
  //fn
  const onSubmit = () => {
    const {annual, joinCompanyDate} = getValues();
    handleCreateVacation({
      annual,
      joinCompanyDate,
    });
  };
  const goBack = () => navigate(`/company/${param.id}/workers`);
  return (
    <ModalWrapper goBack={goBack}>
      <CreateVacationForm onSubmit={handleSubmit(onSubmit)}>
        <legend>휴가생성</legend>
        <div>
          <label htmlFor=""></label>
          <input type="text" placeholder="" />
        </div>
      </CreateVacationForm>
    </ModalWrapper>
  );
};
export default CreateVacation;
