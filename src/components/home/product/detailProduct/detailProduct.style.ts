import styled from "styled-components";

export const DetailProductCont = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  color: black;
`;
export const DetailProductBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
export const DetailProductInfo = styled.div`
  position: sticky;
  display: grid;
  grid-template-columns: repeat(2, minmax(500px, 1fr));
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  background-color: white;
  border-radius: 5px;
`;
export const DetailProductLeft = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export const DetailProductRight = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(1, minmax(100px, 1fr));
  gap: 25px;
`;
export const DetailProductText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  small {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
    white-space: nowrap;
  }
  p:first-child {
    font-weight: 500;
    margin-bottom: 10px;
  }
  p:last-child {
    font-size: 15px;
    text-align: right;
  }
`;

export const DetailProductBtn = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: end;
  gap: 10px;
`;
