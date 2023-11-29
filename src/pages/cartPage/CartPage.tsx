// components
import CartSectionBox from "../../components/Cart/CartSectionBox";
import CartResevation from "../../components/Cart/CartResevation";

// hooks
import useCartAPI from "../../api/cart";

// styles
import styled from "styled-components";
import { useEffect } from "react";

function CartPage() {
  const { refreshCart } = useCartAPI();

  useEffect(() => {
    refreshCart();
  }, []);

  return (
    <Container>
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
  background-color: ${({ theme }) => theme.Color.backgroundColor}};
`;
