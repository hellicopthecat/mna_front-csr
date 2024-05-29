import styled from "styled-components";

export const WorkerVacationCard = styled.div`
  background-color: white;
  color: black;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const VCardInfo = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  p {
    text-align: right;
  }
  a {
    place-self: center;
  }
`;
export const VCardBadge = styled.p<{$isvacation: boolean}>`
  background-color: ${(props) =>
    props.$isvacation ? props.theme.secondary : props.theme.cardColor};
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
  place-self: end;
  font-size: 13px;
`;
