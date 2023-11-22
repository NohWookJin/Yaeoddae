import styled from "styled-components";

function CartSelection() {
  return (
    <Container>
      <SectionTop>
        <span>전체(2)</span>
        <span>호텔(0)</span>
        <span>모텔(0)</span>
      </SectionTop>
      <SectionBottom>
        <input type="checkbox" />
        <span>전체선택(2/2)</span>
      </SectionBottom>
    </Container>
  );
}

export default CartSelection;

const Container = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.Color.componentColor};
`;

const SectionTop = styled.div`
  span {
    margin-right: 0.5rem;
    font-size: ${({ theme }) => theme.Fs.default};
    color: ${({ theme }) => theme.Color.mainFontColor};
    font-weight: 600;
  }
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: ${({ theme }) => theme.Border.thinBorder};
`;

const SectionBottom = styled.div`
  span {
    margin-left: 0.5rem;
    font-size: ${({ theme }) => theme.Fs.default};
    color: ${({ theme }) => theme.Color.mainFontColor};
    font-weight: 600;
  }
`;
