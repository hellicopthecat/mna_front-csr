import styled from "styled-components";

export const LiaBilityOrAssetCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h3 {
    font-size: 30px;
  }
`;
export const LiaBilityOrAssetTable = styled.table`
  overflow-y: scroll;
  border: 1px solid ${(props) => props.theme.secondary};
`;
export const LiaBilityOrAssetHeader = styled.thead`
  th {
    padding: 20px;
  }
`;
export const LiaBilityOrAssetBody = styled.tbody`
  tr {
    border: 1px solid ${(props) => props.theme.secondary};
    th,
    td {
      vertical-align: middle;
      padding: 10px;
      text-align: center;
    }
  }
`;
export const LiaBilityOrAssetFooter = styled.tfoot`
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
export const LiaBilityOrAssetBadge = styled.p<{
  $asset?: boolean;
  $current?: boolean;
}>`
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
