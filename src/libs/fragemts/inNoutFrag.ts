import {DocumentNode, gql} from "@apollo/client";
import {EQUITY_LIABILITIES_FRAG} from "./equityLiabilitiesFrag";
import {INCOME_EXPEND_FRAG} from "./incomeExpendFrag";

export const INNOUT_FRAG: DocumentNode = gql`
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
      ...EquityLiabilitiesFrag
    }
    currentAssets
    currentAssetsDesc {
      ...EquityLiabilitiesFrag
    }
    nonCurrentAssets
    nonCurrentAssetsDesc {
      ...EquityLiabilitiesFrag
    }
    currentLiabilities
    currentLiabilitiesDesc {
      ...EquityLiabilitiesFrag
    }
    nonCurrentLiabilities
    nonCurrentLiabilitiesDesc {
      ...EquityLiabilitiesFrag
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
      ...IncomeExpendFrag
    }
    incomeMoney
    expendModel {
      ...IncomeExpendFrag
    }
    expendMoney
  }
  ${EQUITY_LIABILITIES_FRAG}
  ${INCOME_EXPEND_FRAG}
`;
