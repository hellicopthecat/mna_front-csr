import styled from "styled-components";

export const SearchCompanyCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h3 {
    font-weight: 600;
    font-size: 20px;
  }
`;
export const SearchResultCont = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1em;
`;
export const SearchResultCard = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.secondary};
  border-radius: 1em;
`;
