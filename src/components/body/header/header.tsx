import {Link} from "react-router-dom";
import {urlName} from "../../../libs/constants";
import {
  HeaderLeft,
  HeaderRight,
  HeaderWrapper,
  Icon,
  UserInfo,
} from "./header.style";
import useUser from "../../../hooks/useUser";
import {useAppDispatch, useAppSelector} from "../../../hooks/storeHook";
import {setDark, setLight} from "../../../redux/themeSlice";
import {removeToken} from "../../../redux/tokenSlice";
import {activeNav} from "../../../redux/navSlice";
import {Avatar} from "../../avatar";
import HeaderSearch from "./headerSearch/headerSearch";

const HeaderComp = () => {
  //custom hook
  const {data} = useUser();
  const user = data?.seeMyprofile;
  //redux
  const {theme} = useAppSelector((state) => state.theme);
  const {companyId, companyName} = useAppSelector(
    (state) => state.companyState
  );
  const dispatch = useAppDispatch();
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <Icon
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          onClick={() => dispatch(activeNav())}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </Icon>
        <Link to={`/company/${companyId}`}>
          <h1>{companyName}</h1>
        </Link>
      </HeaderLeft>
      <HeaderRight>
        <HeaderSearch />
        <UserInfo>
          <Link to={urlName.home}>
            <Avatar width="20px" height="20px" />
          </Link>
          <Link to={urlName.home}>{user && <p>{user.username}</p>}</Link>
        </UserInfo>
        {!theme ? (
          <Icon
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            $icon={1}
            onClick={() => dispatch(setDark())}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </Icon>
        ) : (
          <Icon
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            $icon={2}
            onClick={() => dispatch(setLight())}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </Icon>
        )}
        <Icon
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          onClick={() => dispatch(removeToken())}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
          />
        </Icon>
      </HeaderRight>
    </HeaderWrapper>
  );
};
export default HeaderComp;
