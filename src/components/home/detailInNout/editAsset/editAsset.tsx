import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {useNavigate, useParams} from "react-router-dom";
import {Query} from "../../../../libs/__generated__/graphql";
import {AnchorTheme, BtnTheme} from "../../../btnTheme";
import {
  EditAssetBtn,
  EditAssetCont,
  EditAssetInputCont,
  EditAssetRadioCont,
} from "./editAsset.style";
import useEditAssetMutate from "./editAssetHook";
import {useForm} from "react-hook-form";
import {IEditAssetProps} from "../../../../types/types";
import useDeleteAssetHook from "./deleteAssetHook";
import ModalWrapper from "../../../shareComp/modalWrapper";

const SEE_ENL_QUERY = gql`
  query seeEnl($companyName: String!, $seeEnLId: Int!) {
    seeEnL(companyName: $companyName, id: $seeEnLId) {
      id
      createdAt
      updateAt
      enLId
      enLName
      enLType
      enLDesc
      current
      assests
      value
    }
  }
` as DocumentNode | TypedDocumentNode<Query>;

const EditAsset = () => {
  //state

  //hooks
  const navigate = useNavigate();
  const param = useParams();
  //gql Query
  const {data, loading} = useQuery(SEE_ENL_QUERY, {
    variables: {
      companyName: param?.id,
      seeEnLId: Number(param?.assetid),
    },
  });
  const ENL = data?.seeEnL;
  //form
  const {register, handleSubmit, getValues, setValue} =
    useForm<IEditAssetProps>({
      defaultValues: {
        companyName: param.id + "",
        enLId: ENL?.enLId as string,
        enLName: ENL?.enLName as string,
        enLType: ENL?.enLType as string,
        enLDesc: ENL?.enLDesc as string,
        current: ENL?.current ? "CURRENT" : "NONCURRENT",
        assests: ENL?.assests ? "ASSET" : "NONASSET",
        value: ENL?.value as number,
      },
    });

  //gql Mutate
  const {handleEditAsset} = useEditAssetMutate();
  const {handleDeleteAssets} = useDeleteAssetHook();

  //fn
  const onSubmit = () => {
    const {companyName, enLName, enLType, enLDesc, current, assests, value} =
      getValues();
    handleEditAsset({
      companyName,
      inNoutId: Number(param?.inoutid),
      enLId: ENL?.enLId + "",
      enLName,
      enLType,
      enLDesc,
      current,
      assests,
      value,
    });
  };
  const onDeleteTdata = () => {
    handleDeleteAssets({
      enLId: ENL?.enLId + "",
      inNoutId: Number(param.inoutid),
    });
  };
  const goBack = () => {
    navigate(`/company/${param.id}/innout`);
  };

  return (
    <ModalWrapper goBack={goBack}>
      <EditAssetCont>
        {loading ? (
          <div>loading</div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <legend>자산수정</legend>
            <EditAssetInputCont>
              <label htmlFor="enlId">자산고유ID</label>
              <input
                {...register("enLId")}
                id="enlId"
                type="text"
                value={ENL?.enLId}
                placeholder={!ENL?.enLId ? "입력해주세요" : undefined}
                disabled
              />
              <span>자산고유ID는 수정할수없습니다.</span>
            </EditAssetInputCont>
            <EditAssetInputCont>
              <label htmlFor="enlName">자산제목</label>
              <input
                {...register("enLName")}
                id="enlName"
                type="text"
                defaultValue={ENL?.enLName}
                placeholder={!ENL?.enLName ? "입력해주세요" : undefined}
              />
            </EditAssetInputCont>
            <EditAssetInputCont>
              <label htmlFor="enlType">자산유형</label>
              <input
                {...register("enLType")}
                id="enlType"
                type="text"
                defaultValue={ENL?.enLType}
                placeholder={!ENL?.enLType ? "입력해주세요" : undefined}
              />
            </EditAssetInputCont>
            <EditAssetInputCont>
              <label htmlFor="enlValue">자산값</label>
              <input
                {...register("value")}
                id="enlValue"
                type="text"
                defaultValue={ENL?.value}
                placeholder={!ENL?.value ? "입력해주세요" : undefined}
              />
            </EditAssetInputCont>
            <EditAssetRadioCont>
              <label htmlFor="asset">자산</label>
              <input
                {...register("assests")}
                name="assetRadio"
                id="asset"
                type="radio"
                value={"ASSET"}
                defaultChecked={ENL?.assests}
                onChange={() => setValue("assests", "ASSET")}
              />
              <label htmlFor="nonAsset">부채</label>
              <input
                {...register("assests")}
                name="assetRadio"
                id="nonAsset"
                type="radio"
                value={"NONASSET"}
                defaultChecked={!ENL?.assests}
                onChange={() => setValue("assests", "NONASSET")}
              />
            </EditAssetRadioCont>
            <EditAssetRadioCont>
              <label htmlFor="currnet">유동</label>
              <input
                {...register("current")}
                name="currentRadio"
                id="currnet"
                type="radio"
                value={"CURRENT"}
                defaultChecked={ENL?.current === true}
                onChange={() => setValue("current", "CURRENT")}
              />
              <label htmlFor="nonCurrent">비유동</label>
              <input
                {...register("current")}
                name="currentRadio"
                id="nonCurrent"
                type="radio"
                value={"NONCURRENT"}
                defaultChecked={ENL?.current === false}
                onChange={() => setValue("current", "NONCURRENT")}
              />
            </EditAssetRadioCont>
            <EditAssetInputCont>
              <label htmlFor="enlDesc">자산설명</label>
              <textarea
                {...register("enLDesc")}
                id="enlDesc"
                placeholder={
                  !ENL?.enLDesc ? "자산설명을 입력하세요" : ENL?.enLDesc
                }
                defaultValue={ENL && ENL?.enLDesc + ""}
              />
            </EditAssetInputCont>
            <EditAssetBtn>
              <BtnTheme
                text="저장"
                width="50px"
                height="30px"
                fontSize="15px"
                handleClick={handleSubmit(onSubmit)}
                btncolor="green"
              />
              <BtnTheme
                text="삭제"
                width="50px"
                height="30px"
                fontSize="15px"
                handleClick={handleSubmit(onDeleteTdata)}
                btncolor="tomato"
              />
              <AnchorTheme
                href={`/company/${param.id}/innout`}
                text="취소"
                width="50px"
                height="30px"
                fontSize="15px"
              />
            </EditAssetBtn>
          </form>
        )}
      </EditAssetCont>
    </ModalWrapper>
  );
};
export default EditAsset;
