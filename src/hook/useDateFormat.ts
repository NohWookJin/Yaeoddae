import { useState, useEffect } from "react";

export const formatDate = (date: Date, includeTime: boolean = false): string => {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
  };

  if (includeTime) {
    options.hour = "numeric";
    options.minute = "numeric";
  }

  return date.toLocaleDateString("ko-KR", options);
};

export const formatTime = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };

  return date.toLocaleTimeString("ko-KR", options);
};

export const useDateFormatter = (checkIn: string, checkOut: string) => {
  const [formatCheckIn, setFormatCheckIn] = useState<string>("");
  const [formatCheckOut, setFormatCheckOut] = useState<string>("");
  const [formatTimeCheckIn, setFormatTimeCheckIn] = useState<string>("");
  const [formatTimeCheckOut, setFormatTimeCheckOut] = useState<string>("");

  useEffect(() => {
    const isValidDateString = (dateString: string): boolean => {
      return !isNaN(Date.parse(dateString));
    };

    if (isValidDateString(checkIn) && isValidDateString(checkOut)) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);

      const formattedCheckIn = formatDate(checkInDate);
      const formattedCheckOut = formatDate(checkOutDate);
      const formattedTimeCheckIn = formatTime(checkInDate);
      const formattedTimeCheckOut = formatTime(checkOutDate);

      setFormatCheckIn(formattedCheckIn);
      setFormatCheckOut(formattedCheckOut);
      setFormatTimeCheckIn(formattedTimeCheckIn);
      setFormatTimeCheckOut(formattedTimeCheckOut);
    }
  }, [checkIn, checkOut]);

  return { formatCheckIn, formatCheckOut, formatTimeCheckIn, formatTimeCheckOut };
};
