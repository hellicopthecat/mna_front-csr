import {gql} from "@apollo/client";
import {COMPANY_FRAG} from "./companyFrag";

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

export const SEE_MY_PROFILE_FRAG = gql`
${COMPANY_FRAG}
fragment SeeMyProfielFrag on User{
    ownComapny{...COMPANY_FRAG}
    hasCompanyCount
    manageCompany{...COMPANY_FRAG}
    manageCompanyCount
    salary{}
    vacation{}
}
`;
