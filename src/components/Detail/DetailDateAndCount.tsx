import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

// hooks
import { useDate } from "../../hook/useDate";
import { useDetailAPI } from "../../api/detail";

// store
import { useCountStore } from "../../store/memberCount";

// components
import DatePickModal from "./DatePickModal";

// icons
import Member from "../../assets/icons/User.svg?react";
import Calendar from "../../assets/icons/Calendar.svg?react";

// style
import styled from "styled-components";

function DetailDateAndCount() {
  const { counts: memberCount, increaseCount, decreaseCount } = useCountStore();

  const [checkInAfter, setCheckInAfter] = useState<string>("");
  const [checkOutAfter, setCheckOutAfter] = useState<string>("");

  const {
    today,
    formattedNextDate,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    differenceInDays,
    asTodayCheckIn,
    asTodayCheckOut,
  } = useDate();

  const params = useParams();
  const { search } = useLocation();
  const { refreshAccommodationRooms } = useDetailAPI();

  const [isDateModalOpen, setIsDateModalOpen] = useState<boolean>(false);
  const [isUserChangeDate, setIsUserChangeDate] = useState<boolean>(false);

  const handleDateModalClick = () => {
    setIsDateModalOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsUserChangeDate(true);

    if (history.state) {
      setCheckIn(history.state.checkInAndCheckOut.checkIn);
      setCheckOut(history.state.checkInAndCheckOut.checkOut);

      const accommodationId = Number(params.id);
      const checkInForReRendering = `20${history.state.checkInAndCheckOut.checkInForReRendering}`;
      const checkOutForReRendering = `20${history.state.checkInAndCheckOut.checkOutForReRendering}`;

      setCheckInAfter(history.state.checkInAndCheckOut.checkInForReRendering);
      setCheckOutAfter(history.state.checkInAndCheckOut.checkOutForReRendering);

      refreshAccommodationRooms(accommodationId, checkInForReRendering, checkOutForReRendering);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.state, setCheckIn, setCheckOut, setIsDateModalOpen]);

  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    const keyword = queryParams.get("keyword");
    const areaCode = queryParams.get("area-code");

    if (checkIn === "" || checkOut === "") {
      history.replaceState(
        null,
        "",
        `/detail/${params.id}?keyword=${keyword}&area-code=${areaCode}&checkIn=${asTodayCheckIn}&checkOut=${asTodayCheckOut}&memberCount=${memberCount}`
      );
    } else {
      history.replaceState(
        null,
        "",
        `/detail/${params.id}?keyword=${keyword}&area-code=${areaCode}&checkIn=${checkInAfter}&checkOut=${checkOutAfter}&memberCount=${memberCount}`
      );
    }
  }, [
    checkIn,
    checkOut,
    memberCount,
    params.id,
    asTodayCheckIn,
    asTodayCheckOut,
    search,
    checkInAfter,
    checkOutAfter,
  ]);

  return (
    <Container>
      <TitleSection>
        <h3>날짜 및 인원 선택</h3>
      </TitleSection>
      <DateSection>
        <DateSectionLeft>
          <CalendarSVG />
          {!isUserChangeDate || !checkOut ? (
            <div>
              <span>
                {today} ~ {formattedNextDate}
              </span>
              <span>· 1박</span>
            </div>
          ) : (
            <div>
              <span>
                {checkIn} ~ {checkOut}
              </span>
              <span>· {differenceInDays}박</span>
            </div>
          )}
        </DateSectionLeft>
        <div>
          <button onClick={handleDateModalClick}>변경</button>
          <DatePickModal isOpen={isDateModalOpen} setIsOpen={setIsDateModalOpen} />
        </div>
      </DateSection>
      <MemberCountSection>
        <MemberCountSectionLeft>
          <MemberSVG />
          <div>
            <span>{memberCount}명</span>
          </div>
        </MemberCountSectionLeft>
        <div>
          <button onClick={increaseCount}>증가</button>
          {memberCount > 1 && (
            <button onClick={decreaseCount} style={{ paddingLeft: "0.3rem" }}>
              감소
            </button>
          )}
        </div>
      </MemberCountSection>
    </Container>
  );
}

export default DetailDateAndCount;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  padding: 0.8rem 1rem;
  ${({ theme }) => `
    background-color: ${theme.Color.componentColor}
  `}
`;
const TitleSection = styled.div`
  ${({ theme }) => `
    margin-bottom: 0.5rem;
    h3 {
      color: ${theme.Color.mainFontColor};
      font-size: ${theme.Fs.default};
      font-weight: 600;
    }
  `}
`;

const DateSection = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.5rem;
    span {
      color: ${theme.Color.mainFontColor};
      font-size: ${theme.Fs.default};
      font-weight: 600;
    }
    button {
      all: unset;
      color: ${theme.Color.mainFontColor};
      font-size: ${theme.Fs.caption};
      cursor: pointer;
      &:hover {
        transition: all 0.2s;
        font-weight: 600;
      }
    }
    border-bottom: ${theme.Border.thinBorder}
  `}
`;

const DateSectionLeft = styled.div`
  display: flex;
  align-items: center;
`;

const MemberCountSection = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: space-between;
    padding-top: 0.5rem;
    span {
      color: ${theme.Color.mainFontColor};
      font-size: ${theme.Fs.default};
      font-weight: 600;
    }
    button {
      all: unset;
      color: ${theme.Color.mainFontColor};
      font-size: ${theme.Fs.caption};
      cursor: pointer;
      &:hover {
        transition: all 0.2s;
        font-weight: 600;
      }
    }
  `}
`;

const MemberCountSectionLeft = styled.div`
  display: flex;
  align-items: center;
`;

const CalendarSVG = styled(Calendar)`
  display: block;
  margin-right: 0.35rem;
`;

const MemberSVG = styled(Member)`
  display: block;
  margin-right: 0.35rem;
`;
