import styled from "styled-components";

interface IBadgeProps {
  isOwned?: boolean;
  isManager?: boolean;
}

const BadgeWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  gap: 10px;
`;
const BadgeText = styled.p<{
  $isown?: boolean;
  $ismanage?: boolean;
}>`
  border-radius: 25px;
  padding: 3px 7px;
  background-color: ${(props) =>
    (props.$isown && props.theme.badge) ||
    (props.$ismanage && props.theme.subBadge)};
`;

const UserCompanyBadge = ({isOwned, isManager}: IBadgeProps) => {
  return (
    <BadgeWrapper>
      {isOwned && <BadgeText $isown>보유</BadgeText>}
      {isManager && <BadgeText $ismanage>관리</BadgeText>}
    </BadgeWrapper>
  );
};

export default UserCompanyBadge;
