import styled from "styled-components";
import { useEffect, useState } from "react";
import { getData } from "../../api/reservation";
import ReservationHistoryItem from "../../components/Reservation/ReservationHistoryItem";

export interface HistoryRoomProps {
  id: number;
  room_id: number;
  check_in: string;
  check_out: string;
  guest_number: number;
  status: string;
}

export interface ReservationHistory {
  id: number;
  created_at: string;
  paymentType: string;
  reservation_rooms: HistoryRoomProps[];
}

function ReservationHistoryPage() {
  const [reservationHistory, setReservationHistory] = useState<ReservationHistory[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData("reservations");
        setReservationHistory(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <PageContainer>
      {Dummy?.length !== 0 ? (
        Dummy?.map((item, index) => {
          return <ReservationHistoryItem key={index} item={item} />;
        })
      ) : (
        <div>예약 내역이 없습니다.</div>
      )}
    </PageContainer>
  );
}

export default ReservationHistoryPage;

const Dummy: ReservationHistory[] = [
  {
    id: 1,
    created_at: "2023.11.29(수)",
    paymentType: "KAKAO_PAY",
    reservation_rooms: [
      {
        id: 4930294802894,
        room_id: 1,
        check_in: "2023.11.29(수)",
        check_out: "2023.11.30(목)",
        guest_number: 2,
        status: "RESERVED",
      },
      {
        id: 4930294802823,
        room_id: 1,
        check_in: "2023.11.29(수)",
        check_out: "2023.11.30(금)",
        guest_number: 1,
        status: "RESERVED",
      },
    ],
  },
  {
    id: 1,
    created_at: "2023.11.30(수)",
    paymentType: "CARD",
    reservation_rooms: [
      {
        id: 4930294802894,
        room_id: 1,
        check_in: "2023.12.01(금)",
        check_out: "2023.12.02(토)",
        guest_number: 2,
        status: "RESERVED",
      },
    ],
  },
];

const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
  gap: 16px;
`;
