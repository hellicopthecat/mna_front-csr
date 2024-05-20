import {gql} from "@apollo/client";

export const VACATION_FRAG = gql`
  fragment VacationFrag on Vacation {
    id
    createdAt
    updateAt
    joinCompanyDate
    annual
    other
    useAnnualVacation
    restVacation
  }
`;
