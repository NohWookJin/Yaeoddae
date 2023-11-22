import CartSectionBox from "../../components/Cart/CartSectionBox";
import CartSelection from "../../components/Cart/CartSelection";
import CartResevation from "../../components/Cart/CartResevation";

import styled from "styled-components";

function CartPage() {
  return (
    <Container>
      <CartSelection />
      <CartSectionBox />
      <CartResevation />
    </Container>
  );
}

export default CartPage;

const Container = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: scroll;
  border-left:  ${({ theme }) => theme.Border.thinBorder};
  border-right:  ${({ theme }) => theme.Border.thinBorder};
  background-color: ${({ theme }) => theme.Color.backgroundColor}};
`;
