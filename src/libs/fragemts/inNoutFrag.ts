import {DocumentNode, gql} from "@apollo/client";
import {EQUITY_LIABILITIES_FRAG} from "./equityLiabilitiesFrag";
import {INCOME_EXPEND_FRAG} from "./incomeExpendFrag";

export const INNOUT_FRAG: DocumentNode = gql`
  ${EQUITY_LIABILITIES_FRAG}
  ${INCOME_EXPEND_FRAG}
  fragment InNoutFrag on InNout {
    id
    createdAt
    updateAt
    budget
    accountNum
    accountName
    accountDesc
    totalAssets
    totalAssetsDesc {
      ...EQUITY_LIABILITIES_FRAG
    }
    currentAssets
    currentAssetsDesc {
      ...EQUITY_LIABILITIES_FRAG
    }
    nonCurrentAssets
    nonCurrentAssetsDesc {
      ...EQUITY_LIABILITIES_FRAG
    }
    currentLiabilities
    currentLiabilitiesDesc {
      ...EQUITY_LIABILITIES_FRAG
    }
    nonCurrentLiabilities
    nonCurrentLiabilitiesDesc {
      ...EQUITY_LIABILITIES_FRAG
    }
    capital
    liabilities
    netAssets
    netIncome
    totalRevenue
    totalExpenses
    profitMargin
    equityRatio
    debtRatio
    roe
    incomeModel {
      ...INCOME_EXPEND_FRAG
    }
    incomeMoney
    expendModel {
      ...INCOME_EXPEND_FRAG
    }
    expendMoney
  }
`;
