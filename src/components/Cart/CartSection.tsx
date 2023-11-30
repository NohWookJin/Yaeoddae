// components
import useCartAPI from "../../api/cart";

// hooks
import { useDate } from "../../hook/useDate";

//interface
import { ICart } from "../../store/cartList";

// store
import { pickCartList } from "../../store/pickCartList";

// styles
import styled from "styled-components";

interface Cart {
  roomList: ICart;
}

interface CartSectionProps {
  isChecked: boolean;
  onChange: () => void;
}

function CartSection({ roomList, isChecked, onChange }: Cart & CartSectionProps) {
  const { formatDate, formatMonth } = useDate();
  const { refreshCart, removeCart } = useCartAPI();
  const { removeCartItem } = pickCartList();

  const { accommodationGetResponse, roomGetResponse, guestNumber, checkIn, checkOut } = roomList;

  const checkInMonth = formatMonth(checkIn);
  const checkInDay = formatDate(checkIn);
  const checkOutMonth = formatMonth(checkOut);
  const checkOutDay = formatDate(checkOut);

  const price = roomGetResponse.price;

  const formatPirce = Number(price).toLocaleString();

  const handleRemoveCart = () => {
    removeCartItem(roomList.id);
    removeCart(roomList.id);

    setTimeout(() => {
      refreshCart();
    }, 300);
  };

  return (
    <Container>
      <SectionTitle>
        <input type="checkbox" checked={isChecked} onChange={onChange} />
        <span>{accommodationGetResponse.name}</span>
        <span>{accommodationGetResponse.location.address}</span>
      </SectionTitle>
      <SectionDelete>
        <span onClick={handleRemoveCart}>삭제</span>
      </SectionDelete>
      <SectionDescription>
        <DescriptionTop>{roomGetResponse.name}</DescriptionTop>
        <DescriptionBottom>
          <img src={roomGetResponse.image} alt="room-image" />
          <div>
            <span>
              {checkInMonth}월 {checkInDay}일 ~ {checkOutMonth}월 {checkOutDay}일
            </span>
            <span>
              신청 {guestNumber}명 / 최대 {roomGetResponse.capacity}명
            </span>
          </div>
        </DescriptionBottom>
      </SectionDescription>
      <SectionPrice>
        <span>숙박</span>
        <span>{formatPirce}원</span>
      </SectionPrice>
    </Container>
  );
}

export default CartSection;

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;

  margin: 0.5rem 0;
  padding: 1rem 1.5rem;
  padding-left: 2.4rem;
  ${({ theme }) => `
    background-color: ${theme.Color.componentColor}
  `}
`;

const SectionDelete = styled.div`
  position: absolute;
  right: 25px;
  cursor: pointer;
  span {
    color: ${({ theme }) => theme.Color.mainFontColor};
    font-size: ${({ theme }) => theme.Fs.caption};
  }
  &:hover {
    span {
      transition: all 0.4s;
      font-weight: 600;
    }
  }
`;

const SectionTitle = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    border-bottom: ${theme.Border.thinBorder};
    padding-bottom: 0.75rem;
    margin-bottom: 1rem;
    span {
        font-size: ${theme.Fs.tagTitle};
        font-weight: 600;
        color:  ${theme.Color.mainFontColor};
        padding-bottom: 0.5rem;
    }
    span: last-child {
        font-size: ${theme.Fs.default};
        color:  ${theme.Color.defaultFontColor};
        font-weight: 300;
        padding-bottom: 0;
    }
    input[type="checkbox"] {
        position: absolute;
        top: 25px;
        left: 15px;
    }
    `}
`;

const SectionDescription = styled.div``;

const DescriptionTop = styled.h3`
  color: ${({ theme }) => theme.Color.mainFontColor};
  font-size: ${({ theme }) => theme.Fs.default};
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const DescriptionBottom = styled.div`
  display: flex;
  img {
    max-width: 145px;
    margin-right: 0.75rem;
    border-radius: ${({ theme }) => theme.Br.default};
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    span: first-child {
      color: ${({ theme }) => theme.Color.mainFontColor};
      font-size: ${({ theme }) => theme.Fs.default};
      font-weight: 600;
      margin-bottom: 0.3rem;
    }
    span: last-child {
      color: ${({ theme }) => theme.Color.captionFontColor};
      font-size: ${({ theme }) => theme.Fs.caption};
    }
  }
`;
const SectionPrice = styled.div`
  text-align: right;
  margin-top: 2rem;

  ${({ theme }) => `
  span: first-child {
    color: ${theme.Color.captionFontColor};
    font-size: ${theme.Fs.caption};
    font-weight: 600;
    margin-right: 0.5rem;
  }
  span: last-child {
    color: ${theme.Color.mainFontColor};
    font-size: ${theme.Fs.default};
    font-weight: 600;
  }
  `}
`;
