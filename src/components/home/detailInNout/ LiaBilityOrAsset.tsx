import styled from "styled-components";
import {BtnTheme} from "../../btnTheme";
export interface IAssetsProps {
  title: string;
  total: number;
  assets?: [
    {
      id?: number;
      value?: number;
      assests?: boolean;
      current?: boolean;
      enLDesc?: string;
      enLId?: string;
      enLName?: string;
      enLType?: string;
    }
  ];
}
const LiaBilityOrAssetCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h3 {
    font-size: 30px;
  }
`;
const LiaBilityOrAssetTable = styled.table`
  overflow-y: scroll;
  border: 1px solid ${(props) => props.theme.secondary};
`;
const LiaBilityOrAssetHeader = styled.thead`
  th {
    padding: 20px;
  }
`;
const LiaBilityOrAssetBody = styled.tbody`
  tr {
    border: 1px solid ${(props) => props.theme.secondary};
    th,
    td {
      vertical-align: middle;
      align-items: center;
      padding: 10px;
      text-align: center;
    }
  }
`;
const LiaBilityOrAssetFooter = styled.tfoot`
  * {
    padding: 20px;
  }
  th {
    text-align: end;
  }
  td {
    text-align: center;
  }
`;
const LiaBilityOrAssetBadge = styled.p<{$asset?: boolean; $current?: boolean}>`
  background-color: ${(props) =>
    props.$asset
      ? props.theme.badge
      : !props.$asset
      ? props.theme.btnColor
      : props.$current
      ? props.theme.secondary
      : !props.$current
      ? props.theme.subBadge
      : props.theme.primary};
  padding: 3px 5px;
  border-radius: 4px;
`;
const LiaBilityOrAsset = ({title, total, assets}: IAssetsProps) => {
  return (
    <LiaBilityOrAssetCont>
      <h3>{title}</h3>
      <LiaBilityOrAssetTable>
        <LiaBilityOrAssetHeader>
          <tr>
            <th>자산ID</th>
            <th>자산값</th>
            <th>자산고유ID</th>
            <th>자산제목</th>
            <th>자산유형</th>
            <th>자산유형마커</th>
            <th>자산설명</th>
            <th>편집</th>
          </tr>
        </LiaBilityOrAssetHeader>
        <LiaBilityOrAssetBody>
          {assets?.map((asset) => (
            <tr key={asset.id}>
              <th>{asset.id}</th>
              <td>₩ {!asset.value ? 0 : asset.value.toLocaleString()}</td>
              <td>{asset.enLId}</td>
              <td>{asset.enLName}</td>
              <td>{asset.enLType}</td>
              <td>
                {asset?.assests ? (
                  <LiaBilityOrAssetBadge $asset={asset.assests}>
                    자산
                  </LiaBilityOrAssetBadge>
                ) : (
                  <LiaBilityOrAssetBadge $asset={!asset.assests}>
                    부채
                  </LiaBilityOrAssetBadge>
                )}
                {asset?.current ? (
                  <LiaBilityOrAssetBadge $current={asset.current}>
                    유동
                  </LiaBilityOrAssetBadge>
                ) : (
                  <LiaBilityOrAssetBadge $current={!asset.current}>
                    비유동
                  </LiaBilityOrAssetBadge>
                )}
              </td>
              <td>
                {!asset.enLDesc
                  ? "미작성"
                  : `${asset.enLDesc.substring(0, 15)}...`}
              </td>
              <td>
                <BtnTheme
                  text="편집"
                  width="45px"
                  height="25px"
                  fontSize="12px"
                />
              </td>
            </tr>
          ))}
        </LiaBilityOrAssetBody>
        <LiaBilityOrAssetFooter>
          <tr>
            <th>{title}</th>
            <td>{!total ? 0 : total.toLocaleString()} 원</td>
          </tr>
        </LiaBilityOrAssetFooter>
      </LiaBilityOrAssetTable>
    </LiaBilityOrAssetCont>
  );
};
export default LiaBilityOrAsset;
