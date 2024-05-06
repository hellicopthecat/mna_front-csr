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
  center?: boolean;
  btncolor?: string;
}
const ShareBtn = styled.button<{
  $width?: string;
  $height?: string;
  $fontsize: string;
  $center?: boolean;
  $btncolor?: string;
}>`
  background-color: ${(props) =>
    props.$btncolor ? props.$btncolor : props.theme.btnColor};
  color: ${(props) => props.theme.btnTxtColor};
  width: ${(props) => props.$width};
  min-width: 40px;
  height: ${(props) => props.$height};
  font-size: ${(props) => props.$fontsize};
  text-align: center;
  border-radius: 20px;
  padding: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 ${(props) => (props.$center ? "auto" : 0)};
`;
export const BtnTheme = ({
  type = "button",
  handleClick,
  text,
  width = "300px",
  height = "50px",
  fontSize = "18px",
  center = false,
  btncolor,
}: IBtnProps) => {
  return (
    <ShareBtn
      type={type}
      onClick={handleClick}
      $width={width}
      $height={height}
      $fontsize={fontSize}
      $center={center}
      $btncolor={btncolor}
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
  center?: boolean;
}
const ShareBtnAnchor = styled(Link)<{
  $width?: string;
  $height?: string;
  $fontsize: string;
  $center?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.btnColor};
  color: ${(props) => props.theme.btnTxtColor};
  border-radius: 20px;
  width: ${(props) => props.$width};
  min-width: 40px;
  height: ${(props) => props.$height};
  font-size: ${(props) => props.$fontsize};
  margin: 0 ${(props) => (props.$center ? "auto" : 0)};
`;
export const AnchorTheme = ({
  href,
  text,
  width = "300px",
  height = "50px",
  fontSize = "18px",
  center = false,
}: IAnchorProps) => {
  return (
    <ShareBtnAnchor
      to={href}
      $width={width}
      $height={height}
      $fontsize={fontSize}
      $center={center}
    >
      {text}
    </ShareBtnAnchor>
  );
};
