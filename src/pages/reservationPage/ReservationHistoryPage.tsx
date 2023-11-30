// library
import styled from "styled-components";
import { useEffect, useState } from "react";

// api
import useReservationApi from "../../api/reservation";

// component
import ReservationHistoryItem from "../../components/Reservation/ReservationHistoryItem";
import Loading from "../../components/Loading";

export interface HistoryRoomProps {
  id: number;
  checkIn: string;
  checkOut: string;
  guestNumber: number;
  room: { capacity: number; image: string; name: string; price: number };
  accommodation: { name: string; AccommodationId: number; location: { areaCode: string } };
}

export interface ReservationHistory {
  id: number;
  createdAt: string;
  paymentType: string;
  reservationRooms: HistoryRoomProps[];
}

function ReservationHistoryPage() {
  const [reservationHistory, setReservationHistory] = useState<ReservationHistory[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { getData } = useReservationApi();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await getData("reservations");
      setIsLoading(false);
      setReservationHistory(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <PageContainer>
        {reservationHistory?.length !== 0 ? (
          reservationHistory?.map((item, index) => {
            return <ReservationHistoryItem key={index} item={item} />;
          })
        ) : (
          <ErrorPage>예약 내역이 없습니다.</ErrorPage>
        )}
      </PageContainer>
    </>
  );
}

export default ReservationHistoryPage;

const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
  gap: 16px;
`;

const ErrorPage = styled.div`
  display: flex;
  padding-top: 100px;
  width: 100%;
  justify-content: center;
  font-weight: bold;
`;
