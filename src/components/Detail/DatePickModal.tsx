import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCountStore } from "../../store/memberCount";

// styles
import styled, { css } from "styled-components";
import "react-calendar/dist/Calendar.css";

// libraries
import Calendar from "react-calendar";
import moment from "moment";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function DatePickModal({ isOpen, setIsOpen }: Props) {
  const today = moment(new Date()).format("MM월 DD일");
  const member = useCountStore((state) => state.counts);

  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const [queryStartDate, setQueryStartDate] = useState<string>("");
  const [queryEndDate, setQueryEndDate] = useState<string>("");

  const params = useParams();

  const moveDetail = () => {
    history.replaceState(
      { state: checkInAndCheckOut },
      "",
      `/detail/${params.id}?keyword=고운&area-code=SEOUL&checkIn=${queryStartDate}&checkOut=${queryEndDate}&countMember=${member}`
    );
    setIsOpen((prev) => !prev);
  };

  const checkInAndCheckOut = {
    checkIn: startDate,
    checkOut: endDate,
  };

  const handleBackGroundClick = () => {
    setIsOpen((prev) => !prev);
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const handleChangeDate = (e) => {
    const startDateFormat = moment(e[0]).format("MM월 DD일");
    const endDateFormat = moment(e[1]).format("MM월 DD일");
    setQueryStartDate(moment(e[0]).format("YYMMDD"));
    setQueryEndDate(moment(e[1]).format("YYMMDD"));
    setStartDate(startDateFormat);
    setEndDate(endDateFormat);
  };

  return (
    <ModalLayout $isOpen={isOpen}>
      <ModalTop>
        <div onClick={handleBackGroundClick}>
          <span style={{ cursor: "pointer" }}>X</span>
        </div>
        <div>
          <span>날짜 선택</span>
        </div>
        <div></div>
      </ModalTop>
      <ModalMiddle>
        <span>체크인 날짜와 체크아웃 날짜를 선택해주세요.</span>
      </ModalMiddle>
      <CalendarContainer>
        <StyledCalendar
          onChange={handleChangeDate}
          selectRange={true}
          locale="ko-KO"
          next2Label={null}
          prev2Label={null}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          formatDay={(locale, date) => moment(date).format("D")}
          showNeighboringMonth={false}
        />
      </CalendarContainer>
      <ModalBottom>
        <ModalBottomUp>
          <span>선택 날짜</span>
          {startDate === "" ? (
            <div>
              <span>{today} ~ </span>
            </div>
          ) : (
            <div>
              <span>{startDate} ~ </span>
              <span>{endDate}</span>
            </div>
          )}
        </ModalBottomUp>
        <ModalBottomDown>
          <div onClick={moveDetail}>선택하기</div>
        </ModalBottomDown>
      </ModalBottom>
    </ModalLayout>
  );
}

export default DatePickModal;

const ModalLayout = styled.div<{ $isOpen: boolean }>`
  z-index: 2;
  background-color: ${({ theme }) => theme.Color.backgroundColor};
  transition: all 0.75s ease;
  position: fixed;
  bottom: -100%;
  ${(props) =>
    props.$isOpen &&
    css`
      bottom: 0;
    `}
  width: 375px;
  height: 100%;
  transform: translateX(-50%);
  left: 50%;
`;

const ModalTop = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.Padding.header};
  background-color: ${({ theme }) => theme.Color.componentColor};
  display: flex;
  justify-content: space-between;
  div {
    span {
      font-size: ${({ theme }) => theme.Fs.modalTitle};
      color: ${({ theme }) => theme.Color.mainFontColor};
    }
  }
`;

const ModalMiddle = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.Color.componentColor};
  padding: 3rem 0;
  span {
    color: ${({ theme }) => theme.Color.mainFontColor};
  }
`;

const CalendarContainer = styled.div`
  max-width: 375px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  .react-calendar__navigation {
    display: flex;
    align-items: center;
  }

  .react-calendar__navigation button {
    padding: 1rem;
    background-color: none;
    font-size: 2rem;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    font-weight: bold;
    font-size: 1rem;
    border: none;
    margin-bottom: 1rem;
  }

  .react-calendar__tile {
    text-align: center;
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .react-calendar__tile--hasActive {
    color: #ffffff;
    background-color: #797979;
    border-radius: 5px;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    color: ${({ theme }) => theme.Color.componentColor};
    background-color: ${({ theme }) => theme.Color.mainColor};
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: #6a6a6a;
  }
`;

const ModalBottom = styled.div`
  min-width: 375px;
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;

  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  ${({ theme }) => `
  border: ${theme.Border.thinBorder};
  background-color: ${theme.Color.componentColor}
`}
`;

const ModalBottomUp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.3rem;
  span {
    font-size: ${({ theme }) => theme.Fs.default};
    font-weight: 600;
  }
`;

const ModalBottomDown = styled.div`
  width: 100%;
  div {
    text-align: center;
    cursor: pointer;
    padding: 1rem;
    width: 100%;
    background-color: ${({ theme }) => theme.Color.mainColor};
    color: ${({ theme }) => theme.Color.componentColor};
    font-size: ${({ theme }) => theme.Fs.default};
    font-weight: 600;
    border-radius: ${({ theme }) => theme.Br.default};
    &:hover {
      transition: all 0.3s;
      background-color: ${({ theme }) => theme.Color.hoverColor};
    }
  }
`;
