import {gql} from "@apollo/client";

import {INCOME_EXPEND_FRAG} from "./incomeExpendFrag";
import {COMPANY_FRAG} from "./userFrag";

export const PRODUCT_FRAG = gql`
  fragment ProductFrag on Product {
    id
    createdAt
    updateAt
    itemProductId
    itemName
    itemModelName
    itemPhoto
    itemType
    itemCount
    itemPrice
    itemDesc
    company {
      ...CompanyFrag
    }
    incomeExpend {
      ...IncomeExpendFrag
    }
    incomeExpendTypeId
    companyId
  }
  ${COMPANY_FRAG}
  ${INCOME_EXPEND_FRAG}
`;
