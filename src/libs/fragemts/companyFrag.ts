import {gql} from "@apollo/client";
import {USER_FRAG} from "./userFrag";

export const COMPANY_FRAG = gql`
  ${USER_FRAG}
  fragment CompanyFrag on Company {
    id
    createdAt
    updateAt
    companyName
    companyLogo
    companyOwner {
      ...USER_FRAG
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
      ...USER_FRAG
    }
    isOwned
    isManager
  }
`;
