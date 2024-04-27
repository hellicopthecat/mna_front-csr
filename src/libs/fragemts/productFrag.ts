import {gql} from "@apollo/client";
import {COMPANY_FRAG} from "./companyFrag";

export const PRODUCT_FRAG = gql`
${COMPANY_FRAG}
fragment ProductFrag on Product{
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
          ...COMPANY_FRAG
        }
        incomeExpend {
          
        }
        incomeExpendTypeId
        companyId
}
`;
