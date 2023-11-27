// style
import styled from "styled-components";

interface AccommodationRoomInfo {
  room: {
    image: string;
    name: string;
  };
}

function RoomSectionTop({ room }: AccommodationRoomInfo) {
  const { image, name } = room;

  return (
    <Container>
      <div>
        <img src={image} alt="room-image" />
      </div>
      <TitleSection>
        <h3>{name}</h3>
      </TitleSection>
    </Container>
  );
}

export default RoomSectionTop;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  ${({ theme }) => `
    background-color: ${theme.Color.componentColor};
  `}
`;

const TitleSection = styled.div`
  padding: 0 1rem;
  padding-top: 0.75rem;
  ${({ theme }) => `
    h3 {
        color: ${theme.Color.mainFontColor};
        font-size: ${theme.Fs.modalTitle};
        font-weight: 600;
        padding-bottom: 0.75rem;
        border-bottom: ${theme.Border.thinBorder};    
    }
 `}
`;
