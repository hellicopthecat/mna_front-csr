import styled from "styled-components";

interface IAccountProps {
  accountName: string;
  accountNum: string;
  accountDesc: string;
}
const AccountCont = styled.div`
  display: flex;
  gap: 10px;
  div {
    display: flex;
    gap: 10px;
  }
`;
const AccountInfo = ({accountName, accountNum, accountDesc}: IAccountProps) => {
  return (
    <AccountCont>
      <div>
        <span>계좌이름</span>
        <p>{!accountName ? "미기입" : accountName}</p>
      </div>
      <span>|</span>
      <div>
        <span>계좌번호</span>
        <p>{!accountNum ? "미기입" : accountNum}</p>
      </div>
      <span>|</span>
      <div>
        <span>계좌설명</span>
        <p>{!accountDesc ? "미기입" : accountDesc}</p>
      </div>
    </AccountCont>
  );
};
export default AccountInfo;
