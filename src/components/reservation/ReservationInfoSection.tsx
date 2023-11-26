// library
import styled from "styled-components";

// component
import DateInfoWrapper from "./DateInfoWrapper";
import { ReservationInfo } from "../../pages/reservationPage/ReservationPage";
import { SectionContainer, SectionDivider } from "./reservationStyles";
import { addCommasToNumber } from "../../utils/addCommasToNumber";

// icon
import personIcon from "../../assets/personIcon.svg";

function ReservationInfoSection({ reservationInfo }: { reservationInfo: ReservationInfo }) {
  return (
    <>
      <SectionContainer>
        <AccommodationInfo>
          <h1>{reservationInfo.accommodationName}</h1>
          <h2>{reservationInfo.roomName}</h2>
        </AccommodationInfo>
        <DateInfo>
          <DateInfoWrapper isCheckIn={true} date={reservationInfo.checkInDate} />
          <DateInfoWrapper isCheckIn={false} date={reservationInfo.checkOutDate} />
        </DateInfo>
        <PersonNumberInfo>
          <img src={personIcon} alt="인원" />
          <span>
            기준 {reservationInfo.guestNumber}명 / 최대 {reservationInfo.capacity}명
          </span>
        </PersonNumberInfo>
        <PriceAndNightInfo>
          <span>{reservationInfo.nightsCount}박 기준</span>
          <span>{addCommasToNumber(reservationInfo.totalPrice)}원</span>
        </PriceAndNightInfo>
        <WarningMessage>취소 및 환불 불가</WarningMessage>
      </SectionContainer>
      <SectionDivider />
    </>
  );
}

const AccommodationInfo = styled.div`
  h1 {
    font-size: ${(props) => props.theme.Fs.tagTitle};
    font-weight: 700;
    margin-bottom: 2px;
  }

  h2 {
    font-size: ${(props) => props.theme.Fs.default};
    margin-bottom: 16px;
  }
`;

const DateInfo = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const PersonNumberInfo = styled.div`
  display: flex;
  gap: 1px;
  align-items: center;
  color: ${(props) => props.theme.Color.defaultFontColor};
  font-size: 0.75rem;
  margin-bottom: 20px;
`;

const PriceAndNightInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-bottom: 2px;

  > span:first-child {
    font-size: 0.75rem;
    color: ${(props) => props.theme.Color.defaultFontColor};
  }
  > span:last-child {
    font-size: 1rem;
    color: ${(props) => props.theme.Color.mainFontColor};
    font-weight: 700;
  }
`;

const WarningMessage = styled.div`
  text-align: right;
  color: ${(props) => props.theme.Color.mainColor};
  font-size: 0.75rem;
`;

export default ReservationInfoSection;
