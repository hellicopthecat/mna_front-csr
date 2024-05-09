import styled from "styled-components";
export const CreateProductCont = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CreateProductBg = styled.div`
  width: 100%;
  height: 100%;
`;
export const CreateProductForm = styled.form`
  position: absolute;
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(1, minmax(300px, 1fr));
  gap: 20px;
`;
export const CreateProductInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  label {
    width: 100px;
    min-width: 50px;
    font-size: 13px;
    font-weight: 600;
    span {
      color: red;
    }
  }
  input {
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.secondary};
    padding: 5px 10px;
  }
`;
