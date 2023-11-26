// hook
import { useEffect, useState } from "react";
import { useDate } from "../../hook/useDate";
import { useLocation } from "react-router-dom";

// components
import DatePickModal from "./DatePickModal";

// icons
import Member from "../../assets/icons/User.svg?react";
import Calendar from "../../assets/icons/Calendar.svg?react";

// style
import styled from "styled-components";
import { useCountStore } from "../../store/memberCount";

function DetailDateAndCount() {
  const member = useCountStore((state) => state.counts);
  const increaseMember = useCountStore((state) => state.increaseCount);
  const decreaseMember = useCountStore((state) => state.decreaseCount);

  const { today, formattedNextDate, checkIn, setCheckIn, checkOut, setCheckOut, differenceInDays } =
    useDate();

  const [isDateModalOpen, setIsDateModalOpen] = useState<boolean>(false);
  const [isUserChangeDate, setIsUserChangeDate] = useState<boolean>(false);

  const location = useLocation();

  const handleDateModalClick = () => {
    setIsDateModalOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsUserChangeDate(true);

    if (location.state && location.state.checkInAndCheckOut) {
      setCheckIn(location.state.checkInAndCheckOut.checkIn);
      setCheckOut(location.state.checkInAndCheckOut.checkOut);
    }
  }, [location, setCheckIn, setCheckOut]);

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
            <span>{member}명</span>
          </div>
        </MemberCountSectionLeft>
        <div>
          <button onClick={increaseMember}>증가</button>
          {member > 1 && (
            <button onClick={decreaseMember} style={{ paddingLeft: "0.3rem" }}>
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
