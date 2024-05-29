import {useForm} from "react-hook-form";
import useCreateCompany from "./createCompanyHook";
import {useNavigate} from "react-router-dom";
import {urlName} from "../../../../../libs/constants";
import {
  CreateCompanyBtn,
  CreateCompanyForm,
  CreateCompanyInput,
} from "./createCompany.style";
import {BtnTheme} from "../../../../../components/btnTheme";

const CreateCompany = () => {
  const navigate = useNavigate();
  const {register, handleSubmit, getValues} = useForm<{companyName: string}>({
    defaultValues: {
      companyName: "",
    },
  });
  const {handleCreateCompany} = useCreateCompany();
  //fn
  const onSubmit = () => {
    const {companyName} = getValues();
    handleCreateCompany({companyName});
  };
  const goBack = () => {
    navigate(urlName.comapny);
  };
  return (
    <CreateCompanyForm onSubmit={handleSubmit(onSubmit)}>
      <legend>회사생성</legend>
      <CreateCompanyInput>
        <label htmlFor="companyName">회사명</label>
        <input
          {...register("companyName")}
          id="companyName"
          type="text"
          placeholder="회사명"
        />
      </CreateCompanyInput>
      <CreateCompanyBtn>
        <BtnTheme
          text="확인"
          width="55px"
          height="35x"
          fontSize="17px"
          handleClick={handleSubmit(onSubmit)}
        />
        <BtnTheme
          text="취소"
          width="55px"
          height="35x"
          fontSize="17px"
          handleClick={goBack}
        />
      </CreateCompanyBtn>
    </CreateCompanyForm>
  );
};
export default CreateCompany;
