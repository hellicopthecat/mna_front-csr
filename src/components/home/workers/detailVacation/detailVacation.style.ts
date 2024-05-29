import styled from "styled-components";

export const DetailVacationCont = styled.div`
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
  position: absolute;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const DetailVacationHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 15px;
`;
export const DetailVacationInfo = styled.div`
  display: flex;
  label {
    font-weight: 600;
    margin-right: 10px;
    white-space: nowrap;
  }
  span {
    font-weight: 600;
    margin-right: 10px;
    white-space: nowrap;
  }
  input {
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.secondary};
  }
`;
export const DetailVacationBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h3 {
    font-size: 20px;
    font-weight: 600;
  }
`;
export const DetailVacationTable = styled.table`
  text-align: center;
  thead {
    border-bottom: 1px solid ${(props) => props.theme.secondary};
  }
  th {
    padding: 5px 0px;
  }
  td {
    padding: 5px 0px;
  }
`;
export const DetailVacationBtn = styled.div`
  display: flex;
  gap: 10px;
`;
export const DetailVacationBtnHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
