// component & interface
import DetailSectionBottom from "./DetailSectionBottom";

// store
import { useCountStore } from "../../store/memberCount";
import { accommodationRoomsList } from "../../store/accommodationList";

// styles
import styled from "styled-components";

function DetailSectionBottomBox() {
  const rooms = accommodationRoomsList((state) => state.accommodationRooms);
  const member = useCountStore((state) => state.counts);

  console.log(rooms);

  return (
    <Container>
      {rooms.map((room) => {
        if (member > room.capacity) {
          return null;
        } else {
          return <DetailSectionBottom key={room.roomTypeId} room={room} />;
        }
      })}
    </Container>
  );
}

export default DetailSectionBottomBox;

const Container = styled.div`
  position: relative;
`;
