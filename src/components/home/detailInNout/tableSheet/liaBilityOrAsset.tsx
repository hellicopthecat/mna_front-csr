import {AnchorTheme} from "../../../btnTheme";
import {Outlet} from "react-router-dom";
import {
  LiaBilityOrAssetBadge,
  LiaBilityOrAssetBody,
  LiaBilityOrAssetCont,
  LiaBilityOrAssetFooter,
  LiaBilityOrAssetHeader,
  LiaBilityOrAssetTable,
} from "./liaBilityOrAsset.style";

export interface IAssetsProps {
  inOutId: number;
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

const LiaBilityOrAsset = ({title, total, assets, inOutId}: IAssetsProps) => {
  return (
    <>
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
            {assets?.map((asset, index) => (
              <tr key={index}>
                <th>{asset.id}</th>
                <td>₩ {!asset.value ? 0 : asset.value.toLocaleString()}</td>
                <td>{asset.enLId}</td>
                <td>{asset.enLName}</td>
                <td>{asset.enLType}</td>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "5px",
                  }}
                >
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
                    : `${
                        asset.enLDesc.length > 10
                          ? `${asset.enLDesc.slice(0, 10)}...`
                          : asset.enLDesc
                      }`}
                </td>
                <td>
                  <AnchorTheme
                    href={`${inOutId}/${asset.id}`}
                    text="편집"
                    width="45px"
                    height="25px"
                    fontSize="12px"
                    center
                  />
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={9}>더보기</td>
            </tr>
          </LiaBilityOrAssetBody>
          <LiaBilityOrAssetFooter>
            <tr>
              <th>{title}</th>
              <td>{!total ? 0 : total.toLocaleString()} 원</td>
            </tr>
          </LiaBilityOrAssetFooter>
        </LiaBilityOrAssetTable>
      </LiaBilityOrAssetCont>
      <Outlet />
    </>
  );
};
export default LiaBilityOrAsset;
