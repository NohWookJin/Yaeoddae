//library
import styled from "styled-components";

// component
import { ReservationHistory } from "../../pages/reservationPage/ReservationHistoryPage";
import HistoryRoom from "./HistoryRoom";

function ReservationHistoryItem({ item }: { item: ReservationHistory }) {
  function getPaymentTypeName(): string {
    switch (item.paymentType) {
      case "KAKAO_PAY":
        return "카카오페이";
      case "CARD":
        return "카드";
      case "MOBILE":
        return "휴대폰";
      case "ACCOUNT":
        return "실시간 계좌 이체";
      default:
        return "기타";
    }
  }

  const payment = getPaymentTypeName();

  return (
    <HistoryContainer>
      <div>
        <span>예약 일자: {item.created_at}</span>
        결제 수단: {payment}
      </div>
      {item.reservation_rooms.map((room, index) => {
        return <HistoryRoom key={index} room={room} />;
      })}
    </HistoryContainer>
  );
}

export default ReservationHistoryItem;

const HistoryContainer = styled.div`
  border: ${({ theme }) => theme.Border.thinBorder};
  border-radius: ${({ theme }) => theme.Br.default};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  font-size: ${({ theme }) => theme.Fs.default};

  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    span {
      font-size: ${({ theme }) => theme.Fs.default};
      font-weight: 700;
      color: ${({ theme }) => theme.Color.mainFontColor};
    }
  }
`;
