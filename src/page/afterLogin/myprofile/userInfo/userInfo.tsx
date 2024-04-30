import {Avatar} from "../../../../components/avatar";
import {AnchorTheme} from "../../../../components/btnTheme";
import MyprofileLayout from "../../../../components/myProfile/myProfileLayout";
import useUser from "../../../../hooks/useUser";

import {
  UserProfileDataBody,
  UserProfileDataBodyCont,
  UserProfileDataHead,
} from "./userInfo.style";

const UserProfileInfo = () => {
  const {data} = useUser();
  const userData = data?.seeMyprofile;
  return (
    <MyprofileLayout>
      <UserProfileDataHead>
        <Avatar />
        <h3>{userData?.username}</h3>
        <p>{userData?.email}</p>
      </UserProfileDataHead>
      <UserProfileDataBody>
        <UserProfileDataBodyCont>
          <h3>전화번호</h3>
          <p>{userData?.phone}</p>
        </UserProfileDataBodyCont>
        <UserProfileDataBodyCont>
          <h3>이름(성)</h3>
          <p>{userData?.firstName}</p>
        </UserProfileDataBodyCont>
        <UserProfileDataBodyCont>
          <h3>이름</h3>
          <p>{userData?.lastName}</p>
        </UserProfileDataBodyCont>
      </UserProfileDataBody>
      <AnchorTheme
        href={`/${userData?.username}/edit`}
        text="프로필 편집하기"
      />
    </MyprofileLayout>
  );
};
export default UserProfileInfo;
