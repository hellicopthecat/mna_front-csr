import {Avatar} from "../../../avatar";
import {
  CompanyAdressCont,
  CompanyInfoHeader,
  CompanyInfoHeaderOne,
  CompanyInfoHeaderTwo,
  UserDataCont,
} from "./companyInfo.style";

export interface ICompanyInfo {
  companyName: string;
  username: string;
  email: string;
  phone: string;
  isOwned: boolean;
  isManager: boolean;
  companyAdress: {
    id: string;
    country: string;
    city: string;
    streetAdress: string;
    restAdress: string;
    adressNum: string;
  };
}
const CompanyInfo = ({
  companyName,
  username,
  email,
  phone,
  isOwned,
  isManager,
  companyAdress,
}: ICompanyInfo) => {
  return (
    <CompanyInfoHeader>
      <CompanyInfoHeaderOne>
        <p>회사명</p>
        <h2>{companyName}</h2>
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
          <small>
            우편번호 :{" "}
            {!companyAdress.adressNum ? "미입력" : companyAdress.adressNum}
          </small>
          <small>
            도시 : {!companyAdress.country ? "미입력" : companyAdress.country}
          </small>
          <small>
            시 : {!companyAdress.city ? "미입력" : companyAdress.city}
          </small>
          <small>
            도로명 :{" "}
            {!companyAdress.streetAdress
              ? "미입력"
              : companyAdress.streetAdress}
          </small>
          <small>
            나머지주소 :{" "}
            {!companyAdress.restAdress ? "미입력" : companyAdress.restAdress}
          </small>
        </CompanyAdressCont>
      </CompanyInfoHeaderTwo>
    </CompanyInfoHeader>
  );
};
export default CompanyInfo;
