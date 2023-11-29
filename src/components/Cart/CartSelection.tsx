// styles
import styled from "styled-components";

import { cartList } from "../../store/cartList";

interface ICartSelection {
  checked: boolean;
  onChange: () => void;
}

function CartSelection({ checked, onChange }: ICartSelection) {
  const { list } = cartList();

  return (
    <Container>
      <Section>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span>
          전체선택 ({list.length}/{list.length})
        </span>
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
