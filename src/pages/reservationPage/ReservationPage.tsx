import { useState } from "react";
import GoBackHeader from "../../components/reservation/GoBackHeader";
import ReservationInfoSection from "../../components/reservation/ReservationInfoSection";
import ReservationPersonInfoSection from "../../components/reservation/ReservationPersonInfoSection";
import ActualUserInfoSection from "../../components/reservation/ActualUserInfoSection";
import PaymentSelectionSection from "../../components/reservation/PaymentSelectionSection";
import PaymentCautions from "../../components/reservation/PaymentCautions";

export interface ReservationInfo {
  accommodationName: string;
  roomName: string;
  checkInDate: string;
  checkOutDate: string;
  guestNumber: number;
  capacity: number;
  nightsCount: number;
  totalPrice: number;
}

function ReservationPage() {
  const [reservationPersonName, setReservationPersonName] = useState<string>("");
  const [reservationPersonContact, setReservationPersonContact] = useState<string>("");

  return (
    <>
      <GoBackHeader pageTitle="예약" />
      <ReservationInfoSection reservationInfo={Dummy} />
      <ReservationPersonInfoSection
        reservationPersonName={reservationPersonName}
        setReservationPersonName={setReservationPersonName}
        reservationPersonContact={reservationPersonContact}
        setReservationPersonContact={setReservationPersonContact}
      />
      <ActualUserInfoSection
        reservationPersonName={reservationPersonName}
        reservationPersonContact={reservationPersonContact}
      />
      <PaymentSelectionSection />
      <PaymentCautions />
      <button>결제하기</button>
    </>
  );
}

const Dummy: ReservationInfo = {
  accommodationName: "글래드 강남 코엑스 센터",
  roomName: "스탠다드 트윈",
  checkInDate: "2023.11.17(금)",
  checkOutDate: "2023.11.19(일)",
  capacity: 2,
  guestNumber: 2,
  nightsCount: 2,
  totalPrice: 429000,
};

export default ReservationPage;
