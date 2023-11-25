// style
import styled from "styled-components";

interface AccommodationRoomInfo {
  room: {
    description: string;
    capacity: string;
    stock: number;
  };
}

function RoomSectionBottom({ room }: AccommodationRoomInfo) {
  const { description, capacity } = room;

  return (
    <Container>
      <ReserveSectionTop>
        <h3>이용 가이드</h3>
        <div>
          <span>- </span>
          <span>기준 2인</span>
          <span> &nbsp;/&nbsp;</span>
          <span>최대 {capacity}인</span>
        </div>
        <div>
          <span>- </span>
          <span className="lastSectionTop">금연 객실</span>
        </div>
      </ReserveSectionTop>
      <ReserveSectionBottom>
        <h3>객실 상세 설명</h3>
        <div>
          <p>{description}</p>
        </div>
      </ReserveSectionBottom>
    </Container>
  );
}

export default RoomSectionBottom;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  padding: 0.75rem 1rem;
  ${({ theme }) => `
    background-color: ${theme.Color.componentColor};
  `}
`;

const ReserveSectionTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  padding-bottom: 0.75rem;
  margin-bottom: 0.45rem;
  border-bottom: ${({ theme }) => theme.Border.thinBorder};
  h3 {
    font-size: ${({ theme }) => theme.Fs.default};
    color: ${({ theme }) => theme.Color.mainFontColor};
    font-weight: 600;
    padding-bottom: 0.15rem;
  }
  div {
    span {
      font-size: ${({ theme }) => theme.Fs.default};
      color: ${({ theme }) => theme.Color.defaultFontColor};
    }
  }
`;
const ReserveSectionBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  padding-top: 0.3rem;
  padding-bottom: 0.75rem;
  h3 {
    font-size: ${({ theme }) => theme.Fs.default};
    color: ${({ theme }) => theme.Color.mainFontColor};
    font-weight: 600;
    padding-bottom: 0.15rem;
  }
  div {
    p {
      font-size: ${({ theme }) => theme.Fs.default};
      color: ${({ theme }) => theme.Color.defaultFontColor};
      text-align: justify;
    }
  }
`;
