import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../../../hooks/storeHook";
import {nonActiveNav} from "../../../redux/navSlice";

const NavWrapper = styled.nav<{$active: boolean}>`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.4);
  height: 100dvh;
  transform: translateX(${(props) => (props.$active ? "0" : "-100%")});
  transition: 0.2s ease-in-out;
  z-index: 99;
  div {
    background-color: ${(props) => props.theme.secondary};
    width: 30%;
    height: 100%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    z-index: 98;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 20px;
    font-weight: 600;
  }
`;
const NavIcon = styled.svg`
  width: 25px;
  height: 25px;
  color: ${(props) => props.theme.btnTxtColor};
  cursor: pointer;
`;
const NavComp = () => {
  const {clickNav} = useAppSelector((state) => state.activeNav);
  const dispatch = useAppDispatch();
  return (
    <NavWrapper $active={clickNav} onClick={() => dispatch(nonActiveNav())}>
      <div onClick={() => dispatch(nonActiveNav())}>
        <NavIcon
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          onClick={() => dispatch(nonActiveNav())}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </NavIcon>
        <ul>
          <li>홈</li>
          <li>회계</li>
          <li>제품</li>
          <li>수입 / 지출</li>
        </ul>
      </div>
    </NavWrapper>
  );
};
export default NavComp;
