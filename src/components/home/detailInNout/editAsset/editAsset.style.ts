import styled from "styled-components";

export const EditAssetCont = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 10px;
  min-width: 400px;
  min-height: 400px;
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    legend {
      text-align: center;
      font-size: 30px;
    }
    div {
      display: flex;
      justify-content: center;
      label {
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
`;
export const EditAssetInputCont = styled.div`
  flex-direction: column;
  gap: 10px;
  input {
    border: none;
    padding: 10px 20px;
    border-bottom: 1px solid ${(props) => props.theme.secondary};
  }
  span {
    font-size: 12px;
  }
`;
export const EditAssetRadioCont = styled.div`
  gap: 50px;
  label {
    width: 80px;
  }
`;
export const EditAssetBtn = styled.div`
  display: flex;
  gap: 10px;
`;
