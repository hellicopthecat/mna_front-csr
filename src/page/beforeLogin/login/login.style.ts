import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  gap: 20px;
  padding: 0 30px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
  }
`;
export const FormHeaderCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 20px;
  }
`;
export const LoginTypeCont = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
  background-color: #2d3436;
  border-radius: 25px;
  overflow: hidden;
  padding: 5px;
`;
export const LoginTypeBtn = styled.button<{$isselect: boolean}>`
  border-radius: 25px;
  color: white;
  background-color: ${(props) => (props.$isselect ? "#636e72" : "inherit")};
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 600;
  width: 100%;
`;
