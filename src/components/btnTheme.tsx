import {MouseEventHandler} from "react";
import {Link} from "react-router-dom";

import styled from "styled-components";

interface IBtnProps {
  type?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  text: string;
  width?: string;
  height?: string;
  fontSize?: string;
}
const ShareBtn = styled.button<{
  $width?: string;
  $height?: string;
  $fontsize: string;
}>`
  background-color: ${(props) => props.theme.btnColor};
  color: ${(props) => props.theme.btnTxtColor};
  width: ${(props) => props.$width};
  min-width: 80px;
  height: ${(props) => props.$height};
  font-size: ${(props) => props.$fontsize};
  text-align: center;
  border-radius: 20px;
  padding: 5px 0;
`;
export const BtnTheme = ({
  type = "button",
  handleClick,
  text,
  width = "300px",
  height = "50px",
  fontSize = "18px",
}: IBtnProps) => {
  return (
    <ShareBtn
      type={type}
      onClick={handleClick}
      $width={width}
      $height={height}
      $fontsize={fontSize}
    >
      {text}
    </ShareBtn>
  );
};

interface IAnchorProps {
  href: string;
  text: string;
  width?: string;
  height?: string;
  fontSize?: string;
}
const ShareBtnAnchor = styled(Link)<{
  $width?: string;
  $height?: string;
  $fontsize: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.btnColor};
  color: ${(props) => props.theme.btnTxtColor};
  border-radius: 20px;
  margin: 0 auto;
  width: ${(props) => props.$width};
  min-width: 100px;
  height: ${(props) => props.$height};
  font-size: ${(props) => props.$fontsize};
`;
export const AnchorTheme = ({
  href,
  text,
  width = "300px",
  height = "50px",
  fontSize = "18px",
}: IAnchorProps) => {
  return (
    <ShareBtnAnchor
      to={href}
      $width={width}
      $height={height}
      $fontsize={fontSize}
    >
      {text}
    </ShareBtnAnchor>
  );
};
