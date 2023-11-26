import { useState } from "react";

// libraries
import moment from "moment";

export const useDate = () => {
  // custom hook
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");

  const currentDate = moment(new Date());
  const today = currentDate.format("MM월 DD일");

  const nextDate = currentDate.add(1, "days");
  const formattedNextDate = nextDate.format("MM월 DD일");

  const checkInMoment = moment(checkIn, "MM월 DD일");
  const checkOutMoment = moment(checkOut, "MM월 DD일");
  const differenceInDays = checkOutMoment.diff(checkInMoment, "days");

  return { today, formattedNextDate, checkIn, setCheckIn, checkOut, setCheckOut, differenceInDays };
};
