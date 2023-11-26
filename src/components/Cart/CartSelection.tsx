import styled from "styled-components";

function CartSelection() {
  return (
    <Container>
      <Section>
        <input type="checkbox" />
        <span>전체선택(2/2)</span>
      </Section>
    </Container>
  );
}

export default CartSelection;

const Container = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.Color.componentColor};
`;

const Section = styled.div`
  span {
    margin-left: 0.5rem;
    font-size: ${({ theme }) => theme.Fs.default};
    color: ${({ theme }) => theme.Color.mainFontColor};
    font-weight: 600;
  }
`;
