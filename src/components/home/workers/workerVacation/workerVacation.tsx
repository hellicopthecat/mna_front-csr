import {useParams} from "react-router-dom";
import {AnchorTheme} from "../../../btnTheme";
import {IParamID} from "../../../../types/routerType";
import React from "react";
import {
  VCardBadge,
  VCardInfo,
  WorkerVacationCard,
} from "./workerVacation.style";
import {joinCompanyDate} from "../../../../libs/util";

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
        totalVacation: number;
        joinCompanyDate: string;
      }
    ];
    salary?: [
      {
        id: number;
        preTaxMonthlySalary: number;
      }
    ];
  };
}
const WorkerVacation = ({workers}: IWorkerVacationProps) => {
  //hook
  const param = useParams<keyof IParamID>();
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
            <span>총 연차</span>
            <p>{vacation.totalVacation}</p>
          </VCardInfo>
          <AnchorTheme
            href={`/company/${param.id}/workers/${workers?.id}/detail-vacation/${vacation.id}`}
            text="연차보기"
            width="70px"
            height="30px"
            fontSize="14px"
          />
        </React.Fragment>
      ))}
      {workers?.salary?.map((salary) => (
        <React.Fragment key={salary.id}>
          <VCardInfo>
            <span>월급</span>
            <p>{salary.preTaxMonthlySalary.toLocaleString()} 원</p>
          </VCardInfo>
          <AnchorTheme
            href={`/company/${param.id}/workers/${workers?.id}/detail-salary/${salary.id}`}
            text="급여보기"
            width="70px"
            height="30px"
            fontSize="14px"
          />
        </React.Fragment>
      ))}
      <VCardInfo>
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
      </VCardInfo>
    </WorkerVacationCard>
  );
};
export default WorkerVacation;
