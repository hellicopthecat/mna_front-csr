import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../../../hooks/storeHook";
import {nonActiveNav} from "../../../redux/navSlice";

const NavWrapper = styled.nav<{$active: boolean}>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.secondary};
  width: 30%;
  height: 100dvh;
  padding: 20px;
  position: absolute;
  transform: translateX(${(props) => (props.$active ? "0" : "-100%")});
  transition: 0.4s ease-in-out;
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
    <NavWrapper $active={clickNav}>
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
        <li>회사</li>
        <li>제품</li>
        <li>수입 / 지출</li>
      </ul>
    </NavWrapper>
  );
};
export default NavComp;
