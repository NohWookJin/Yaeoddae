// library
import React from "react";

// component
import Input from "../Input";
import { SectionContainer, SectionLabel, SectionDivider } from "./reservationStyles";

function ReservationPersonInfoSection({
  reservationPersonName,
  setReservationPersonName,
  reservationPersonContact,
  setReservationPersonContact,
}: {
  reservationPersonName: string;
  setReservationPersonName: React.Dispatch<React.SetStateAction<string>>;
  reservationPersonContact: string;
  setReservationPersonContact: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <SectionContainer>
        <SectionLabel>
          <h2>예약자 정보</h2>
          <span>*</span>
        </SectionLabel>
        <Input
          isRequired={true}
          label={"성명"}
          placeholder={"성명을 입력해주세요"}
          type="text"
          marginTop="20px"
          value={reservationPersonName}
          setValue={setReservationPersonName}
        />
        <Input
          isRequired={true}
          label={"연락처"}
          placeholder={"연락처를 입력해주세요"}
          type="text"
          marginTop="20px"
          value={reservationPersonContact}
          setValue={setReservationPersonContact}
        />
      </SectionContainer>
      <SectionDivider />
    </>
  );
}

export default ReservationPersonInfoSection;
