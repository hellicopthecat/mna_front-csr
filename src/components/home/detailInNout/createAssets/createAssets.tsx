import {useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";
import {ICreateAssetProps} from "../../../../types/types";
import {
  CreateAssetsBtn,
  CreateAssetsForm,
  CreateAssetsInput,
  CreateAssetsRadio,
  CreateAssetsTextArea,
} from "./createAssets.style";
import {AnchorTheme, BtnTheme} from "../../../btnTheme";
import useCreateAssetsMutate from "./createAssetsHook";
import ModalWrapper from "../../../shareComp/modalWrapper";

const CreateAssets = () => {
  //hook
  const params = useParams();
  const navigate = useNavigate();
  const {handleCreateAssets} = useCreateAssetsMutate();
  //form
  const {register, handleSubmit, getValues, setValue} =
    useForm<ICreateAssetProps>({
      defaultValues: {
        companyName: params.id,
        enLId: "",
        enLName: "",
        enLType: "",
        enLDesc: "",
        current: "CURRENT" || "NONCURRENT" || undefined,
        assests: "ASSET" || "NONASSET" || undefined,
        value: 0,
      },
    });
  //fn
  const goBack = () => navigate(`/company/${params.id}/innout`);
  const onSubmit = () => {
    const {
      companyName,
      enLId,
      enLName,
      enLType,
      enLDesc,
      current,
      assests,
      value,
    } = getValues();
    handleCreateAssets({
      companyName,
      enLId,
      enLName,
      enLType,
      enLDesc,
      current,
      assests,
      value,
    });
  };
  return (
    <ModalWrapper goBack={goBack}>
      <CreateAssetsForm onSubmit={handleSubmit(onSubmit)}>
        <legend>자산생성</legend>
        <CreateAssetsInput>
          <label htmlFor="enLId">
            자산고유ID <span>*</span>
          </label>
          <input
            {...register("enLId")}
            id="enLId"
            type="text"
            placeholder="자산고유ID는 중복될수없습니다. (타회사 포함)"
          />
        </CreateAssetsInput>
        <CreateAssetsInput>
          <label htmlFor="enLName">자산제목</label>
          <input
            {...register("enLName")}
            id="enLName"
            type="text"
            placeholder="자산제목을 입력해주세요."
          />
        </CreateAssetsInput>
        <CreateAssetsInput>
          <label htmlFor="enLType">자산타입</label>
          <input
            {...register("enLType")}
            id="enLType"
            type="text"
            placeholder="자산타입을 입력해주세요."
          />
        </CreateAssetsInput>
        <CreateAssetsRadio>
          <label htmlFor="current">유동</label>
          <input
            {...register("current")}
            type="radio"
            id="current"
            value={"CURRENT"}
            defaultChecked={getValues("current") === "CURRENT"}
            onChange={() => setValue("current", "CURRENT")}
          />
          <label htmlFor="noncurrent">비유동</label>
          <input
            {...register("current")}
            type="radio"
            id="noncurrent"
            value={"NONCURRENT"}
            defaultChecked={getValues("current") === "NONCURRENT"}
            onChange={() => setValue("current", "NONCURRENT")}
          />
        </CreateAssetsRadio>
        <CreateAssetsRadio>
          <label htmlFor="assets">자산</label>
          <input
            {...register("assests")}
            type="radio"
            id="assets"
            value={"ASSET"}
            defaultChecked={getValues("assests") === "ASSET"}
            onChange={() => setValue("assests", "ASSET")}
          />
          <label htmlFor="nonassets">부채</label>
          <input
            {...register("assests")}
            type="radio"
            id="nonassets"
            value={"NONASSET"}
            defaultChecked={getValues("assests") === "NONASSET"}
            onChange={() => setValue("assests", "NONASSET")}
          />
        </CreateAssetsRadio>
        <CreateAssetsInput>
          <label htmlFor="value">자산값</label>
          <input
            {...register("value")}
            id="value"
            type="text"
            placeholder="0"
          />
        </CreateAssetsInput>
        <CreateAssetsTextArea>
          <label htmlFor="enlDesc">자산설명</label>
          <textarea
            {...register("enLDesc")}
            id="enlDesc"
            placeholder="150자 이하로 작성하세요"
            minLength={150}
          />
        </CreateAssetsTextArea>
        <p>
          <span>*</span>은 필수작성입니다.
        </p>
        <CreateAssetsBtn>
          <BtnTheme
            text="생성"
            width="70px"
            height="30px"
            fontSize="15px"
            handleClick={handleSubmit(onSubmit)}
          />
          <AnchorTheme
            href={`/company/${params.id}/innout`}
            text="취소"
            width="70px"
            height="30px"
            fontSize="15px"
          />
        </CreateAssetsBtn>
      </CreateAssetsForm>
    </ModalWrapper>
  );
};

export default CreateAssets;
