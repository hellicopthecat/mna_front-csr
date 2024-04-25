import styled from "styled-components";
import {useState} from "react";
import {AnchorTheme, BtnTheme} from "../../../components/btnTheme";

const PreviewWrapper = styled.div`
  display: flex;
  overflow-x: hidden;
`;
const PreviewCard = styled.div<{$page?: number}>`
  min-width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(
    ${(props) =>
      props.$page === 1 ? "-100%" : props.$page === 2 ? "-200%" : "0%"}
  );
  transition: ease-in-out 0.4s;
`;
const PreviewCardUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 30px;
  p:first-child {
    font-size: 100px;
  }
  p:last-child {
    font-size: 30px;
  }
`;
const PreviewCardDown = styled.div`
  margin-bottom: 30px;
  button,
  a {
    margin-bottom: 20px;
    font-size: 20px;
  }
`;
const Preview = () => {
  //state
  const [page, setPage] = useState(0);
  //fn
  const transXPage = () => {
    setPage((prev) => (page === 2 ? 2 : prev + 1));
  };
  return (
    <PreviewWrapper>
      <PreviewCard $page={page}>
        <PreviewCardUp>
          <p>🙋‍♀️🙋‍♂️</p>
          <p>인사관리도</p>
        </PreviewCardUp>

        <PreviewCardDown>
          <BtnTheme text="NEXT" handleClick={transXPage} />
        </PreviewCardDown>
      </PreviewCard>

      <PreviewCard $page={page}>
        <PreviewCardUp>
          <p>💰</p>
          <p>제무관리도</p>
        </PreviewCardUp>

        <PreviewCardDown>
          <BtnTheme text="NEXT" handleClick={transXPage} />
        </PreviewCardDown>
      </PreviewCard>

      <PreviewCard $page={page}>
        <PreviewCardUp>
          <p>🏢</p>
          <p>커컴에서</p>
        </PreviewCardUp>

        <PreviewCardDown>
          <AnchorTheme href="/login" text="로그인" />
          <AnchorTheme href="/join" text="회원가입" />
        </PreviewCardDown>
      </PreviewCard>
    </PreviewWrapper>
  );
};
export default Preview;
