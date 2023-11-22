import CartSection from "./CartSection";

import styled from "styled-components";

function CartSectionBox() {
  return (
    <Container>
      <CartSection />
      <CartSection />
      <CartSection />
    </Container>
  );
}

export default CartSectionBox;

const Container = styled.section`
  padding-bottom: 8.5rem;
`;
