// component & interface
import DetailSectionBottom from "./DetailSectionBottom";

// store
import { useCountStore } from "../../store/memberCount";
import { accommodationRoomsList } from "../../store/accommodationList";

function DetailSectionBottomBox() {
  const rooms = accommodationRoomsList((state) => state.accommodationRooms);
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
