import styled from "styled-components";

export const WorkerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const WorkerHeader = styled.div`
  display: flex;
  align-items: end;
  gap: 15px;
  margin-bottom: 15px;
`;
export const WorkerMiniCardCont = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
`;
export const WorkerMiniCard = styled.div<{$vacation: boolean}>`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid
    ${(props) => (props.$vacation ? "tomato" : props.theme.subBadge)};
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  h3 {
    font-size: 16px;
    font-weight: 600;
  }
`;
export const WorkerBadge = styled.p<{$vacation: boolean}>`
  background-color: ${(props) =>
    !props.$vacation ? props.theme.btnColor : props.theme.cardColor};
  text-align: center;
  padding: 5px;
  border-radius: 10px;
  font-size: 13px;
  width: 70px;
`;
