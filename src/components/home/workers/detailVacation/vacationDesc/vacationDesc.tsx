import {TVacation} from "../../../../../libs/__generated__/graphql";
import {convertDate} from "../../../../../libs/util";

export interface IVacationDescProp {
  desc?: {
    id: number;
    createdAt: string;
    vacationType: TVacation;
    day: number;
    description: string;
  };
}
const VacationDesc = ({desc}: IVacationDescProp) => {
  return (
    <tr>
      <td>{desc?.id}</td>
      <td>{convertDate(Number(desc?.createdAt))}</td>
      <td>{desc?.vacationType}</td>
      <td>{desc?.day}</td>
      <td>{desc?.description}</td>
    </tr>
  );
};
export default VacationDesc;
