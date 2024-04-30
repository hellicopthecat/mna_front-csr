import styled from "styled-components";

export const MyProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr;
`;
export const MyProfileLeft = styled.div`
  height: 100dvh;
  flex: 0.5;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  box-shadow: 3px 1px 10px rgba(0, 0, 0, 0.2);

  h2 {
    font-weight: 700;
    font-size: 20px;
  }
`;
export const MyprofileUsername = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  p:nth-child(2) {
    font-weight: 700;
    font-size: 30px;
  }
`;

export const MyProfileNav = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;
export const MyProfileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const MyProfileNavAnchor = styled.li<{$path: boolean}>`
  a {
    text-decoration: ${(props) => (props.$path ? "underline" : "none")};
    font-size: 20px;
    font-weight: 600;
    text-underline-offset: 4px;
  }
`;
export const MyProfileRight = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100dvh;
`;
