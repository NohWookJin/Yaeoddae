// library
import React from "react";

// component
import Input from "../Input";
import { SectionContainer, SectionLabel, SectionDivider } from "./reservationStyles";

// function
import { handleInputChange } from "../../utils/handleInputChange";

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
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, setReservationPersonName);
  };
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, setReservationPersonContact);
  };

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
          onChange={handleNameChange}
        />
        <Input
          isRequired={true}
          label={"연락처"}
          placeholder={"연락처를 입력해주세요"}
          type="text"
          marginTop="20px"
          value={reservationPersonContact}
          onChange={handleContactChange}
        />
      </SectionContainer>
      <SectionDivider />
    </>
  );
}

export default ReservationPersonInfoSection;
