// styles
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CartNoReservation = () => {
  const navigate = useNavigate();

  return (
    <>
      <ErrorMessage>
        <span>장바구니가 비었어요.</span>
      </ErrorMessage>
      <NotFoundContainer>
        <NotFoundButton>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            홈 이동
          </button>
        </NotFoundButton>
      </NotFoundContainer>
    </>
  );
};

export default CartNoReservation;

const NotFoundContainer = styled.div`
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

const ErrorMessage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.3rem;
  span {
    font-size: ${({ theme }) => theme.Fs.default};
    font-weight: 600;
  }
`;

const NotFoundButton = styled.div`
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
