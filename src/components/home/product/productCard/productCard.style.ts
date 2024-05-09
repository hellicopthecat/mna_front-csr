import styled from "styled-components";
export const ProductCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;
export const ProductCardCont = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  color: black;
  overflow: hidden;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
`;
export const ProductCardLeft = styled.div`
  flex: 1;
`;
export const ProductCardRight = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const ProductCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 7px;
  p {
    white-space: nowrap;
  }
  p:first-child {
    font-size: 14px;
  }
  p:last-child {
    font-size: 16px;
    font-weight: 600;
  }
`;
