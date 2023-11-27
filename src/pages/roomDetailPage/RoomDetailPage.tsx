import { useLocation } from "react-router-dom";

// components
import RoomSectionTop from "../../components/Room/RoomSectionTop";
import RoomSectionBottom from "../../components/Room/RoomSectionBottom";

// style
import styled from "styled-components";

function RoomDetailPage() {
  const location = useLocation();
  const room = location.state.roomState;

  return (
    <Container>
      <RoomSectionTop room={room} />
      <RoomSectionBottom room={room} />
    </Container>
  );
}

export default RoomDetailPage;

const Container = styled.section`
  background-color: ${({ theme }) => theme.Color.backgroundColor}};
`;
