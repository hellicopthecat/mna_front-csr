import {MouseEventHandler} from "react";
import {Link} from "react-router-dom";

import styled from "styled-components";

interface IBtnProps {
  type?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  text: string;
}
const ShareBtn = styled.button`
  background-color: ${(props) => props.theme.btnColor};
  color: ${(props) => props.theme.btnTxtColor};
  width: 300px;
  height: 50px;
  text-align: center;
  border-radius: 20px;
  font-size: 18px;
`;
export const BtnTheme = ({type = "button", handleClick, text}: IBtnProps) => {
  return (
    <ShareBtn type={type} onClick={handleClick}>
      {text}
    </ShareBtn>
  );
};

interface IAnchorProps {
  href: string;
  text: string;
}
const ShareBtnAnchor = styled(Link)`
  background-color: ${(props) => props.theme.btnColor};
  color: ${(props) => props.theme.btnTxtColor};
  width: 300px;
  height: 50px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;
export const AnchorTheme = ({href, text}: IAnchorProps) => {
  return <ShareBtnAnchor to={href}>{text}</ShareBtnAnchor>;
};
