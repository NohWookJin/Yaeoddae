// hooks
import { useNavigate } from "react-router-dom";
import { useCart } from "../../store/getCart";

// styles
import styled from "styled-components";

function CartResevation() {
  const { cart, total } = useCart();

  const foramtTotal = total.toLocaleString();

  const navigate = useNavigate();

  const moveReservation = () => {
    const cartIdCollection = cart.map((item) => item.id);
    const cartIdsCollectionAsString = cartIdCollection.join(",");
    const cartIdToReservation = cartIdsCollectionAsString.split(",").map(String);

    navigate(`/reservation?cartIds=${cartIdToReservation}`);
  };

  return (
    <Container>
      <SectionTop>
        <span>총 {cart.length}건</span>
        <div>
          <span>결제 금액</span>
          <span>{foramtTotal}원</span>
        </div>
      </SectionTop>
      <SectionBottom>
        <button onClick={moveReservation}>예약하기</button>
      </SectionBottom>
    </Container>
  );
}

export default CartResevation;

const Container = styled.section`
  min-width: 375px;
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;

  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  ${({ theme }) => `
    border: ${theme.Border.thinBorder};
    background-color: ${theme.Color.componentColor}
  `}
`;

const SectionTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.3rem;
  span {
    font-size: ${({ theme }) => theme.Fs.default};
    font-weight: 600;
  }
  div {
    span: first-child {
      font-size: ${({ theme }) => theme.Fs.caption};
      font-weight: 300;
    }
    span: last-child {
      margin-left: 0.4rem;
      font-weight: 600;
    }
  }
`;

const SectionBottom = styled.div`
  button {
    text-align: center;
    cursor: pointer;
    width: 100%;
    padding: 1rem;
    background-color: ${({ theme }) => theme.Color.mainColor};
    color: ${({ theme }) => theme.Color.componentColor};
    font-size: ${({ theme }) => theme.Fs.default};
    font-weight: 600;
    border-radius: ${({ theme }) => theme.Br.default};
    &:hover {
      transition: all 0.3s;
      background-color: ${({ theme }) => theme.Color.hoverColor};
    }
  }
`;
