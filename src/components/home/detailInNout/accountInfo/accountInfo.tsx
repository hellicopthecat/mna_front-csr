import {AnchorTheme} from "../../../btnTheme";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {IEditInNoutProps} from "../../../../types/types";
import {useParams} from "react-router-dom";
import {
  AccountCont,
  AccountInfoData,
  AccountInfoEdit,
  AccountWrapper,
} from "./accountInfo.style";
import useAccountInfoEditMutate from "./accountInfoHook";

interface IAccountProps {
  accountID: number;
  accountName: string;
  accountNum: string;
  accountDesc: string;
}

const AccountInfo = ({
  accountID,
  accountName,
  accountNum,
  accountDesc,
}: IAccountProps) => {
  //hook
  const params = useParams();
  const {handleEditInNout} = useAccountInfoEditMutate();
  //state
  const [edit, setEdit] = useState(false);

  //form
  const {register, getValues, handleSubmit} = useForm<IEditInNoutProps>({
    defaultValues: {
      accountID,
      companyName: params.id,
      accountName,
      accountNum,
      accountDesc,
    },
  });
  //fn
  const handleEditMode = () => setEdit(true);
  const handleNomalMode = () => setEdit(false);
  const handleEdit = () => {
    const {accountID, companyName, accountDesc, accountName, accountNum} =
      getValues();
    handleEditInNout({
      accountID,
      companyName,
      accountDesc,
      accountName,
      accountNum,
    });
    setEdit(false);
  };
  return (
    <AccountWrapper>
      <AccountCont>
        <div>
          <AccountInfoData>
            <span>계좌이름</span>
            {!edit && <p>{!accountName ? "미기입" : accountName}</p>}
            {edit && (
              <input
                {...register("accountName")}
                type="text"
                defaultValue={accountName}
              />
            )}
          </AccountInfoData>
          <span>|</span>
          <AccountInfoData>
            <span>계좌번호</span>
            {!edit && <p>{!accountNum ? "미기입" : accountNum}</p>}
            {edit && (
              <input
                {...register("accountNum")}
                type="text"
                defaultValue={accountNum}
              />
            )}
          </AccountInfoData>
          <span>|</span>
          <AccountInfoData>
            <span>계좌설명</span>
            {!edit && <p>{!accountDesc ? "미기입" : accountDesc}</p>}
            {edit && (
              <input
                {...register("accountDesc")}
                type="text"
                defaultValue={accountDesc}
              />
            )}
          </AccountInfoData>
        </div>
        {!edit && (
          <AccountInfoEdit onClick={handleEditMode}>편집</AccountInfoEdit>
        )}
        {edit && (
          <AccountInfoEdit onClick={handleSubmit(handleEdit)}>
            저장
          </AccountInfoEdit>
        )}
        {edit && (
          <AccountInfoEdit onClick={handleNomalMode}>취소</AccountInfoEdit>
        )}
      </AccountCont>
      <AnchorTheme
        href={`${accountID}/createAssets`}
        text="자산생성"
        width="100px"
        height="30px"
      />
    </AccountWrapper>
  );
};
export default AccountInfo;
