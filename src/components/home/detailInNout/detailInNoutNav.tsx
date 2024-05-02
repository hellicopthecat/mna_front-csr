import styled from "styled-components";
import {useAppDispatch} from "../../../hooks/storeHook";
import {setInNoutNavMode} from "../../../redux/inNoutNavStateSlice";

const DetailInNoutNavList = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    display: flex;
    gap: 10px;
    li {
      cursor: pointer;
    }
    li:hover {
      text-decoration: underline;
    }
  }
`;
const DetailInNoutNav = () => {
  const dispatch = useAppDispatch();
  return (
    <DetailInNoutNavList>
      <h2>회계</h2>
      <ul>
        <li onClick={() => dispatch(setInNoutNavMode(1))}>총자산</li>
        <li onClick={() => dispatch(setInNoutNavMode(2))}>유동자산</li>
        <li onClick={() => dispatch(setInNoutNavMode(3))}>비유동자산</li>
        <li onClick={() => dispatch(setInNoutNavMode(4))}>유동부채</li>
        <li onClick={() => dispatch(setInNoutNavMode(5))}>비유동부채</li>
        <li onClick={() => dispatch(setInNoutNavMode(6))}>수입모델</li>
        <li onClick={() => dispatch(setInNoutNavMode(7))}>지출모델</li>
      </ul>
    </DetailInNoutNavList>
  );
};
export default DetailInNoutNav;
