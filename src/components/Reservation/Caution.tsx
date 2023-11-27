// library
import styled from "styled-components";

// icon
import infoIcon from "../../assets/infoIcon.svg";

function Caution({ title, content }: { title: string; content: string }) {
  return (
    <Container>
      <div>
        <img src={infoIcon} alt="" />
        <span>{title}</span>
      </div>
      <div>{content}</div>
    </Container>
  );
}

export default Caution;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.625rem;

  > div:first-child {
    display: flex;
    gap: 4px;
    color: ${(props) => props.theme.Color.mainColor};
    font-weight: 700;
  }
  > div:last-child {
    padding-left: 20px;
    font-weight: 400;
  }
`;
