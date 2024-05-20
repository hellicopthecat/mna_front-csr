import styled from "styled-components";

export const DetailProductInfo = styled.div`
  position: sticky;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(1, minmax(300px, 600px));
  grid-auto-flow: column;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
`;
export const DetailProductLeft = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DetailProductRight = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  color: black;
`;
export const DetailProductHeadGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  div:first-child {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 20px;
  }
`;
export const DetailProductBodyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 15px;
`;
export const DetailProductText = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  margin: 0 10px;
  gap: 3px;
  small {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
    white-space: nowrap;
  }
  p:first-child {
    font-weight: 500;
    margin-bottom: 10px;
    width: 100px;
  }
  p:last-child {
    font-size: 15px;
    text-align: right;
    word-wrap: break-word;
  }
`;

export const DetailProductBtn = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: end;
  gap: 10px;
`;
