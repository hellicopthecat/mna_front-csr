import styled from "styled-components";

export const CreateAssetsForm = styled.form`
  background-color: white;
  color: black;
  border-radius: 15px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
  padding: 50px;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 30%;
  legend {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 30px;
  }
  div {
    width: 100%;
    display: flex;
    gap: 30px;
    label {
      white-space: nowrap;
      width: 50%;
      span {
        color: red;
      }
    }
  }
  p {
    width: 100%;
    font-size: 12px;
    text-align: right;
    span {
      color: red;
    }
  }
`;
export const CreateAssetsInput = styled.div`
  input {
    padding: 5px 10px;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.secondary};
    width: 100%;
  }
`;
export const CreateAssetsRadio = styled.div``;
export const CreateAssetsTextArea = styled.div`
  textarea {
    width: 100%;
    min-height: 100px;
    height: 150px;
    margin: 0;
    padding: 10px;
    border: 1px solid ${(props) => props.theme.secondary};
    border-radius: 10px;
  }
`;
export const CreateAssetsBtn = styled.div`
  justify-content: center;
`;
