import styled from "styled-components";

interface ICardInfo {
  keyword?: string;
  value?: number | string;
}

const CardInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  span {
    margin-right: 10px;
  }
`;

const UserCompanyCardInfo = ({keyword, value}: ICardInfo) => {
  return (
    <CardInfo>
      <span>{keyword}</span>
      <p>{value}</p>
    </CardInfo>
  );
};

export default UserCompanyCardInfo;
