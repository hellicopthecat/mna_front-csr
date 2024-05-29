import {useState} from "react";
import {Avatar} from "../../../avatar";
import {BtnTheme} from "../../../btnTheme";
import {
  CInfoHeaderOneLeft,
  CInfoHeaderOneRight,
  CompanyAdressCont,
  CompanyInfoHeader,
  CompanyInfoHeaderOne,
  CompanyInfoHeaderTwo,
  UserDataCont,
} from "./companyInfo.style";
import {useForm} from "react-hook-form";
import {IEditCompanyAdress} from "../../../../types/types";
import {useParams} from "react-router-dom";
import {IParamID} from "../../../../types/routerType";
import useEditCompanyAdress from "./editCompanyAdress/editCompanyAdressHook";
import useConnectCompanyMutate from "./connectCompanyHook/connectCompanyHook";
import useDisconnectCompanyMutate from "./connectCompanyHook/disConnectCompany";

export interface ICompanyInfo {
  companyName: string;
  username: string;
  email: string;
  phone: string;
  isOwned: boolean;
  isManager: boolean;
  companyAdress?: {
    id: string;
    country: string;
    city: string;
    streetAdress: string;
    restAdress: string;
    adressNum: string;
  };
  connectedCompany?: [
    {
      id: number;
      companyName: string;
    }
  ];
  connectingCompany?: [
    {
      id: number;
      companyName: string;
    }
  ];
}
const CompanyInfo = ({
  companyName,
  username,
  email,
  phone,
  isOwned,
  isManager,
  companyAdress,
  connectingCompany,
}: ICompanyInfo) => {
  //hook
  const param = useParams<keyof IParamID>();
  const {handleEditCompanyAdress} = useEditCompanyAdress();
  const {handleConnectCompany} = useConnectCompanyMutate();
  const {handleDisConnectCompany} = useDisconnectCompanyMutate();
  //state
  const [editMode, setEditMode] = useState(false);
  const {register, handleSubmit, getValues} = useForm<IEditCompanyAdress>({
    defaultValues: {
      id: companyAdress?.id,
      country: companyAdress?.country,
      city: companyAdress?.city,
      streetAdress: companyAdress?.streetAdress,
      restAdress: companyAdress?.restAdress,
      adressNum: companyAdress?.adressNum,
    },
  });
  //fn
  const editOn = () => setEditMode(true);
  const editOff = () => setEditMode(false);
  const onSubmit = () => {
    const {id, country, city, streetAdress, restAdress, adressNum} =
      getValues();
    handleEditCompanyAdress({
      id,
      country,
      city,
      streetAdress,
      restAdress,
      adressNum,
      companyId: Number(param.id),
    });
    editOff();
  };
  //constants
  const manager = isOwned || isManager;

  const existsCompany = connectingCompany?.find(
    (item) => item.companyName !== companyName
  );

  return (
    <CompanyInfoHeader>
      <CompanyInfoHeaderOne>
        <CInfoHeaderOneLeft>
          <p>회사명</p>
          <h2>{companyName}</h2>
        </CInfoHeaderOneLeft>
        <CInfoHeaderOneRight>
          {!manager && !existsCompany && (
            <BtnTheme
              text="커넥트"
              width="50px"
              height="20px"
              fontSize="12px"
              handleClick={handleConnectCompany}
            />
          )}
          {!manager && existsCompany && (
            <BtnTheme
              text="언커넥트"
              width="50px"
              height="20px"
              fontSize="12px"
              handleClick={handleDisConnectCompany}
            />
          )}
        </CInfoHeaderOneRight>
      </CompanyInfoHeaderOne>
      <CompanyInfoHeaderTwo>
        <UserDataCont>
          <div>
            <Avatar width="20px" height="20px" />
            <span>{username}</span>
            {isOwned && <p>보유</p>}
            {isManager && <p>관리자</p>}
          </div>
          <div>
            <div>
              <span>E-MAIL : </span>
              <span>{email}</span>
            </div>

            <div>
              <span>PHONE : </span>
              <span>{phone}</span>
            </div>
          </div>
        </UserDataCont>
        <CompanyAdressCont>
          <div>
            <small>우편번호 :</small>
            {!editMode ? (
              <small>
                {!companyAdress?.adressNum
                  ? "미입력"
                  : companyAdress?.adressNum}
              </small>
            ) : (
              <input
                {...register("adressNum")}
                type="text"
                placeholder={
                  !companyAdress?.adressNum
                    ? "미입력"
                    : companyAdress?.adressNum
                }
              />
            )}
          </div>
          <div>
            <small>도시 :</small>
            {!editMode ? (
              <small>
                {!companyAdress?.country ? "미입력" : companyAdress?.country}
              </small>
            ) : (
              <input
                {...register("country")}
                type="text"
                placeholder={
                  !companyAdress?.country ? "미입력" : companyAdress?.country
                }
              />
            )}
          </div>
          <div>
            <small>시 :</small>
            {!editMode ? (
              <small>
                {!companyAdress?.city ? "미입력" : companyAdress?.city}
              </small>
            ) : (
              <input
                {...register("city")}
                type="text"
                placeholder={
                  !companyAdress?.city ? "미입력" : companyAdress?.city
                }
              />
            )}
          </div>
          <div>
            <small>도로명 :</small>
            {!editMode ? (
              <small>
                {!companyAdress?.streetAdress
                  ? "미입력"
                  : companyAdress?.streetAdress}
              </small>
            ) : (
              <input
                {...register("streetAdress")}
                type="text"
                placeholder={
                  !companyAdress?.streetAdress
                    ? "미입력"
                    : companyAdress?.streetAdress
                }
              />
            )}
          </div>
          <div>
            <small>나머지주소 : </small>
            {!editMode ? (
              <small>
                {!companyAdress?.restAdress
                  ? "미입력"
                  : companyAdress?.restAdress}
              </small>
            ) : (
              <input
                {...register("restAdress")}
                type="text"
                placeholder={
                  !companyAdress?.restAdress
                    ? "미입력"
                    : companyAdress?.restAdress
                }
              />
            )}
          </div>
          {manager && !editMode && (
            <BtnTheme
              text="편집"
              width="30px"
              height="20px"
              fontSize="12px"
              handleClick={editOn}
            />
          )}
          {manager && editMode && (
            <>
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
                handleClick={editOff}
              />
            </>
          )}
        </CompanyAdressCont>
      </CompanyInfoHeaderTwo>
    </CompanyInfoHeader>
  );
};
export default CompanyInfo;
