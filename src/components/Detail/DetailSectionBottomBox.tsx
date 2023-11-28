// component & interface
import DetailSectionBottom from "./DetailSectionBottom";
import { RoomAccmodation } from "../../pages/detailPage/DetailPage";
import { useCountStore } from "../../store/memberCount";
import { useEffect, useState } from "react";

interface AccommodationRooms {
  accommodation: RoomAccmodation[];
}

function DetailSectionBottomBox({ accommodation }: AccommodationRooms) {
  const [rooms, setRooms] = useState<RoomAccmodation[]>([]);

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
