import styled from "styled-components";

export const DetailProductForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  height: 500px;
  overflow-y: scroll;
  label {
    margin-bottom: 5px;
  }
`;
export const DetailProductInput = styled.div`
  display: flex;
  flex-direction: column;
  input {
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.secondary};
    padding: 5px 7px;
  }
`;
export const DetailProductRadio = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0px;
  label {
    margin-right: 5px;
  }
`;
export const DetailProductSelect = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailProductTextarea = styled.div`
  display: flex;
  flex-direction: column;
  textarea {
    border: 1px solid ${(props) => props.theme.secondary};
    border-radius: 5px;
    padding: 10px;
    height: 100px;
  }
`;
