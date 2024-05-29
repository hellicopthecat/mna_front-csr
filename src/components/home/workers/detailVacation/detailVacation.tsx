import {useNavigate, useParams} from "react-router-dom";
import {IParamID} from "../../../../types/routerType";
import ModalWrapper from "../../../shareComp/modalWrapper";
import {
  DetailVacationBody,
  DetailVacationBtn,
  DetailVacationBtnHeader,
  DetailVacationCont,
  DetailVacationHeader,
  DetailVacationInfo,
  DetailVacationTable,
} from "./detailVacation.style";
import {useEffect, useState} from "react";
import {AnchorTheme, BtnTheme} from "../../../btnTheme";
import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {Query} from "../../../../libs/__generated__/graphql";
import {useForm} from "react-hook-form";
import {IEditVacation} from "../../../../types/types";
import {
  VACATION_DESC_FRAG,
  VACATION_FRAG,
} from "../../../../libs/fragments/vacationFrag";
import {convertDate, joinCompanyDate} from "../../../../libs/util";
import useEditVacation from "./editVacationHook";
import VacationDesc, {IVacationDescProp} from "./vacationDesc/vacationDesc";
import useResetVacationDesc from "./resetVacationDescHook";
const SEE_DETAIL_VACATION_QUERY = gql`
  query seeVacation($seeVacationId: Int!) {
    seeVacation(id: $seeVacationId) {
      ...VacationFrag
      description {
        ...VacationDescFrag
      }
    }
  }
  ${VACATION_FRAG}
  ${VACATION_DESC_FRAG}
` as DocumentNode | TypedDocumentNode<Query>;
const DetailVacation = () => {
  //hooks
  const param = useParams<keyof IParamID>();
  const navigate = useNavigate();
  const {handleEditVacation} = useEditVacation();
  const {handleResetVacationDsec} = useResetVacationDesc();
  //query
  const {data, loading} = useQuery(SEE_DETAIL_VACATION_QUERY, {
    variables: {seeVacationId: Number(param.vacationID)},
  });
  const {register, handleSubmit, getValues, setValue} = useForm<IEditVacation>({
    defaultValues: {
      joinCompanyDate: convertDate(Number(data?.seeVacation.joinCompanyDate)),
      other: data?.seeVacation.other as number,
    },
  });
  //state
  const [editMode, setEditMode] = useState(false);

  //fn
  const onSubmit = () => {
    const {joinCompanyDate, other} = getValues();
    handleEditVacation({
      companyId: Number(param.id),
      vacationId: Number(param.vacationID),
      other,
      joinCompanyDate: Date.parse(joinCompanyDate + "").toString(),
    });
    setEditMode(false);
  };
  const resetSubmit = () => {
    const {joinCompanyDate} = getValues();
    handleEditVacation({
      companyId: Number(param.id),
      vacationId: Number(param.vacationID),
      other: 0,
      joinCompanyDate: Date.parse(joinCompanyDate + "").toString(),
    });
    handleResetVacationDsec(Number(param.vacationID));
  };
  const goBack = () => navigate(`/company/${param.id}/workers`);
  const cancelBtn = () => {
    setEditMode(false);
    goBack();
  };
  //useEffect
  useEffect(() => {
    const convert = convertDate(Number(data?.seeVacation.joinCompanyDate));
    setValue("joinCompanyDate", convert);
  }, [data, setValue]);

  return (
    <ModalWrapper goBack={goBack}>
      {loading ? (
        <div>loading</div>
      ) : (
        <DetailVacationCont>
          <DetailVacationHeader>
            <DetailVacationInfo>
              <label htmlFor="joinCompany">입사일</label>
              {!editMode && (
                <p>
                  {data?.seeVacation.joinCompanyDate
                    ? joinCompanyDate(data?.seeVacation.joinCompanyDate)
                    : "미기입"}
                </p>
              )}
              {editMode && (
                <input
                  {...register("joinCompanyDate")}
                  id="joinCompany"
                  type="date"
                  defaultValue={convertDate(
                    Number(data?.seeVacation.joinCompanyDate)
                  )}
                  max={new Date().toISOString().substring(0, 10)}
                />
              )}
            </DetailVacationInfo>
            <DetailVacationInfo>
              <span>연차</span>
              <p>
                {data?.seeVacation.annual
                  ? `${data?.seeVacation.annual} 일`
                  : "0 일"}
              </p>
            </DetailVacationInfo>
            <DetailVacationInfo>
              <label htmlFor="other">기타</label>
              {!editMode && (
                <p>
                  {data?.seeVacation.other
                    ? `${data?.seeVacation.other} 일`
                    : "0 일"}
                </p>
              )}
              {editMode && (
                <input
                  {...register("other")}
                  id="other"
                  type="text"
                  defaultValue={data?.seeVacation.other as number}
                  placeholder="기타"
                />
              )}
            </DetailVacationInfo>
            <DetailVacationInfo>
              <span>남은 연차</span>
              <p>
                {data?.seeVacation.restAnnualVacation
                  ? `${data?.seeVacation.restAnnualVacation} 일`
                  : "0 일"}
              </p>
            </DetailVacationInfo>
            <DetailVacationInfo>
              <span>남은 기타연차</span>
              <p>
                {data?.seeVacation.restOtherVacation
                  ? `${data?.seeVacation.restOtherVacation} 일`
                  : "0 일"}
              </p>
            </DetailVacationInfo>
            <DetailVacationInfo>
              <span>총 연차</span>
              <p>
                {data?.seeVacation.totalVacation
                  ? `${data?.seeVacation.totalVacation} 일`
                  : "0 일"}
              </p>
            </DetailVacationInfo>
          </DetailVacationHeader>
          <DetailVacationBody>
            <DetailVacationBtnHeader>
              <h3>휴가내역</h3>
              <AnchorTheme
                href={`/company/${param.id}/workers/${param.userID}/detail-vacation/${data?.seeVacation.id}/use-vacation`}
                text="휴가생성"
                width="60px"
                height="20px"
                fontSize="13px"
              />
              <BtnTheme
                text="초기화"
                width="60px"
                height="20px"
                fontSize="13px"
                handleClick={() => resetSubmit()}
              />
            </DetailVacationBtnHeader>

            {data?.seeVacation.description &&
            data?.seeVacation.description?.length < 1 ? (
              <p>휴가사용모델없음</p>
            ) : (
              <DetailVacationTable>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>생성일</th>
                    <th>휴가타입</th>
                    <th>휴가일</th>
                    <th>설명</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.seeVacation.description?.map((desc) => (
                    <VacationDesc
                      key={desc?.id}
                      desc={desc as IVacationDescProp["desc"]}
                    />
                  ))}
                </tbody>
              </DetailVacationTable>
            )}
          </DetailVacationBody>
          <DetailVacationBtn>
            {!editMode && data?.seeVacation.description?.length === 0 && (
              <BtnTheme
                text="편집"
                width="50px"
                height="30px"
                fontSize="14px"
                handleClick={() => setEditMode(true)}
              />
            )}
            {editMode && (
              <>
                <BtnTheme
                  text="확인"
                  width="50px"
                  height="30px"
                  fontSize="14px"
                  handleClick={handleSubmit(onSubmit)}
                />
                <BtnTheme
                  text="편집취소"
                  width="60px"
                  height="30px"
                  fontSize="14px"
                  handleClick={() => setEditMode(false)}
                />
              </>
            )}
            <BtnTheme
              text="취소"
              width="50px"
              height="30px"
              fontSize="14px"
              handleClick={cancelBtn}
            />
          </DetailVacationBtn>
        </DetailVacationCont>
      )}
    </ModalWrapper>
  );
};
export default DetailVacation;
