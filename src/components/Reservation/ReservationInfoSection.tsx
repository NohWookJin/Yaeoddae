// library
import styled from "styled-components";

// component
import DateInfoWrapper from "./DateInfoWrapper";
import { SectionContainer, SectionDivider } from "./reservationStyles";

// function
import { addCommasToNumber } from "../../utils/addCommasToNumber";
import { calculateNumberOfNights, formatDate } from "../../utils/formatOrCalculateData";

// icon
import personIcon from "../../assets/icons/person.svg";

//type
import type { ReservationInfo } from "../../types/reservationTypes";

function ReservationInfoSection({
  reservationInfoList,
}: {
  reservationInfoList: ReservationInfo[] | undefined;
}) {
  return (
    <>
      <SectionContainer>
        {reservationInfoList?.map((reservationInfo, index) => {
          const formattedCheckIn = formatDate(reservationInfo.checkIn);
          const formattedCheckOut = formatDate(reservationInfo.checkOut);
          const nightsCount = calculateNumberOfNights(
            reservationInfo.checkIn,
            reservationInfo.checkOut
          );
          const price = addCommasToNumber(reservationInfo.roomGetResponse.price * nightsCount);

          return (
            <div key={index}>
              <AccommodationInfo>
                <h1>{reservationInfo.accommodationGetResponse.name}</h1>
                <h2>{reservationInfo.roomGetResponse.name}</h2>
              </AccommodationInfo>
              <DateInfo>
                <DateInfoWrapper isCheckIn={true} date={formattedCheckIn} />
                <DateInfoWrapper isCheckIn={false} date={formattedCheckOut} />
              </DateInfo>
              <PersonNumberInfo>
                <img src={personIcon} alt="인원" />
                <span>
                  기준 {reservationInfo.guestNumber}명 / 최대{" "}
                  {reservationInfo.roomGetResponse.capacity}명
                </span>
              </PersonNumberInfo>
              <PriceAndNightInfo>
                <span>{nightsCount}박 기준</span>
                <span>{price}원</span>
              </PriceAndNightInfo>
              <WarningMessage>취소 및 환불 불가</WarningMessage>
            </div>
          );
        })}
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
  margin-bottom: 10px;
`;

export default ReservationInfoSection;
