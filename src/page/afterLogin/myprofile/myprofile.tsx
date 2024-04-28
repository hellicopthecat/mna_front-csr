import {Link, Outlet, useLocation} from "react-router-dom";
import useUser from "../../../hooks/useUser";
import {
  Avatar,
  MyProfileLeft,
  MyProfileNav,
  MyProfileNavAnchor,
  MyProfileNavList,
  MyProfileRight,
  MyProfileWrapper,
  MyprofileUsername,
} from "./myprofile.style";

const Myprofile = () => {
  const {pathname} = useLocation();
  const {data} = useUser();
  const userData = data?.seeMyprofile;
  return (
    <MyProfileWrapper>
      <MyProfileLeft>
        <h2>마이페이지</h2>
        <MyprofileUsername>
          <Avatar />
          <p>{userData?.username}</p>
          <p>{userData?.email}</p>
        </MyprofileUsername>
        <MyProfileNav>
          <nav>
            <MyProfileNavList>
              <MyProfileNavAnchor
                $path={pathname === `/myprofile/${userData?.username}/userinfo`}
              >
                <Link to={`/myprofile/${userData?.username}/userinfo`}>
                  내 프로필
                </Link>
              </MyProfileNavAnchor>
              <MyProfileNavAnchor
                $path={pathname === `/myprofile/${userData?.username}/company`}
              >
                <Link to={`/myprofile/${userData?.username}/company`}>
                  내 회사
                </Link>
              </MyProfileNavAnchor>
            </MyProfileNavList>
          </nav>
        </MyProfileNav>
      </MyProfileLeft>
      <MyProfileRight>
        <Outlet />
      </MyProfileRight>
    </MyProfileWrapper>
  );
};

export default Myprofile;
