import styled from "styled-components";

function DetailSectionTop() {
  return (
    <Container>
      <ImageSection>
        <img src="/mockImage.png" alt="detail-image" />
      </ImageSection>
      <TextSection>
        <h3>호텔 크레센도 서울</h3>
        <span>서울 강남구 삼성동 113-5</span>
      </TextSection>
    </Container>
  );
}

export default DetailSectionTop;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  ${({ theme }) => `
    background-color: ${theme.Color.componentColor}
  `}
`;

const ImageSection = styled.div`
  width: 100%;
  img {
    max-width: 375px;
  }
`;

const TextSection = styled.div`
  ${({ theme }) => `
    padding: 0.5rem 1rem;
    h3 {
      font-size: ${theme.Fs.tagTitle};
      font-weight: 600;
      color:  ${theme.Color.mainFontColor};
      margin-bottom: 0.2rem;
    }
    span {
      font-size: ${theme.Fs.default};
      color:  ${theme.Color.defaultFontColor};
    }
  `}
`;
