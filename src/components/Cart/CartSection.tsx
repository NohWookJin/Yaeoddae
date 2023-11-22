import styled from "styled-components";

function CartSection() {
  return (
    <Container>
      <SectionTitle>
        <input type="checkbox" />
        <span>호텔 크레센도 서울</span>
        <span>서울 강남구 삼성동 113-5</span>
      </SectionTitle>
      <SectionDescription>
        <DescriptionTop>프티 퀸 202호</DescriptionTop>
        <DescriptionBottom>
          <img src="/mockImage.png" alt="" />
          <div>
            <span>11.20 ~ 11.21 . 1박</span>
            <span>기준 2명 / 최대 4명</span>
          </div>
        </DescriptionBottom>
      </SectionDescription>
      <SectionPrice>
        <span>숙박</span>
        <span>170,000원</span>
      </SectionPrice>
    </Container>
  );
}

export default CartSection;

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;

  margin: 0.5rem 0;
  padding: 1rem 1.5rem;
  padding-left: 2.4rem;
  ${({ theme }) => `
    background-color: ${theme.Color.componentColor}
  `}
`;

const SectionTitle = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    border-bottom: ${theme.Border.thinBorder};
    padding-bottom: 0.75rem;
    margin-bottom: 1rem;
    span {
        font-size: ${theme.Fs.tagTitle};
        font-weight: 600;
        color:  ${theme.Color.mainFontColor};
        padding-bottom: 0.5rem;
    }
    span: last-child {
        font-size: ${theme.Fs.default};
        color:  ${theme.Color.defaultFontColor};
        font-weight: 300;
        padding-bottom: 0;
    }
    input[type="checkbox"] {
        position: absolute;
        top: 25px;
        left: 15px;
    }
    `}
`;

const SectionDescription = styled.div``;

const DescriptionTop = styled.h3`
  color: ${({ theme }) => theme.Color.mainFontColor};
  font-size: ${({ theme }) => theme.Fs.default};
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const DescriptionBottom = styled.div`
  display: flex;
  img {
    max-width: 145px;
    margin-right: 0.75rem;
    border-radius: ${({ theme }) => theme.Br.default};
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    span: first-child {
      color: ${({ theme }) => theme.Color.mainFontColor};
      font-size: ${({ theme }) => theme.Fs.default};
      font-weight: 600;
      margin-bottom: 0.3rem;
    }
    span: last-child {
      color: ${({ theme }) => theme.Color.captionFontColor};
      font-size: ${({ theme }) => theme.Fs.caption};
    }
  }
`;
const SectionPrice = styled.div`
  text-align: right;
  margin-top: 2rem;

  ${({ theme }) => `
  span: first-child {
    color: ${theme.Color.captionFontColor};
    font-size: ${theme.Fs.caption};
    font-weight: 600;
    margin-right: 0.5rem;
  }
  span: last-child {
    color: ${theme.Color.mainFontColor};
    font-size: ${theme.Fs.default};
    font-weight: 600;
  }
  `}
`;
