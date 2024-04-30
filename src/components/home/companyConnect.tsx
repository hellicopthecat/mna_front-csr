import styled from "styled-components";
import {CompanyAvatar} from "../avatar";
export interface ICompanyConnect {
  title: string;
  count: number;
  connect?: [
    {
      id: number;
      companyName: string;
      companyLogo: string;
    }
  ];
}
const ConnectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const ConnectTitle = styled.div`
  display: flex;
  align-items: end;
  gap: 20px;
  span {
    font-size: 15px;
  }
`;
const ConnectBodyCont = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(200px, 1fr));
`;
const ConnectBody = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const CompanyConnect = ({title, count, connect}: ICompanyConnect) => {
  return (
    <ConnectWrapper>
      <ConnectTitle>
        <h2>{title}</h2>
        <span>전체보기 ({count})</span>
      </ConnectTitle>
      <ConnectBodyCont>
        {connect?.map((company) => (
          <ConnectBody key={company.id}>
            <CompanyAvatar width="50px" height="50px" />
            {company.companyName.length > 10
              ? `${company.companyName.substring(0, 10)}...`
              : company.companyName}
          </ConnectBody>
        ))}
      </ConnectBodyCont>
    </ConnectWrapper>
  );
};
export default CompanyConnect;
