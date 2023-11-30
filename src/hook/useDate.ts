import { useState } from "react";

// libraries
import moment from "moment";

export const useDate = () => {
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");

  const currentDate = moment(new Date());
  const today = currentDate.format("MM월 DD일");
  const asTodayCheckIn = currentDate.format("YYMMDD");

  const nextDate = currentDate.add(1, "days");
  const formattedNextDate = nextDate.format("MM월 DD일");
  const asTodayCheckOut = nextDate.format("YYMMDD");

  const checkInMoment = moment(checkIn, "MM월 DD일");
  const checkOutMoment = moment(checkOut, "MM월 DD일");
  const differenceInDays = checkOutMoment.diff(checkInMoment, "days");

  const formatYear = (date: string) => {
    return date.substring(2, 4);
  };

  const formatMonth = (date: string) => {
    return date.replace(/-/g, "").substring(4, 6);
  };

  const formatDate = (date: string) => {
    return date.replace(/-/g, "").substring(6, 8);
  };

  return {
    today,
    formattedNextDate,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    differenceInDays,
    asTodayCheckIn,
    asTodayCheckOut,
    formatYear,
    formatMonth,
    formatDate,
  };
};
