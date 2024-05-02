import styled from "styled-components";
import {BtnTheme} from "../../btnTheme";

interface IAccountProps {
  accountName: string;
  accountNum: string;
  accountDesc: string;
}
const AccountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const AccountCont = styled.div`
  display: flex;
  gap: 10px;
`;
const AccountInfoData = styled.div`
  display: flex;
  gap: 10px;
`;
const AccountInfo = ({accountName, accountNum, accountDesc}: IAccountProps) => {
  return (
    <AccountWrapper>
      <AccountCont>
        <AccountInfoData>
          <span>계좌이름</span>
          <p>{!accountName ? "미기입" : accountName}</p>
        </AccountInfoData>
        <span>|</span>
        <AccountInfoData>
          <span>계좌번호</span>
          <p>{!accountNum ? "미기입" : accountNum}</p>
        </AccountInfoData>
        <span>|</span>
        <AccountInfoData>
          <span>계좌설명</span>
          <p>{!accountDesc ? "미기입" : accountDesc}</p>
        </AccountInfoData>
      </AccountCont>
      <BtnTheme text="자산생성" width="100px" height="30px" />
    </AccountWrapper>
  );
};
export default AccountInfo;
