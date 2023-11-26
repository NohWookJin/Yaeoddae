import { useEffect, useState } from "react";

export const useDate = () => {
  const [month, setMonth] = useState<number | null>(null);
  const [date, setDate] = useState<number | null>(null);

  useEffect(() => {
    const currentTime = new Date();

    setMonth(currentTime.getMonth() + 1);
    setDate(currentTime.getDate());
  }, []);

  return { month, date };
};
