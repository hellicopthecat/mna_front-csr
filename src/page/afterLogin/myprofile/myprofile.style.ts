import styled from "styled-components";

export const MyProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MyProfileLeft = styled.div`
  height: 100dvh;
  flex: 1;
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
  gap: 8px;
  p:nth-child(2) {
    font-weight: 700;
    font-size: 30px;
  }
`;
export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  border-radius: 100%;
`;
export const MyProfileNav = styled.div`
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
  padding: 20px;
`;
