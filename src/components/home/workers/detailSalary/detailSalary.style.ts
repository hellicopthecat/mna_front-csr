import styled from "styled-components";

export const DetailSalaryCont = styled.div`
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
  position: absolute;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid ${(props) => props.theme.secondary};
    padding: 10px;
    border-radius: 5px;
    p,
    span {
      white-space: nowrap;
    }
    span {
      text-align: right;
    }
  }
`;
