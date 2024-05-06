import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {useParams} from "react-router-dom";
import {EQUITY_LIABILITIES_FRAG} from "../../../../libs/fragments/equityLiabilitiesFrag";
import {INCOME_EXPEND_FRAG} from "../../../../libs/fragments/incomeExpendFrag";
import {COMPANY_INNOUT_FRAG} from "../../../../libs/fragments/inNoutFrag";
import {Query} from "../../../../libs/__generated__/graphql";
import styled from "styled-components";
import LiaBilityOrAsset, {
  IAssetsProps,
} from "../../../../components/home/detailInNout/tableSheet/liaBilityOrAsset";
import DetailInNoutNav from "../../../../components/home/detailInNout/detailInNoutNav";
import AccountInfo from "../../../../components/home/detailInNout/accountInfo/accountInfo";
import {useAppSelector} from "../../../../hooks/storeHook";
import IncomeExpendTable, {
  IIncomeExpendProps,
} from "../../../../components/home/detailInNout/incomeExpendTable";

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
  const {data, loading} = useQuery(DETAIL_INNOUT, {
    variables: {companyName: params.id},
  });
  const INNOUT = data?.searchCompany.companyInNout;
  return (
    <DetialInNoutCont>
      {loading ? (
        <div>loading</div>
      ) : (
        <>
          <DetailInNoutNav />
          <AccountInfo
            accountID={INNOUT?.id as number}
            accountDesc={INNOUT?.accountDesc + ""}
            accountNum={INNOUT?.accountNum + ""}
            accountName={INNOUT?.accountName + ""}
          />
          {inNoutMode === 1 && (
            <LiaBilityOrAsset
              inOutId={INNOUT?.id as number}
              title="총자산"
              total={INNOUT?.totalAssets as number}
              assets={INNOUT?.totalAssetsDesc as IAssetsProps["assets"]}
            />
          )}
          {inNoutMode === 2 && (
            <LiaBilityOrAsset
              inOutId={INNOUT?.id as number}
              title="유동자산"
              total={INNOUT?.currentAssets as number}
              assets={INNOUT?.currentAssetsDesc as IAssetsProps["assets"]}
            />
          )}
          {inNoutMode === 3 && (
            <LiaBilityOrAsset
              inOutId={INNOUT?.id as number}
              title="비유동자산"
              total={INNOUT?.nonCurrentAssets as number}
              assets={INNOUT?.nonCurrentAssetsDesc as IAssetsProps["assets"]}
            />
          )}
          {inNoutMode === 4 && (
            <LiaBilityOrAsset
              inOutId={INNOUT?.id as number}
              title="유동부채"
              total={INNOUT?.currentLiabilities as number}
              assets={INNOUT?.currentLiabilitiesDesc as IAssetsProps["assets"]}
            />
          )}
          {inNoutMode === 5 && (
            <LiaBilityOrAsset
              inOutId={INNOUT?.id as number}
              title="비유동부채"
              total={INNOUT?.nonCurrentLiabilities as number}
              assets={
                INNOUT?.nonCurrentLiabilitiesDesc as IAssetsProps["assets"]
              }
            />
          )}
          {inNoutMode === 6 && (
            <IncomeExpendTable
              title="수입모델"
              total={INNOUT?.incomeMoney as number}
              iNe={INNOUT?.incomeModel as IIncomeExpendProps["iNe"]}
            />
          )}
          {inNoutMode === 7 && (
            <IncomeExpendTable
              title="지출모델"
              total={INNOUT?.expendMoney as number}
              iNe={INNOUT?.expendModel as IIncomeExpendProps["iNe"]}
            />
          )}
        </>
      )}
    </DetialInNoutCont>
  );
};
export default DetailEveryInNout;
