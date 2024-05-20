import {useParams} from "react-router-dom";
import {AnchorTheme, BtnTheme} from "../../../btnTheme";
import {IParamID} from "../../../../types/routerType";
import React from "react";
import {
  VCardAnchor,
  VCardBadge,
  VCardInfo,
  WorkerVacationCard,
} from "./workerVacation.style";

export interface IWorkerVacationProps {
  workers?: {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
    isOnVacation: boolean;
    vacation?: [
      {
        id: number;
        joinCompanyDate: string;
        annual: number;
        other: number;
        useAnnualVacation: number;
        restVacation: number;
      }
    ];
    salary?: [
      {
        id: number;
        beforeTaxMonthlySalary: number;
        afterTaxMonthlySalary: number;
        annualSalary: number;
      }
    ];
  };
}
const WorkerVacation = ({workers}: IWorkerVacationProps) => {
  //hook
  const param = useParams<keyof IParamID>();

  //fn
  const joinCompanyDate = (date: string) =>
    new Date(Number(date)).toLocaleString();

  return (
    <WorkerVacationCard>
      <VCardInfo>
        {workers?.isOnVacation ? (
          <VCardBadge $isvacation={workers?.isOnVacation}>휴가중</VCardBadge>
        ) : (
          <VCardBadge $isvacation={!workers?.isOnVacation}>업무중</VCardBadge>
        )}
      </VCardInfo>
      <VCardInfo>
        <span>이름</span>
        <p>
          {workers?.firstName} {workers?.lastName}
        </p>
      </VCardInfo>
      <VCardInfo>
        <span>아이디</span>
        <p>{workers?.username}</p>
      </VCardInfo>
      <VCardInfo>
        <span>이메일</span>
        <p>{workers?.email}</p>
      </VCardInfo>
      <VCardInfo>
        <span>휴대전화</span>
        <p>{workers?.phone}</p>
      </VCardInfo>
      {workers?.vacation?.map((vacation) => (
        <React.Fragment key={vacation.id}>
          <VCardInfo>
            <span>입사일</span>
            <p>{joinCompanyDate(vacation?.joinCompanyDate)}</p>
          </VCardInfo>
          <VCardInfo>
            <span>연차</span>
            <p>{vacation.annual}</p>
          </VCardInfo>
        </React.Fragment>
      ))}
      {workers?.salary?.map((salary) => (
        <React.Fragment key={salary.id}>
          <VCardInfo>
            <span>급여</span>
            <p>{salary.annualSalary}</p>
          </VCardInfo>
          <VCardInfo>
            <span>세후</span>
            <p>{salary.afterTaxMonthlySalary}</p>
          </VCardInfo>
          <VCardInfo>
            <span>세전</span>
            <p>{salary.beforeTaxMonthlySalary}</p>
          </VCardInfo>
        </React.Fragment>
      ))}
      <VCardInfo>
        {workers?.vacation && workers?.vacation?.length > 0 && (
          <AnchorTheme
            href="/"
            text="연차수정"
            width="70px"
            height="30px"
            fontSize="14px"
          />
        )}
        {workers?.salary && workers?.salary?.length > 0 && (
          <AnchorTheme
            href="/"
            text="급여수정"
            width="70px"
            height="30px"
            fontSize="14px"
          />
        )}
      </VCardInfo>
      <VCardAnchor>
        {workers?.vacation && workers?.vacation?.length < 1 && (
          <AnchorTheme
            href={`/company/${param.id}/workers/${workers.id}/create-vacation`}
            text="휴가생성"
            width="70px"
            height="30px"
            fontSize="14px"
          />
        )}
        {workers?.salary && workers?.salary?.length < 1 && (
          <AnchorTheme
            href={`/company/${param.id}/workers/${workers.id}/create-salary`}
            text="급여생성"
            width="70px"
            height="30px"
            fontSize="14px"
          />
        )}
      </VCardAnchor>
    </WorkerVacationCard>
  );
};
export default WorkerVacation;
