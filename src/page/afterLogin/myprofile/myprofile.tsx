import {NavLink, Outlet, useLocation} from "react-router-dom";
import useUser from "../../../hooks/useUser";
import {
  MyProfileLeft,
  MyProfileNav,
  MyProfileNavAnchor,
  MyProfileNavList,
  MyProfileRight,
  MyProfileWrapper,
  MyprofileUsername,
} from "./myprofile.style";
import {urlName} from "../../../libs/constants";
import {BtnTheme} from "../../../components/btnTheme";
import {useAppDispatch} from "../../../hooks/storeHook";
import {removeToken} from "../../../redux/tokenSlice";
import {Avatar} from "../../../components/avatar";

const Myprofile = () => {
  const {pathname} = useLocation();
  const {data} = useUser();
  const userData = data?.seeMyprofile;
  const dispatch = useAppDispatch();
  return (
    <MyProfileWrapper>
      <MyProfileLeft>
        <h2>마이페이지</h2>
        <MyprofileUsername>
          <Avatar />
          <p>{userData?.username}</p>
          <p>{userData?.email}</p>
          <BtnTheme
            text="로그아웃"
            width="70px"
            height="25px"
            fontSize="12px"
            handleClick={() => dispatch(removeToken())}
          />
        </MyprofileUsername>
        <MyProfileNav>
          <nav>
            <MyProfileNavList>
              <MyProfileNavAnchor $path={pathname === urlName.home}>
                <NavLink to={urlName.home}>내 프로필</NavLink>
              </MyProfileNavAnchor>
              <MyProfileNavAnchor $path={pathname === urlName.comapny}>
                <NavLink to={urlName.comapny}>내 보유회사</NavLink>
              </MyProfileNavAnchor>
              <MyProfileNavAnchor $path={pathname === urlName.manage}>
                <NavLink to={urlName.manage}>내 관리회사</NavLink>
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
