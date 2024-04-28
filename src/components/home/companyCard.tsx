import {Link} from "react-router-dom";
import styled from "styled-components";
interface ICompanyCardProps {
  companyId: string;
  companyName: string;
  connectedCount: number;
  connectingCount: number;
  isOwned: boolean;
  isManaged: boolean;
}
const CompanyCardCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.secondary};
  border-radius: 15px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  position: relative;
  h2 {
    font-size: 20px;
    font-weight: 700;
  }
`;
const BadgeWrapper = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  top: 10px;
  right: 10px;
`;
const IsOwned = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.badge};
  padding: 5px 7px;
  border-radius: 10px;
  p {
    font-size: 15px;
    font-weight: 600;
  }
`;

const IsManage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.subBadge};
  padding: 5px 7px;
  border-radius: 10px;
  p {
    font-size: 15px;
    font-weight: 600;
  }
`;
const CompanyConnectCont = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const CompanyCard = ({
  companyId,
  companyName,
  connectedCount,
  connectingCount,
  isOwned,
  isManaged,
}: ICompanyCardProps) => {
  return (
    <CompanyCardCont>
      <BadgeWrapper>
        {isOwned && (
          <IsOwned>
            <p>보유</p>
          </IsOwned>
        )}
        {isManaged && (
          <IsManage>
            <p>관리</p>
          </IsManage>
        )}
      </BadgeWrapper>
      <Link to={`/company/:${companyId}`}>
        <h2>{companyName}</h2>
      </Link>
      <CompanyConnectCont>
        <div>
          <p>팔로잉 컴퍼니</p>
          <p>{connectedCount}</p>
        </div>
        <div>
          <p>팔로우 컴퍼니</p>
          <p>{connectingCount}</p>
        </div>
      </CompanyConnectCont>
    </CompanyCardCont>
  );
};
export default CompanyCard;
