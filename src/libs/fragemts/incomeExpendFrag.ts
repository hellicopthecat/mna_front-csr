import {gql} from "@apollo/client";
import {PRODUCT_FRAG} from "./productFrag";
import {INNOUT_FRAG} from "./inNoutFrag";

export const INCOME_EXPEND_FRAG = gql`
  ${PRODUCT_FRAG}
  ${INNOUT_FRAG}
  fragment IncomeExpendFrag on IncomeExpend {
    id
    createdAt
    updateAt
    productItem {
      ...PRODUCT_FRAG
    }
    incomeTrue
    infoSubtitle
    money
    businessDate
    paymentType
    accountSubject
    businessDesc
    paymentsDone
    inNout {
      ...INNOUT_FRAG
    }
    inNoutId
    productId
  }
`;
