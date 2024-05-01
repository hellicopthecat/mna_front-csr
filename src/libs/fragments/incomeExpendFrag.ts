import {gql} from "@apollo/client";

export const INCOME_EXPEND_FRAG = gql`
  fragment IncomeExpendFrag on IncomeExpend {
    id
    incomeTrue
    infoSubtitle
    money
    businessDate
    paymentType
    accountCode
    businessDesc
    paymentsDone
  }
`;
