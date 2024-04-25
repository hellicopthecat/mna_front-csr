import styled from "styled-components";

export const JoinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  form {
    padding: 20px;
    border-top: 1px solid ${(props) => props.theme.secondary};
    border-bottom: 1px solid ${(props) => props.theme.secondary};
    border-radius: 10px;

    div:nth-child(2) label::after,
    div:nth-child(3) label::after,
    div:nth-child(4) label::after,
    div:nth-child(5) label::after {
      content: "*";
      margin-left: 5px;
      width: 5px;
      height: 5px;
      color: red;
    }
  }
`;
