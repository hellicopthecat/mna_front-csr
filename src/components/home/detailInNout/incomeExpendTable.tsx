import styled from "styled-components";
import {AnchorTheme} from "../../btnTheme";
import {useParams} from "react-router-dom";
import {IParamID} from "../../../types/routerType";

export interface IIncomeExpendProps {
  title: string;
  total: number;
  iNe?: [
    {
      id: number;
      accountCode: string;
      businessDate: string;
      businessDesc: string;
      incomeTrue: boolean;
      infoSubtitle: string;
      money: number;
      paymentType: string;
      paymentsDone: "WAIT" | "PAID" | "NONPAID";
    }
  ];
}
const INETableCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h3 {
    font-size: 30px;
  }
`;
const INETable = styled.table`
  border: 1px solid ${(props) => props.theme.secondary};
  tr {
    th,
    td {
      vertical-align: middle;
      padding: 10px;
    }
  }
`;
const INETableThead = styled.thead``;
const INETableTbody = styled.tbody`
  border: 1px solid ${(props) => props.theme.secondary};
  text-align: center;
`;
const INETableTfoot = styled.tfoot`
  text-align: center;
`;
const IncomeExpendTable = ({title, total, iNe}: IIncomeExpendProps) => {
  const param = useParams<keyof IParamID>();
  return (
    <INETableCont>
      <h3>{title}</h3>
      <INETable>
        <INETableThead>
          <tr>
            <th>수입지출ID</th>
            <th>결제제목</th>
            <th>거래일</th>
            <th>수입지출타입</th>
            <th>결제타입</th>
            <th>계정과목</th>
            <th>금액</th>
            <th>결재완료</th>
            <th>편집</th>
          </tr>
        </INETableThead>
        <INETableTbody>
          {iNe?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{!item.infoSubtitle ? "미기입" : item.infoSubtitle}</td>
              <td>{!item.businessDate ? "미기입" : item.businessDate}</td>
              <td>{!item.incomeTrue ? "지출" : "수입"}</td>
              <td>{!item.paymentType ? "미기입" : item.paymentType}</td>
              <td>{!item.accountCode ? "미기입" : item.accountCode}</td>
              <td>{!item.money ? 0 : `₩ ${item.money.toLocaleString()}`}</td>
              <td>{item.paymentsDone}</td>
              <td style={{display: "flex", justifyContent: "center"}}>
                <AnchorTheme
                  href={`/company/${param.id}/product/${item.id}`}
                  text="편집"
                  width="45px"
                  height="20px"
                  fontSize="13px"
                />
              </td>
            </tr>
          ))}
        </INETableTbody>
        <INETableTfoot>
          <tr>
            <td>총 합</td>
            <td>{!total ? 0 : `₩ ${total.toLocaleString()}`}</td>
          </tr>
        </INETableTfoot>
      </INETable>
    </INETableCont>
  );
};
export default IncomeExpendTable;
