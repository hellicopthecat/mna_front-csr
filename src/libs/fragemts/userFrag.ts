import {gql} from "@apollo/client";

export const USER_FRAG = gql`
  fragment UserFrag on User {
    id
    createdAt
    updateAt
    username
    email
    firstName
    lastName
    phone
    avatar
  }
`;
export const COMPANY_FRAG = gql`
  fragment CompanyFrag on Company {
    id
    createdAt
    updateAt
    companyName
    companyLogo
    companyOwner {
      ...UserFrag
    }
    companyAdress {
      id
      createdAt
      updateAt
      adressNum
      country
      city
      streetAdress
      restAdress
    }
    companyManager {
      ...UserFrag
    }
    isOwned
    isManager
  }
  ${USER_FRAG}
`;
export const SALARY_FRAG = gql`
  fragment SalaryFrag on Salary {
    id
    createdAt
    updateAt
    beforeTaxMonthlySalary
    afterTaxMonthlySalary
    annualSalary
    user {
      ...UserFrag
    }
    company {
      ...CompanyFrag
    }
  }
  ${USER_FRAG}
  ${COMPANY_FRAG}
`;
export const VACATION_FRAG = gql`
  fragment VacationFrag on Vacation {
    id
    createdAt
    updateAt
    totalVacation
    restVacation
    specialVation
    sickLeave
    user {
      ...UserFrag
    }
  }
  ${USER_FRAG}
`;

export const SEE_MY_PROFILE_FRAG = gql`
  fragment SeeMyProfileFrag on User {
    ownCompany {
      ...CompanyFrag
    }
    hasCompanyCount
    manageCompany {
      ...CompanyFrag
    }
    manageCompanyCount
    salary {
      ...SalaryFrag
    }
    vacation {
      ...VacationFrag
    }
  }
  ${COMPANY_FRAG}
  ${SALARY_FRAG}
  ${VACATION_FRAG}
`;
