import {Link, useParams} from "react-router-dom";
import styled from "styled-components";
import {IParamID} from "../../../types/routerType";

export interface IInNoutProps {
  inNout?: {
    budget?: number;
    totalAssets?: number;
    capital?: number;
    liabilities?: number;
    totalRevenue?: number;
    totalExpenses?: number;
    netAssets?: number;
    netIncome?: number;
    profitMargin?: number;
    roe?: number;
    debtRatio?: number;
    equityRatio?: number;
  };
}
const CompanyInNoutTitle = styled.div`
  display: flex;
  align-items: end;
  gap: 20px;
  span {
    font-size: 15px;
  }
`;
const InNoutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
`;
const InNoutInfoCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.cardColor};
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
  span:nth-child(2) {
    text-align: right;
  }
`;
const CompanyInNout = ({inNout}: IInNoutProps) => {
  const param = useParams<keyof IParamID>();
  return (
    <>
      <CompanyInNoutTitle>
        <h2>회계</h2>
        <Link to={`/company/${param.id}/innout`}>전체보기</Link>
      </CompanyInNoutTitle>
      <InNoutWrapper>
        <InNoutInfoCont>
          <span>예산</span>
          <span>
            {!inNout?.budget ? 0 : inNout?.budget.toLocaleString()} 원
          </span>
        </InNoutInfoCont>
        <InNoutInfoCont>
          <span>총자산</span>
          <span>
            {!inNout?.totalAssets ? 0 : inNout?.totalAssets.toLocaleString()} 원
          </span>
        </InNoutInfoCont>
        <InNoutInfoCont>
          <span>자본</span>
          <span>
            {!inNout?.capital ? 0 : inNout?.capital.toLocaleString()} 원
          </span>
        </InNoutInfoCont>
        <InNoutInfoCont>
          <span>부채</span>
          <span>
            {!inNout?.liabilities ? 0 : inNout?.liabilities.toLocaleString()} 원
          </span>
        </InNoutInfoCont>
        <InNoutInfoCont>
          <span>총수익</span>
          <span>
            {!inNout?.totalRevenue ? 0 : inNout?.totalRevenue.toLocaleString()}{" "}
            원
          </span>
        </InNoutInfoCont>
        <InNoutInfoCont>
          <span>총비용</span>
          <span>
            {!inNout?.totalExpenses
              ? 0
              : inNout?.totalExpenses.toLocaleString()}{" "}
            원
          </span>
        </InNoutInfoCont>
        <InNoutInfoCont>
          <span>순자산</span>
          <span>
            {!inNout?.netAssets ? 0 : inNout?.netAssets.toLocaleString()} 원
          </span>
        </InNoutInfoCont>
        <InNoutInfoCont>
          <span>순이익</span>
          <span>
            {!inNout?.netIncome ? 0 : inNout?.netIncome.toLocaleString()} 원
          </span>
        </InNoutInfoCont>
        <InNoutInfoCont>
          <span>부채비율</span>
          <span>
            {!inNout?.debtRatio
              ? "자산/부채 모델이 없습니다."
              : `${inNout?.debtRatio?.toLocaleString()}%`}
          </span>
        </InNoutInfoCont>
        <InNoutInfoCont>
          <span>자기자본비율</span>
          <span>
            {!inNout?.equityRatio
              ? "자산/부채 모델이 없습니다."
              : `${inNout?.equityRatio?.toLocaleString()}%`}
          </span>
        </InNoutInfoCont>
        <InNoutInfoCont>
          <span>이익률</span>
          <span>
            {!inNout?.profitMargin
              ? "수익 모델이 없습니다."
              : `${inNout?.profitMargin?.toLocaleString()}%`}
          </span>
        </InNoutInfoCont>
        <InNoutInfoCont>
          <span>자기자본회수기간</span>
          <span>
            {!inNout?.roe
              ? "수익 모델이 없습니다."
              : `${inNout?.roe?.toLocaleString()}%`}
          </span>
        </InNoutInfoCont>
      </InNoutWrapper>
    </>
  );
};
export default CompanyInNout;
