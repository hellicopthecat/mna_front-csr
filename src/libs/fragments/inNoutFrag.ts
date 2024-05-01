import {gql} from "@apollo/client";

export const COMPANY_INNOUT_FRAG = gql`
  fragment CompanyInNoutFrag on InNout {
    id
    budget
    totalAssets
    capital
    liabilities
    totalRevenue
    totalExpenses
    profitMargin
    roe
    netAssets
    netIncome
    debtRatio
    equityRatio
  }
`;
