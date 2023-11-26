// icon
import Cart from "../../assets/icons/cart.svg?react";

// style
import styled from "styled-components";

interface AccommodationRoom {
  room: {
    id: null;
    roomTypeId: number;
    name: string;
    description: string;
    image: string;
    stock: number;
    capacity: number;
  };
}

function DetailSectionBottom({ room }: AccommodationRoom) {
  const { name, stock, image } = room;

  return (
    <Container>
      <div>
        <TitleSection>{name}</TitleSection>
        <img src={image} alt="room-image" />
      </div>
      <BottomSection>
        <PriceSection>
          <span>가격</span>
          <span>100,000원</span>
        </PriceSection>
        <RoomSection>
          <span>객실 이용 안내</span>
          <button>바로가기</button>
        </RoomSection>
        <ReserveSection>
          <div>
            <span>남은 객실 {stock}</span>
          </div>
          <div>
            <button className="cartButton">
              <Cart />
            </button>
            <button>예약하기</button>
          </div>
        </ReserveSection>
      </BottomSection>
    </Container>
  );
}

export default DetailSectionBottom;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  padding: 0.35rem 1rem;
  padding-bottom: 0.8rem;
  img {
    border-radius: ${({ theme }) => theme.Br.default};
  }
  ${({ theme }) => `
    background-color: ${theme.Color.componentColor};
  `}
`;
const TitleSection = styled.h3`
  ${({ theme }) => `
  padding: 0.4rem 0; 
  color: ${theme.Color.mainFontColor};
  font-size: ${theme.Fs.default};
  font-weight: 600;
`}
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  border: ${({ theme }) => theme.Border.thinBorder};
  border-radius: ${({ theme }) => theme.Br.default};
  margin-top: 0.35rem;
`;

const PriceSection = styled.div`
  ${({ theme }) => `
    span {
      display: inline-block;
      color: ${theme.Color.mainFontColor};
      font-size: ${theme.Fs.default};
      font-weight: 600;
    }
    display: flex;
    justify-content: space-between;
    margin: 0 0.8rem;
    padding: 0.8rem 0;
    padding-bottom: 0.75rem;
    border-bottom: ${theme.Border.thinBorder};
  `}
`;

const RoomSection = styled.div`
  ${({ theme }) => `
    span {
      display: inline-block;
      color: ${theme.Color.mainFontColor};
      font-size: ${theme.Fs.default};
      font-weight: 600;
    }
    button {
      all: unset;
      cursor: pointer;
      color: ${theme.Color.captionFontColor};
      font-size:${theme.Fs.caption};
      font-weight: 600;
      &:hover {
        transition: all 0.3s;
        color: ${theme.Color.mainFontColor};
      }
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    padding-bottom: 0.5rem;
  `}
`;

const ReserveSection = styled.div`
  ${({ theme }) => `
  span {
   display: inline-block;
   color: ${theme.Color.captionFontColor};
   font-size: ${theme.Fs.caption};
   font-weight: 600;
  }
  div {
    display: flex;
    button {
      all: unset;
      cursor: pointer;
      margin-left: 0.3rem;
      padding: 0.5rem 0.7rem;
      color: ${theme.Color.componentColor};
      background-color: ${theme.Color.mainColor};
      font-size: ${theme.Fs.default};
      font-weight: 600;
      border-radius: ${theme.Br.default};
      &:hover {
        transition: all 0.3s;
        background-color: ${theme.Color.hoverColor};
      }
     }
     button.cartButton {
      padding: 0.4rem 0.5rem;
      background-color: ${theme.Color.componentColor};
      border: ${theme.Border.thinBorder};
      &:hover {
        transition: all 0.3s;
        background-color: ${theme.Color.backgroundColor};
      }
     }
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  padding-bottom: 0.5rem;
  `}
`;
