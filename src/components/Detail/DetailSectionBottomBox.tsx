import { useEffect, useState } from "react";

// component & interface
import DetailSectionBottom from "./DetailSectionBottom";
import { IAccommodationRooms } from "../../pages/detailPage/DetailPage";

// zustand
import { useCountStore } from "../../store/memberCount";

interface AccommodationRooms {
  accommodation: IAccommodationRooms[];
}

function DetailSectionBottomBox({ accommodation }: AccommodationRooms) {
  const [rooms, setRooms] = useState<IAccommodationRooms[]>([]);

  useEffect(() => {
    setRooms(accommodation);
  }, [accommodation]);

  const member = useCountStore((state) => state.counts);

  return (
    <>
      {rooms.map((room) => {
        if (member > room.capacity) {
          return null;
        } else {
          return <DetailSectionBottom key={room.roomTypeId} room={room} />;
        }
      })}
    </>
  );
}

export default DetailSectionBottomBox;
