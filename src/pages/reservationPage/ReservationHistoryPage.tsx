import styled from "styled-components";
import { useEffect, useState } from "react";
import { getReservationHistory } from "../../api/reservation";
import ReservationHistoryItem from "../../components/Reservation/ReservationHistoryItem";

export interface ReservationHistory {
  id: number;
  created_at: string;
  paymentType: string;
  reservation_rooms: {
    id: number;
    room_id: number;
    check_in: string;
    check_out: string;
    guest_number: number;
    status: string;
  }[];
}

function ReservationHistoryPage() {
  const [reservationHistory, setReservationHistory] = useState<ReservationHistory[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getReservationHistory();
        setReservationHistory(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <PageContainer>
      {reservationHistory?.length !== 0 ? (
        reservationHistory?.map((item, index) => {
          return <ReservationHistoryItem key={index} item={item} />;
        })
      ) : (
        <div>예약 내역이 없습니다.</div>
      )}
    </PageContainer>
  );
}

export default ReservationHistoryPage;

const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
  gap: 16px;
`;
