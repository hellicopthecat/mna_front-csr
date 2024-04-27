import {gql} from "@apollo/client";

export const EQUITY_LIABILITIES_FRAG = gql`
  fragment EquityLiabilitiesFrag on EquityLiabuilities {
    id
    createdAt
    updateAt
    enLId
    enLName
    enLType
    enLDesc
    current
    assests
    value
  }
`;
