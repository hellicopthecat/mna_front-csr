import {gql, useQuery} from "@apollo/client";
import {USER_FRAG} from "../../../libs/fragments/userFrag";
import {DocumentNode} from "graphql";
import {TypedDocumentNode} from "@graphql-typed-document-node/core";
import {Query} from "../../../libs/__generated__/graphql";
import {Outlet, useParams} from "react-router-dom";
import {IParamID} from "../../../types/routerType";
import WorkerVacation, {
  IWorkerVacationProps,
} from "./workerVacation/workerVacation";
import {
  WorkersCardCont,
  WorkersHeaderNav,
  WorkersPageWrapper,
} from "./companyWorkers.style";
import {AnchorTheme, BtnTheme} from "../../btnTheme";

const SEE_SELECTED_COMPANY = gql`
  query seeCompanyWorkers($seeCompanyWorkerId: Int!) {
    seeCompanyWorker(id: $seeCompanyWorkerId) {
      ...UserFrag
      vacation {
        id
        joinCompanyDate
        totalVacation
        companyId
      }
      salary {
        id
        preTaxMonthlySalary
      }
    }
  }
  ${USER_FRAG}
` as DocumentNode | TypedDocumentNode<Query>;

const CompanyWorkers = () => {
  const params = useParams<keyof IParamID>();
  const {data, error} = useQuery(SEE_SELECTED_COMPANY, {
    variables: {seeCompanyWorkerId: Number(params.id)},
  });
  const workers = data?.seeCompanyWorker;
  console.log(error);
  return (
    <WorkersPageWrapper>
      <WorkersHeaderNav>
        <h2>인사관리</h2>
        <AnchorTheme
          text="직원등록"
          href={`/company/${params.id}/workers/regist-worker`}
          width="80px"
          height="30px"
          fontSize="14px"
        />
      </WorkersHeaderNav>

      <WorkersCardCont>
        {workers?.map((worker) => (
          <WorkerVacation
            key={worker?.id}
            workers={worker as IWorkerVacationProps["workers"]}
          />
        ))}
      </WorkersCardCont>
      {workers?.length === 8 && <BtnTheme text="더보기" />}
      <Outlet />
    </WorkersPageWrapper>
  );
};

export default CompanyWorkers;
