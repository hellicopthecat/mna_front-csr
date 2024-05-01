import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {useParams} from "react-router-dom";
import {EQUITY_LIABILITIES_FRAG} from "../../../../libs/fragments/equityLiabilitiesFrag";
import {INCOME_EXPEND_FRAG} from "../../../../libs/fragments/incomeExpendFrag";
import {COMPANY_INNOUT_FRAG} from "../../../../libs/fragments/inNoutFrag";
import {Query} from "../../../../libs/__generated__/graphql";
import styled from "styled-components";
import LiaBilityOrAsset, {
  IAssetsProps,
} from "../../../../components/home/detailInNout/ LiaBilityOrAsset";
import DetailInNoutNav from "../../../../components/home/detailInNout/detailInNoutNav";
import AccountInfo from "../../../../components/home/detailInNout/accountInfo";
import {useAppSelector} from "../../../../hooks/storeHook";

//gql Query
const DETAIL_INNOUT = gql`
  query CompanyInNout($companyName: String!) {
    searchCompany(companyName: $companyName) {
      companyInNout {
        ...CompanyInNoutFrag
        #
        accountNum
        accountName
        accountDesc
        #
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

        incomeMoney
        incomeModel {
          ...IncomeExpendFrag
        }
        expendMoney
        expendModel {
          ...IncomeExpendFrag
        }
      }
    }
  }
  ${COMPANY_INNOUT_FRAG}
  ${INCOME_EXPEND_FRAG}
  ${EQUITY_LIABILITIES_FRAG}
` as DocumentNode | TypedDocumentNode<Query>;

const DetialInNoutCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  h2 {
    font-size: 25px;
  }
`;

//components
const DetailEveryInNout = () => {
  const {inNoutMode} = useAppSelector((state) => state.inNoutNav);
  const params = useParams();
  const {data} = useQuery(DETAIL_INNOUT, {variables: {companyName: params.id}});
  const INNOUT = data?.searchCompany.companyInNout;
  console.log(INNOUT);
  return (
    <DetialInNoutCont>
      <DetailInNoutNav />
      <AccountInfo
        accountDesc={INNOUT?.accountDesc + ""}
        accountNum={INNOUT?.accountNum + ""}
        accountName={INNOUT?.accountName + ""}
      />
      {inNoutMode === 1 && (
        <LiaBilityOrAsset
          title="총자산"
          total={INNOUT?.totalAssets as number}
          assets={INNOUT?.totalAssetsDesc as IAssetsProps["assets"]}
        />
      )}
      {inNoutMode === 2 && (
        <LiaBilityOrAsset
          title="유동자산"
          total={INNOUT?.currentAssets as number}
          assets={INNOUT?.currentAssetsDesc as IAssetsProps["assets"]}
        />
      )}
      {inNoutMode === 3 && (
        <LiaBilityOrAsset
          title="비유동자산"
          total={INNOUT?.nonCurrentAssets as number}
          assets={INNOUT?.nonCurrentAssetsDesc as IAssetsProps["assets"]}
        />
      )}
      {inNoutMode === 4 && (
        <LiaBilityOrAsset
          title="유동부채"
          total={INNOUT?.currentLiabilities as number}
          assets={INNOUT?.currentLiabilitiesDesc as IAssetsProps["assets"]}
        />
      )}
      {inNoutMode === 5 && (
        <LiaBilityOrAsset
          title="비유동부채"
          total={INNOUT?.nonCurrentLiabilities as number}
          assets={INNOUT?.nonCurrentLiabilitiesDesc as IAssetsProps["assets"]}
        />
      )}
      {inNoutMode === 6 && (
        <LiaBilityOrAsset
          title="비유동자산"
          total={INNOUT?.nonCurrentAssets as number}
          assets={INNOUT?.nonCurrentAssetsDesc as IAssetsProps["assets"]}
        />
      )}
      {inNoutMode === 7 && (
        <LiaBilityOrAsset
          title="비유동자산"
          total={INNOUT?.nonCurrentAssets as number}
          assets={INNOUT?.nonCurrentAssetsDesc as IAssetsProps["assets"]}
        />
      )}
    </DetialInNoutCont>
  );
};
export default DetailEveryInNout;
