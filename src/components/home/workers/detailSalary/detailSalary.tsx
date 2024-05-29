import {useNavigate, useParams} from "react-router-dom";
import ModalWrapper from "../../../shareComp/modalWrapper";
import {IParamID} from "../../../../types/routerType";
import {DetailSalaryCont} from "./detailSalary.style";
import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {Query} from "../../../../libs/__generated__/graphql";
import {SALARY_FRAG} from "../../../../libs/fragments/salaryFrag";

const SALARY_QUERY = gql`
  query seeSalary($seeSalaryId: Int!) {
    seeSalary(id: $seeSalaryId) {
      ...SalaryFrag
    }
  }
  ${SALARY_FRAG}
` as DocumentNode | TypedDocumentNode<Query>;
const DetailSalary = () => {
  //hook
  const param = useParams<keyof IParamID>();
  const navigate = useNavigate();
  const {data} = useQuery(SALARY_QUERY, {
    variables: {seeSalaryId: Number(param.salaryID)},
  });

  //fc
  const goBack = () => navigate(`/company/${param.id}/workers`);
  return (
    <ModalWrapper goBack={goBack}>
      <DetailSalaryCont>
        <div>
          <p>세전급여</p>
          <span>
            {!data?.seeSalary.preTaxMonthlySalary
              ? 0
              : data?.seeSalary.preTaxMonthlySalary}{" "}
            원
          </span>
        </div>
        <div>
          <p>자녀</p>
          <span>
            {!data?.seeSalary.childCount ? 0 : data?.seeSalary.childCount} 원
          </span>
        </div>
        <div>
          <p>연봉</p>
          <span>
            {!data?.seeSalary.annualSalary ? 0 : data?.seeSalary.annualSalary}{" "}
            원
          </span>
        </div>
        <div>
          <p>근로소득공제금액</p>
          <span>
            {!data?.seeSalary.earnIncomeDedution
              ? 0
              : data?.seeSalary.earnIncomeDedution}{" "}
            원
          </span>
        </div>
        <div>
          <p>근로소득금액</p>
          <span>
            {!data?.seeSalary.earnIncomeAmount
              ? 0
              : data?.seeSalary.earnIncomeAmount}{" "}
            원
          </span>
        </div>
        <div>
          <p>인적공제</p>
          <span>
            {!data?.seeSalary.familyDedution
              ? 0
              : data?.seeSalary.familyDedution}{" "}
            원
          </span>
        </div>
        <div>
          <p>연금보험료공제</p>
          <span>
            {!data?.seeSalary.pensionInsuranceDedution
              ? 0
              : data?.seeSalary.pensionInsuranceDedution}{" "}
            원
          </span>
        </div>
        <div>
          <p>특별소득공제</p>
          <span>
            {!data?.seeSalary.specialIncomeDedution
              ? 0
              : data?.seeSalary.specialIncomeDedution}{" "}
            원
          </span>
        </div>
        <div>
          <p>과세표준</p>
          <span>
            {!data?.seeSalary.taxBase ? 0 : data?.seeSalary.taxBase} 원
          </span>
        </div>
        <div>
          <p>산출세액</p>
          <span>
            {!data?.seeSalary.taxCalculate ? 0 : data?.seeSalary.taxCalculate}{" "}
            원
          </span>
        </div>
        <div>
          <p>결정세액</p>
          <span>
            {!data?.seeSalary.taxDetermined ? 0 : data?.seeSalary.taxDetermined}{" "}
            원
          </span>
        </div>
        <div>
          <p>근로소득세액공제</p>
          <span>
            {!data?.seeSalary.earnIncomeTaxCredit
              ? 0
              : data?.seeSalary.earnIncomeTaxCredit}{" "}
            원
          </span>
        </div>
        <div>
          <p>간이세액</p>
          <span>
            {!data?.seeSalary.simplifiedTax ? 0 : data?.seeSalary.simplifiedTax}{" "}
            원
          </span>
        </div>
        <div>
          <p>8세 이상 20세 이하 세액</p>
          <span>
            {!data?.seeSalary.childTax ? 0 : data?.seeSalary.childTax} 원
          </span>
        </div>
      </DetailSalaryCont>
    </ModalWrapper>
  );
};
export default DetailSalary;
