import styled from "styled-components";

function DetailDate() {
  return (
    <Container>
      <TitleSection>
        <h3>날짜 선택</h3>
      </TitleSection>
      <DateSection>
        <div>
          <span>달력</span> &nbsp;
          <span>11.02 ~ 11.03</span>
          <span>· 1박</span>
        </div>
        <div>
          <button>변경</button>
        </div>
      </DateSection>
    </Container>
  );
}

export default DetailDate;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  ${({ theme }) => `
    background-color: ${theme.Color.componentColor}
  `}
`;
const TitleSection = styled.div`
  ${({ theme }) => `
    margin-bottom: 0.5rem;
    h3 {
      color: ${theme.Color.mainFontColor};
      font-size: ${theme.Fs.default};
      font-weight: 600;
    }
  `}
`;

const DateSection = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: space-between;
    span {
      color: ${theme.Color.mainFontColor};
      font-size: ${theme.Fs.default};
    }
    button {
      all: unset;
      color: ${theme.Color.mainFontColor};
      font-size: ${theme.Fs.default};
      font-weight: 600;
    }
  `}
`;
