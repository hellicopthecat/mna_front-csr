import {IWorkersProps} from "../../../types/types";
import {Link, useParams} from "react-router-dom";
import {
  WorkerBadge,
  WorkerHeader,
  WorkerMiniCard,
  WorkerMiniCardCont,
  WorkerWrapper,
} from "./workers.styled";
import {IParamID} from "../../../types/routerType";

const WorkersPage = ({worker}: IWorkersProps) => {
  const params = useParams<keyof IParamID>();

  return (
    <WorkerWrapper>
      <WorkerHeader>
        <h2>직원관리</h2>
        <Link to={`/company/${params.id}/workers`}>더보기</Link>
      </WorkerHeader>
      <WorkerMiniCardCont>
        {worker?.map((person) => (
          <WorkerMiniCard key={person.id} $vacation={person.isOnVacation}>
            <h3>{person.username}</h3>
            {person.isOnVacation && (
              <WorkerBadge $vacation={person.isOnVacation}>휴가중</WorkerBadge>
            )}
            {!person.isOnVacation && (
              <WorkerBadge $vacation={!person.isOnVacation}>근무중</WorkerBadge>
            )}
          </WorkerMiniCard>
        ))}
      </WorkerMiniCardCont>
    </WorkerWrapper>
  );
};
export default WorkersPage;
