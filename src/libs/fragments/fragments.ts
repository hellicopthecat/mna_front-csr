import {gql} from "@apollo/client";

export const CONNECTCOMPANY_FRAG = gql`
  fragment ConnectCompanyFrag on Company {
    id
    createdAt
    updateAt
    companyLogo
    companyName
    isManager
    isOwned
    connectedCompany {
      id
      companyName
    }
    connectedCompanyCount
    connectingCompany {
      id
      companyName
    }
    connectingCompanyCount
  }
`;

export const MY_VACATION_FRAG = gql`
  fragment MyVacationFrag on Vacation {
    id
    createdAt
    updateAt
    totalVacation
    restVacation
    specialVation
    sickLeave
  }
`;
