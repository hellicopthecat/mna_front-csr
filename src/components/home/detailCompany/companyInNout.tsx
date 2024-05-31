import {Link, useParams} from "react-router-dom";
import styled from "styled-components";
import {IParamID} from "../../../types/routerType";
import Chart from "react-apexcharts";

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

const InNoutChart = styled.div`
  position: relative;
  z-index: 50;
  color: #1e1e1e;
  width: 100%;
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
        <InNoutChart>
          <Chart
            type="radialBar"
            options={{
              title: {
                text: "수익모델",
                style: {
                  color: "cornflowerblue",
                  fontSize: "20px",
                  fontWeight: 600,
                },
              },
              labels: ["순자산", "순이익", "총비용", "예산"],
              plotOptions: {
                radialBar: {
                  dataLabels: {
                    total: {
                      show: true,
                      label: "총수익",
                      color: "#ff5722",
                      formatter() {
                        return `${Number(
                          inNout?.totalRevenue
                        ).toLocaleString()} 원`;
                      },
                    },
                    value: {
                      color: "#ff5722",
                      formatter(val) {
                        return `${Number(val).toLocaleString()} 원`;
                      },
                    },
                  },
                },
              },
            }}
            series={[
              Number(inNout?.netAssets),
              Number(inNout?.netIncome),
              Number(inNout?.totalExpenses),
              Number(inNout?.budget),
            ]}
          />
        </InNoutChart>
        <InNoutChart>
          <Chart
            type="donut"
            options={{
              title: {
                text: "자본 / 부채 비율",
                style: {
                  color: "cornflowerblue",
                  fontSize: "20px",
                  fontWeight: 600,
                },
              },
              labels: ["자본", "부채"],
              plotOptions: {
                pie: {
                  donut: {
                    labels: {
                      show: true,
                      total: {
                        show: true,
                        color: "#ff5722",
                        formatter() {
                          return `${Number(
                            inNout?.totalAssets
                          ).toLocaleString()} 원`;
                        },
                      },
                      value: {
                        show: true,
                        color: "#ff5722",
                        formatter(val) {
                          return `${Number(val).toLocaleString()} 원`;
                        },
                      },
                    },
                  },
                },
              },
              series: [Number(inNout?.capital), Number(inNout?.liabilities)],
              dataLabels: {
                formatter(val) {
                  return (
                    (Number(inNout?.totalAssets) * Number(val)) /
                    100
                  ).toLocaleString();
                },
              },
            }}
            series={[Number(inNout?.capital), Number(inNout?.liabilities)]}
          />
        </InNoutChart>
        <InNoutChart>
          <Chart
            type="bar"
            options={{
              title: {
                text: "회계그래프",
                style: {
                  color: "cornflowerblue",
                  fontSize: "20px",
                  fontWeight: 600,
                },
              },
              xaxis: {
                categories: [
                  "부채비율",
                  "자기자본비율",
                  "이익률",
                  "자기자본회수기간",
                ],
                labels: {
                  style: {
                    colors: ["#ff5722", "#4db8ff", "#0ff212", "#6A5ACD"],
                    fontSize: "15px",
                    fontWeight: 700,
                  },
                },
              },
              yaxis: {
                labels: {
                  formatter(val) {
                    return val + "%";
                  },
                  style: {
                    colors: ["#00bcd4"],
                    fontSize: "15px",
                    fontWeight: 400,
                  },
                },
              },
            }}
            series={[
              {
                name: "companyInNout",
                data: [
                  {
                    x: "부채비율",
                    y: Number(inNout?.debtRatio?.toLocaleString()),
                    fillColor: "#ff5722",
                  },
                  {
                    x: "자기자본비율",
                    y: Number(inNout?.equityRatio?.toLocaleString()),
                    fillColor: "#4db8ff",
                  },
                  {
                    x: "이익률",
                    y: Number(inNout?.profitMargin?.toLocaleString()),
                    fillColor: "#0ff212",
                  },
                  {
                    x: "자기자본회수기간",
                    y: Number(inNout?.roe?.toLocaleString()),
                    fillColor: "#6A5ACD",
                  },
                ],
                zIndex: 1,
                type: "column",
              },
            ]}
            height="100%"
          />
        </InNoutChart>
      </InNoutWrapper>
    </>
  );
};
export default CompanyInNout;
