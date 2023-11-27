// component & interface
import DetailSectionBottom from "./DetailSectionBottom";
import { RoomAccmodation } from "../../pages/detailPage/DetailPage";
import { useCountStore } from "../../store/memberCount";

interface AccommodationRooms {
  accommodation: RoomAccmodation;
}

function DetailSectionBottomBox({ accommodation }: AccommodationRooms) {
  const member = useCountStore((state) => state.counts);

  return (
    <>
      {accommodation.room.map((room) => {
        if (member > room.capacity) {
          return null;
        } else {
          return <DetailSectionBottom key={room.id} room={room} />;
        }
      })}
    </>
  );
}

export default DetailSectionBottomBox;
