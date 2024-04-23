import styled from "styled-components";
import Container from "../../../components/container";
import {useState} from "react";
import {AnchorTheme, BtnTheme} from "../../../components/btnTheme";

const PreviewWrapper = styled.div`
  display: flex;
  overflow-x: hidden;
`;
const PreviewCard = styled.div<{page?: number}>`
  min-width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(
    ${(props) =>
      props.page === 1 ? "-100%" : props.page === 2 ? "-200%" : "0%"}
  );
  transition: ease-in-out 0.4s;
`;
const PreviewCardUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  p {
    font-size: 150px;
  }
`;
const PreviewCardDown = styled.div`
  button,
  a {
    margin: 40px;
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
    <Container>
      <PreviewWrapper>
        <PreviewCard page={page}>
          <PreviewCardUp>
            <p>🙋‍♀️🙋‍♂️</p>
          </PreviewCardUp>

          <PreviewCardDown>
            <BtnTheme text="인사관리도" handleClick={transXPage} />
          </PreviewCardDown>
        </PreviewCard>

        <PreviewCard page={page}>
          <PreviewCardUp>
            <p>💰</p>
          </PreviewCardUp>

          <PreviewCardDown>
            <BtnTheme text="제무관리도" handleClick={transXPage} />
          </PreviewCardDown>
        </PreviewCard>

        <PreviewCard page={page}>
          <PreviewCardUp>
            <p>🏢</p>
          </PreviewCardUp>

          <PreviewCardDown>
            <AnchorTheme href="/join" text="커컴에서" />
          </PreviewCardDown>
        </PreviewCard>
      </PreviewWrapper>
    </Container>
  );
};
export default Preview;
