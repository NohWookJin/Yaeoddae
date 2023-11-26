import styled from "styled-components";

function DateInfoWrapper({ isCheckIn, date }: { isCheckIn: boolean; date: string }) {
  const type = isCheckIn ? "체크인" : "체크아웃";
  return (
    <Wrapper>
      <h3>{type}</h3>
      <span>{date}</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: calc(50% - 10px);
  border: ${(props) => props.theme.Border.thinBorder};
  border-radius: ${(props) => props.theme.Br.default};
  padding: ${(props) => props.theme.Padding.default};
  line-height: 1.5;
  font-weight: 600;

  h3 {
    color: ${(props) => props.theme.Color.defaultFontColor};
    font-size: 0.75rem;
    margin-bottom: 3px;
  }

  span {
    color: ${(props) => props.theme.Color.mainFontColor};
    font-size: ${props => props.theme.Fs.default}
  }
`;

export default DateInfoWrapper;
