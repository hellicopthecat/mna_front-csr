import styled from "styled-components";
interface IAvatarProps {
  width?: string;
  height?: string;
  radius?: string;
}
const AvatarCont = styled.div<{
  $width?: string;
  $height?: string;
  $radius: string;
}>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background-color: cornflowerblue;
  border-radius: ${(props) => props.$radius};
`;
export const Avatar = ({
  width = "100px",
  height = "100px",
  radius = "100%",
}: IAvatarProps) => {
  return <AvatarCont $width={width} $height={height} $radius={radius} />;
};
