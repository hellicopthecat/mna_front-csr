import styled from "styled-components";

interface ICardInfo {
  keyword?: string;
  value?: number | string;
}

const CardInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
