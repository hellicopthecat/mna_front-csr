import styled from "styled-components";
import {Avatar} from "../../avatar";
import {Link} from "react-router-dom";
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;
const ConnectBody = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  gap: 30px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
  border: 1px solid ${(props) => props.theme.secondary};
  border-radius: 5px;
`;

const CompanyConnect = ({title, count, connect}: ICompanyConnect) => {
  return (
    <ConnectWrapper>
      <ConnectTitle>
        <h2>{title}</h2>
        <Link to={`/`}>
          <span>전체보기 ({count})</span>
        </Link>
      </ConnectTitle>
      <ConnectBodyCont>
        {connect?.map((company) => (
          <ConnectBody key={company.id}>
            <Avatar width="50px" height="50px" />
            <Link to={`/`}>
              {company.companyName.length > 10
                ? `${company.companyName.substring(0, 10)}...`
                : company.companyName}
            </Link>
          </ConnectBody>
        ))}
      </ConnectBodyCont>
    </ConnectWrapper>
  );
};
export default CompanyConnect;
