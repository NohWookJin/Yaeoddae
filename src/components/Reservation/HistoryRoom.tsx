// library
import styled from "styled-components";

// component
import { HistoryRoomProps } from "../../pages/reservationPage/ReservationHistoryPage";

// function
import { calculateNumberOfNights, formatDate } from "../../utils/formatOrCalculateData";
import { addCommasToNumber } from "../../utils/addCommasToNumber";

function HistoryRoom({ room }: { room: HistoryRoomProps }) {
  const formattedDate = {
    checkIn: formatDate(room.checkIn),
    checkOut: formatDate(room.checkOut),
  };
  const totalPrice = addCommasToNumber(
    room.room.price * calculateNumberOfNights(room.checkIn, room.checkOut)
  );
  const detailPath = `/detail/${room.accommodation.AccommodationId}?keyword=${
    room.accommodation.name
  }&area-code=${AREACODE[room.accommodation.location.areaCode]}`;

  return (
    <>
      <RoomDivider />
      <HistoryRoomContainer>
        <span>예약 번호 {room.id}</span>
        <div>
          <div>
            <h2>{room.accommodation.name}</h2>
            <a href={detailPath} about="_blank">
              숙소 상세 보기 &gt;
            </a>
          </div>
          <h3>{room.room.name}</h3>
        </div>
        <div>
          <img src={room.room.image} alt="숙소 사진" />
          <ReservationDescription>
            <span>체크인: {formattedDate.checkIn}</span>
            <span>체크아웃: {formattedDate.checkOut}</span>
            <span>
              기준 {room.guestNumber}인 / 최대 {room.room.capacity}명
            </span>
            <span>결제 금액: {totalPrice}원</span>
          </ReservationDescription>
        </div>
      </HistoryRoomContainer>
    </>
  );
}

export default HistoryRoom;

const HistoryRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  gap: 0.5rem;
  color: ${({ theme }) => theme.Fs.mainFontColor};

  span {
    font-size: ${({ theme }) => theme.Fs.default};
    color: #404040;
    font-weight: 700;
  }

  > div:nth-child(2) {
    div {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 20px;
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.Fs.tagTitle};
    font-weight: 700;
  }

  a {
    font-size: 0.75rem;
    flex-shrink: 0;

    &:hover {
      color: ${({ theme }) => theme.Color.mainColor};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.Fs.default};
  }

  > div:last-child {
    display: flex;
    gap: 12px;

    img {
      width: 80px;
      height: 60px;
      object-fit: cover;
      border-radius: ${({ theme }) => theme.Br.default};
    }
  }
`;

const ReservationDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  span {
    font-weight: 500;
    font-size: 0.75rem;
  }
`;

const RoomDivider = styled.div`
  width: 100%;
  height: 0.125rem;
  background-color: ${({ theme }) => theme.Color.borderColor};
`;

type ObjType = {
  [index: string]: string;
};

const AREACODE: ObjType = {
  "1": "SEOUL",
  "2": "INCHEON",
  "3": "DAEJEON",
  "4": "DAEGU",
  "5": "GWANGJU",
  "6": "BUSAN",
  "7": "ULSAN",
  "8": "SEJONG",
  "31": "GYEONGGI",
  "32": "GANGWON",
  "33": "CHUNGBUK",
  "34": "CHUNGNAM",
  "35": "GYEONGBUK",
  "36": "GYEONGNAM",
  "37": "JEONBUK",
  "38": "JEONNAM",
  "39": "JEJU",
};
