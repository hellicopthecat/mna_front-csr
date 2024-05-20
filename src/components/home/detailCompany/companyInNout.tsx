import {Link} from "react-router-dom";
import styled from "styled-components";
import {useAppSelector} from "../../../hooks/storeHook";

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
  span:first-child {
  }
  span:nth-child(2) {
    text-align: right;
  }
`;
const CompanyInNout = ({inNout}: IInNoutProps) => {
  const {companyName} = useAppSelector((state) => state.companyState);
  return (
    <>
      <CompanyInNoutTitle>
        <h2>회계</h2>
        <Link to={`/company/${companyName}/innout`}>
          <span>전체보기</span>
        </Link>
      </CompanyInNoutTitle>
      <InNoutWrapper>
        <InNoutInfoCont>
          <span>예산</span>
          <span>{inNout?.budget}</span>
        </InNoutInfoCont>
        <InNoutInfoCont>
          <span>총자산</span>
          <span>{inNout?.totalAssets}</span>
        </InNoutInfoCont>
        <InNoutInfoCont>
          <span>자본</span>
          <span>{inNout?.capital}</span>
        </InNoutInfoCont>
        <InNoutInfoCont>
          <span>부채</span>
          <span>{inNout?.liabilities}</span>
        </InNoutInfoCont>
        <InNoutInfoCont>
          <span>총수익</span>
          <span>{inNout?.totalRevenue}</span>
        </InNoutInfoCont>
        <InNoutInfoCont>
          <span>총비용</span>
          <span>{inNout?.totalExpenses}</span>
        </InNoutInfoCont>
        <InNoutInfoCont>
          <span>순자산</span>
          <span>{inNout?.netAssets}</span>
        </InNoutInfoCont>
        <InNoutInfoCont>
          <span>순이익</span>
          <span>{inNout?.netIncome}</span>
        </InNoutInfoCont>
        <InNoutInfoCont>
          <span>부채비율</span>
          <span>
            {inNout?.debtRatio === null
              ? "자산/부채 모델이 없습니다."
              : `${inNout?.debtRatio?.toLocaleString()}%`}
          </span>
        </InNoutInfoCont>
        <InNoutInfoCont>
          <span>자기자본비율</span>
          <span>
            {inNout?.equityRatio === null
              ? "자산/부채 모델이 없습니다."
              : `${inNout?.equityRatio?.toLocaleString()}%`}
          </span>
        </InNoutInfoCont>
        <InNoutInfoCont>
          <span>이익률</span>
          <span>
            {inNout?.profitMargin === null
              ? "수익 모델이 없습니다."
              : `${inNout?.profitMargin?.toLocaleString()}%`}
          </span>
        </InNoutInfoCont>
        <InNoutInfoCont>
          <span>자기자본회수기간</span>
          <span>
            {inNout?.roe === null
              ? "수익 모델이 없습니다."
              : `${inNout?.roe?.toLocaleString()}%`}
          </span>
        </InNoutInfoCont>
      </InNoutWrapper>
    </>
  );
};
export default CompanyInNout;
