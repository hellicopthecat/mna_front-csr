import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../../../hooks/storeHook";
import {setInNoutNavMode} from "../../../redux/inNoutNavStateSlice";

const DetailInNoutNavList = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    display: flex;
    gap: 10px;
  }
`;
const NavList = styled.li<{$mode: boolean}>`
  cursor: pointer;
  text-decoration: ${(props) => (props.$mode ? "underline" : "none")};
  &:hover {
    text-decoration: underline;
  }
`;
const DetailInNoutNav = () => {
  const {inNoutMode} = useAppSelector((state) => state.inNoutNav);
  const dispatch = useAppDispatch();
  return (
    <DetailInNoutNavList>
      <h2>회계</h2>
      <ul>
        <NavList
          onClick={() => dispatch(setInNoutNavMode(1))}
          $mode={inNoutMode === 1}
        >
          총자산
        </NavList>
        <NavList
          onClick={() => dispatch(setInNoutNavMode(2))}
          $mode={inNoutMode === 2}
        >
          유동자산
        </NavList>
        <NavList
          onClick={() => dispatch(setInNoutNavMode(3))}
          $mode={inNoutMode === 3}
        >
          비유동자산
        </NavList>
        <NavList
          onClick={() => dispatch(setInNoutNavMode(4))}
          $mode={inNoutMode === 4}
        >
          유동부채
        </NavList>
        <NavList
          onClick={() => dispatch(setInNoutNavMode(5))}
          $mode={inNoutMode === 5}
        >
          비유동부채
        </NavList>
        <NavList
          onClick={() => dispatch(setInNoutNavMode(6))}
          $mode={inNoutMode === 6}
        >
          수입모델
        </NavList>
        <NavList
          onClick={() => dispatch(setInNoutNavMode(7))}
          $mode={inNoutMode === 7}
        >
          지출모델
        </NavList>
        <NavList
          onClick={() => dispatch(setInNoutNavMode(8))}
          $mode={inNoutMode === 8}
        >
          수입대기모델
        </NavList>
        <NavList
          onClick={() => dispatch(setInNoutNavMode(9))}
          $mode={inNoutMode === 9}
        >
          지출대기모델
        </NavList>
      </ul>
    </DetailInNoutNavList>
  );
};
export default DetailInNoutNav;
