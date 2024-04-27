import {DocumentNode, gql} from "@apollo/client";
import {PRODUCT_FRAG} from "./productFrag";
import {INNOUT_FRAG} from "./inNoutFrag";

export const INCOME_EXPEND_FRAG: DocumentNode = gql`
  fragment IncomeExpendFrag on IncomeExpend {
    id
    createdAt
    updateAt
    productItem {
      ...ProductFrag
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
      ...InNoutFrag
    }
    inNoutId
    productId
  }
  ${PRODUCT_FRAG}
  ${INNOUT_FRAG}
`;
