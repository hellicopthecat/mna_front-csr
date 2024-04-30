import styled from "styled-components";
interface IAvatarProps {
  width?: string;
  height?: string;
}
const AvatarCont = styled.div<{$width?: string; $height?: string}>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background-color: cornflowerblue;
  border-radius: 100%;
`;
export const Avatar = ({width = "100px", height = "100px"}: IAvatarProps) => {
  return <AvatarCont $width={width} $height={height} />;
};
const CompanyAvatarCont = styled.div<{$width?: string; $height?: string}>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background-color: cornflowerblue;
  border-radius: 100%;
`;
export const CompanyAvatar = ({
  width = "100px",
  height = "100px",
}: IAvatarProps) => {
  return <CompanyAvatarCont $width={width} $height={height} />;
};
